package controllers

import (
	//"encoding/json"
	"CRM4loans/app/core/authentication"
	//	"fmt"
	"log"
	"net/http"

	//	jwt "github.com/dgrijalva/jwt-go"
	//	request "github.com/dgrijalva/jwt-go/request"
	"github.com/gorilla/context"
)

func RequireTokenAuthentication(rw http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	log.Print("Enter to RequireTokenAuthentication")

	// authBackend := authentication.InitJWTAuthenticationBackend()
	// token, err := request.ParseFromRequest(req, request.OAuth2Extractor, func(token *jwt.Token) (interface{}, error) {
	// 	if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
	// 		return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
	// 	} else {
	// 		return authBackend.PublicKey, nil
	// 	}
	// })

	//	if token, err := request.ParseFromRequest(req, request.OAuth2Extractor, keyLookupFunc); err == nil {
	//        claims := token.Claims.(jwt.MapClaims)
	//        fmt.Printf("Token for user %v expires %v", claims["user"], claims["exp"])
	//    }
	token, err := authentication.TokenFromRequest(req)

	if err == nil && token.Valid {
		log.Print("Token is Valid")
		context.Set(req, "token", token)
		next(rw, req)
	} else {
		//rw.WriteHeader(http.StatusUnauthorized)
		http.Redirect(rw, req, "/login", http.StatusFound)
	}
}

// GetToken handler of user authentication. If it is Ok then return token, else redirect to /login
func GetToken(w http.ResponseWriter, r *http.Request) {

	token := authentication.GetTokenFromRequest(r)
	if token != nil {
		//		log.Println("services.Login returned OK")
		//		context.Set(r, "token", token)
		//		MainController(w, r, nil)
		w.Write(token)
	} else {
		//		log.Println("services.Login did not return OK")
		//		http.Redirect(w, r, "/login", http.StatusFound)
		w.WriteHeader(http.StatusUnauthorized)
	}
}
