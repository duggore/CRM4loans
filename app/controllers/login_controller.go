package controllers

import (
	"CRM4loans/settings"
	"html/template"
	"net/http"
)

func LoginController(w http.ResponseWriter, r *http.Request) {

	t, err := template.ParseFiles(settings.Get().PathForTemplates["login"]) //"./templates/login.tmpl")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic("Error parsing ./templates/login.tmpl")
	}
	t.Execute(w, nil)

}
