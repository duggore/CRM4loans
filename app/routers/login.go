package routers

import (
	"CRM4loans/app/controllers"

	"github.com/gorilla/mux"
)

func LoginRoutesGet(router *mux.Router) *mux.Router {
	router.HandleFunc("/login", controllers.LoginPage).Methods("GET")

	return router
}

func LoginRoutesPost(router *mux.Router) *mux.Router {
	router.HandleFunc("/login", controllers.LoginHandler).Methods("POST")

	return router
}
