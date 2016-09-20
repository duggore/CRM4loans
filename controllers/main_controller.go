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

	t, err := template.ParseFiles("./templates/main.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic(-1)
	}
	//	d := Data{"test message"}
	//	log.Print(d.Token)

	// wd := WebData{
	// 	Token: "test message",
	// }
	err = t.ExecuteTemplate(w, "main.html", string(token.([]uint8))) // reflect.ValueOf(token).String())
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic(-2)
	}

	//	w.Write(reflect.ValueOf(token).Bytes())
}
