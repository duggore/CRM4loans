package routers

import (
	"CRM4loans/app/controllers"
	"CRM4loans/app/core/authentication"

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
