package controllers

import (
	"html/template"
	"net/http"
)

func LoginController(w http.ResponseWriter, r *http.Request) {

	t, _ := template.ParseFiles("./templates/login.html")
	t.Execute(w, nil)

}
