package authentication

import (
	"CRM4loans/models"
	"CRM4loans/models/parameters"
	"encoding/json"

	"net/http"
)

func Login(requestUser *models.User) (int, []byte) {
	authBackend := InitJWTAuthenticationBackend() //authentication.

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
