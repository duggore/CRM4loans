package routers

import (
	"CRM4loans/app/controllers"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
)

//MenuGet -define endpoint fot getting menu
func MenuGet(router *mux.Router) *mux.Router {
	router.Handle("/api/v1/menu/getall",
		negroni.New(
			negroni.HandlerFunc(controllers.RequireTokenAuthentication),
			negroni.HandlerFunc(controllers.MenuGet),
		)).Methods("POST")

	return router
}
