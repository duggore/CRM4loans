package main

import (
	"CRM4loans/app/routers"
	"CRM4loans/settings"
	"net/http"

	//	"CRM4loans/app/core/authentication"
	"github.com/codegangsta/negroni"
)

func main() {
	var err error
	settings.Cfg, err = settings.Init()
	if err != nil {
		panic(err.Error())
	}

	router := routers.InitRoutes()
	n := negroni.Classic()
	n.UseHandler(router)

	http.ListenAndServe(":5000", n)

}
