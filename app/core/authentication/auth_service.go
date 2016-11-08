package authentication

import (
	"CRM4loans/app/models"
	"encoding/json"
	"fmt"
	"log"
	//	"strconv"

	jwt "github.com/dgrijalva/jwt-go"
	request "github.com/dgrijalva/jwt-go/request"
	"net/http"
)

//var TL models.ActiveTokenList

//GetTokenFromReques - authentication and create token, return "" if error
func GetTokenFromRequest(r *http.Request) []byte {
	requestUser := new(models.User)
	requestUser.Username = r.PostFormValue("username")
	requestUser.Password = r.PostFormValue("password")

	responseStatus, token := Login(requestUser)
	if responseStatus == http.StatusOK {
		log.Println("services.Login returned OK")
		log.Println("add token for user", requestUser.Username)
		//		TL.TokenList[string(token[:])] = requestUser.Username
		return token
	}
	log.Println("services.Login did not return OK")
	return nil //[]byte("")

}

//Login - Authentication function, return http status and token
func Login(requestUser *models.User) (int, []byte) {
	authBackend := InitJWTAuthenticationBackend()
	authOK, uuid := authBackend.Authenticate(requestUser)
	if authOK {
		token, err := authBackend.GenerateToken(uuid)
		if err != nil {
			return http.StatusInternalServerError, []byte("")
		} else {
			response, _ := json.Marshal(models.TokenAuthentication{token})
			return http.StatusOK, response
		}
	}

	return http.StatusUnauthorized, []byte("")
}

//StringTokenFromRequest extract string token from request
func StringTokenFromRequest(req *http.Request) string {
	if tokStr, err := request.OAuth2Extractor.ExtractToken(req); err == nil {
		return tokStr
	} else {
		return ""
	}
}

//TokenFromRequest get token from http request
func TokenFromRequest(req *http.Request) (*jwt.Token, error) {
	authBackend := InitJWTAuthenticationBackend()
	token, err := request.ParseFromRequest(req, request.OAuth2Extractor, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		} else {
			return authBackend.PublicKey, nil
		}
	})
	if err != nil {
		log.Print("Error getting token from request", err)
		return nil, err
	}
	return token, nil
}
