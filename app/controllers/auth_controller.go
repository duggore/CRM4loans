package controllers

import (
	//"encoding/json"
	"CRM4loans/app/core/authentication"
	"CRM4loans/app/models"
	"log"
	"net/http"

	"github.com/gorilla/context"
)

func Login(w http.ResponseWriter, r *http.Request) { //, next http.HandlerFunc) {
	requestUser := new(models.User)
	requestUser.Username = r.PostFormValue("username")
	requestUser.Password = r.PostFormValue("password")
	log.Println(requestUser.Username)
	log.Println(requestUser.Password)

	responseStatus, token := authentication.Login(requestUser)
	if responseStatus == http.StatusOK {
		log.Println("services.Login returned OK")
		context.Set(r, "token", token)
		MainController(w, r, nil)
	} else {
		log.Println("services.Login did not return OK")
		http.Redirect(w, r, "/login", http.StatusFound)
	}

	//	w.Header().Set("Content-Type", "application/json")
	//	w.WriteHeader(responseStatus)
	//	w.Write(token)

}
