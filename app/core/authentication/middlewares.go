package authentication

import (
	"fmt"
	"net/http"

	jwt "github.com/dgrijalva/jwt-go"
	request "github.com/dgrijalva/jwt-go/request"
)

func RequireTokenAuthentication(rw http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	authBackend := InitJWTAuthenticationBackend()

	//	if token, err := request.ParseFromRequest(req, request.OAuth2Extractor, keyLookupFunc); err == nil {
	//        claims := token.Claims.(jwt.MapClaims)
	//        fmt.Printf("Token for user %v expires %v", claims["user"], claims["exp"])
	//    }

	token, err := request.ParseFromRequest(req, request.OAuth2Extractor, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		} else {
			return authBackend.PublicKey, nil
		}
	})

	if err == nil && token.Valid {
		next(rw, req)
	} else {
		//rw.WriteHeader(http.StatusUnauthorized)
		http.Redirect(rw, req, "/login", http.StatusFound)
	}
}
