package controllers

import (
	"CRM4loans/settings"

	"net/http"
)

//LoginPage - handler for generate Login Page from template
func LoginPage(w http.ResponseWriter, r *http.Request) {
	err := settings.Cfg.Templates["login"].Execute(w, nil) // string(token.([]uint8))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic(-2)
	}

}

//LoginHandler - handler for authentication and redirect to Main page or relogin
// func LoginHandler(w http.ResponseWriter, r *http.Request) {
// 	token := authentication.GetTokenFromReques(r)
// 	if token != nil {
// 		context.Set(r, "token", token)
// 		//	MainController(w, r, nil)
// 	}
// }
