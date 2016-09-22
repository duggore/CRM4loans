package routers

import (
	"CRM4loans/app/controllers"

	"github.com/gorilla/mux"
)

//GetTokenRoutes -route for getting token
func GetTokenRoutes(router *mux.Router) *mux.Router {
	router.HandleFunc("/api/v1/gettoken", controllers.GetToken).Methods("POST")

	return router
}
