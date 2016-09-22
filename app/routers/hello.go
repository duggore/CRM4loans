package routers

import (
	"CRM4loans/app/controllers"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
)

func SetHelloRoutes(router *mux.Router) *mux.Router {
	router.Handle("/api/v1/hello",
		negroni.New(
			negroni.HandlerFunc(controllers.RequireTokenAuthentication),
			negroni.HandlerFunc(controllers.HelloController),
		)).Methods("GET")

	return router
}
