package controllers

import (
	"log"
	"net/http"
	"reflect"

	"github.com/gorilla/context"
)

func MainController(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
	log.Print("Enter to MainController")
	token := context.Get(r, "token")
	log.Print(token)
	w.Write(reflect.ValueOf(token).Bytes())
}
