package main

import (
	"CRM4loans/routers"
	"CRM4loans/settings"
	"net/http"

	"github.com/codegangsta/negroni"
)

func main() {
	settings.Init()
	router := routers.InitRoutes()
	n := negroni.Classic()
	n.UseHandler(router)

	http.ListenAndServe(":5000", n)
}
