package controllers

import (
	"html/template"
	"net/http"
)

func LoginController(w http.ResponseWriter, r *http.Request) {

	t, err := template.ParseFiles("./templates/login.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	t.Execute(w, nil)

}
