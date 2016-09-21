package controllers

import (
	"html/template"
	"log"
	"net/http"

	"github.com/gorilla/context"
)

func MainController(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
	log.Print("Enter to MainController")
	token := context.Get(r, "token")
	//log.Print((string)reflect.ValueOf(token).Bytes())
	// funcMap := template.FuncMap{
	// 	"TOKEN": strings.Title,
	// }

	t, err := template.ParseFiles("./templates/main.tmpl")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic(-1)
	}

	err = t.ExecuteTemplate(w, "main.tmpl", string(token.([]uint8))) // reflect.ValueOf(token).String())
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic(-2)
	}

}
