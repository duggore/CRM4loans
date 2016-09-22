package controllers

import (
	"CRM4loans/settings"
	"html/template"
	"net/http"

	"github.com/gorilla/context"
)

//LoginPage - handler for generate Login Page from template
func LoginPage(w http.ResponseWriter, r *http.Request) {
	path := settings.Get().PathForTemplates["login"]
	t, err := template.ParseFiles(path)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic("Error parsing:" + path)
	}
	t.Execute(w, nil)

}

//LoginHandler - handler for authentication and redirect to Main page or relogin
func LoginHandler(w http.ResponseWriter, r *http.Request) {
	token := GetTokenFromRequest(r)
	if token != nil {
		context.Set(r, "token", token)
		MainController(w, r, nil)
	}
}
