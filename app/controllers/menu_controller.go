package controllers

import (
	"encoding/json"
	"log"
	"net/http"
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
	//	token := context.Get(r, "token")

	//TODO create response depending for token
	menuItems := []MenuItem{
		MenuItem{
			Name: "Администрирование",
			Link: "/admin",
		},
	}
	menu := Menu{
		Name:  "Main menu",
		Items: menuItems,
	}
	b, err := json.Marshal(menu)
	if err != nil {
		log.Print("error:", err)
	}
	w.Write(b)

}
