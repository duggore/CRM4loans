package routers

import (
	"CRM4loans/app/controllers"

	"github.com/gorilla/mux"
)

func SetAuthenticationRoutes(router *mux.Router) *mux.Router {
	router.HandleFunc("/api/v1/token-auth", controllers.Login).Methods("POST")

	return router
}
