package controllers

import (
	"CRM4loans/settings"

	"log"
	"net/http"
)

func MainController(w http.ResponseWriter, r *http.Request) { //, next http.HandlerFunc) {
	log.Print("Enter to MainController")
	//	token := context.Get(r, "token")

	err := settings.Cfg.Templates["main"].Execute(w, nil) // string(token.([]uint8))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic(-2)
	}

}

// func MainControllerGet(w http.ResponseWriter, r *http.Request) {
// 	http.Redirect(w, r, "/login", http.StatusFound)
//
// }
