package routers

import (
	"CRM4loans/app/controllers"

	"github.com/gorilla/mux"
)

func LoginRoutes(router *mux.Router) *mux.Router {
	router.HandleFunc("/login", controllers.LoginController).Methods("GET")

	return router
}
