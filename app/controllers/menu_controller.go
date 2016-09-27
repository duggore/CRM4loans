package controllers

import (
	"net/http"

	"github.com/gorilla/context"
)

type MenuItem struct {
	Name  string
	Link  string
	Child []MenuItem
}

type Menu struct {
	Name  string
	Items []MenuItem
}

//MenuGet - return menu in JSON format
func MenuGet(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
	token := context.Get(r, "token")

	//TODO create response depending for token
	menu := Menu{
		Name: "Main menu",
		Items: MenuItem[
			{
			Name: "Администрирование",
			Link: "/admin",
			}]
	}
	w.Write([]byte(menu))

}
