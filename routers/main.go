package routers

import (
	"CRM4loans/controllers"
	"CRM4loans/core/authentication"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
)

func MainRoutes(router *mux.Router) *mux.Router {
	router.Handle("/",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(controllers.MainController),
		)).Methods("GET")

	return router
}
