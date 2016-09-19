package controllers

import (
	"encoding/json"
	"net/http"
	//	"rest_hello/services"
	"rest_hello/services/models"
)

func AddUserController(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
	newUser := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&newUser)

	//	responseStatus, token := services.Login(requestUser)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	response, _ := json.Marshal(newUser)
	w.Write(response)
}
