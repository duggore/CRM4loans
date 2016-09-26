package controllers

import (
	"CRM4loans/settings"
	"html/template"
	"log"
	"net/http"
)

func MainController(w http.ResponseWriter, r *http.Request) { //, next http.HandlerFunc) {
	log.Print("Enter to MainController")
	//	token := context.Get(r, "token")

	t, err := template.ParseFiles(settings.Get().PathForTemplates["main"])
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic(-1)
	}

	err = t.Execute(w, nil) // string(token.([]uint8))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic(-2)
	}

}

// func MainControllerGet(w http.ResponseWriter, r *http.Request) {
// 	http.Redirect(w, r, "/login", http.StatusFound)
//
// }
