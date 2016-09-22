package authentication

import (
	"CRM4loans/app/core/authentication"
	"CRM4loans/app/models"
	"CRM4loans/app/models/parameters"
	"encoding/json"
	"log"

	"net/http"
)

//GetTokenFromReques - authentication and create token, return "" if error
func GetTokenFromReques(r *http.Request) []byte {
	requestUser := new(models.User)
	requestUser.Username = r.PostFormValue("username")
	requestUser.Password = r.PostFormValue("password")

	responseStatus, token := authentication.Login(requestUser)
	if responseStatus == http.StatusOK {
		log.Println("services.Login returned OK")
		return token
	}
	log.Println("services.Login did not return OK")
	return nil //[]byte("")

}

func Login(requestUser *models.User) (int, []byte) {
	authBackend := InitJWTAuthenticationBackend()

	if authBackend.Authenticate(requestUser) {
		token, err := authBackend.GenerateToken(requestUser.UUID)
		if err != nil {
			return http.StatusInternalServerError, []byte("")
		} else {
			response, _ := json.Marshal(parameters.TokenAuthentication{token})
			return http.StatusOK, response
		}
	}

	return http.StatusUnauthorized, []byte("")
}
