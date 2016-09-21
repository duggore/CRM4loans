package controllers

import (
	"html/template"
	"net/http"
)

func LoginController(w http.ResponseWriter, r *http.Request) {

	t, err := template.ParseFiles("./templates/login.tmpl")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic("Error parsing ./templates/login.tmpl")
	}
	t.Execute(w, nil)

}
