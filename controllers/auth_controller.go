package controllers

import (
	//"encoding/json"
	"log"
	"net/http"
	"rest_hello/services"
	"rest_hello/services/models"

	"github.com/gorilla/context"
)

func Login(w http.ResponseWriter, r *http.Request) { //, next http.HandlerFunc) {
	requestUser := new(models.User)
	requestUser.Username = r.PostFormValue("username")
	requestUser.Password = r.PostFormValue("password")
	log.Println(requestUser.Username)
	log.Println(requestUser.Password)

	responseStatus, token := services.Login(requestUser)
	if responseStatus == http.StatusOK {
		context.Set(r, "token", token)
		MainController(w, r, nil)
	} else {
		http.Redirect(w, r, "/login", http.StatusFound)
	}

	//	w.Header().Set("Content-Type", "application/json")
	//	w.WriteHeader(responseStatus)
	//	w.Write(token)

}
