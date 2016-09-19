package routers

import (
	"CRM4loans/controllers"
	//	"CRM4loans/core/authentication"

	//	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
)

func LoginRoutes(router *mux.Router) *mux.Router {
	router.HandleFunc("/login", controllers.LoginController).Methods("GET")
	//	router.Handle("/login",
	//		negroni.New(
	//			//			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
	//			negroni.HandlerFunc(controllers.LoginController),
	//		)).Methods("GET")

	return router
}
