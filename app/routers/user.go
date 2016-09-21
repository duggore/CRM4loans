package routers

import (
	"CRM4loans/app/controllers"
	"CRM4loans/app/core/authentication"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
)

func SetAddUserRoutes(router *mux.Router) *mux.Router {
	router.Handle("/api/v1/user/add",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(controllers.AddUserController),
		)).Methods("POST")

	return router
}
