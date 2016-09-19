package routers

import (
	"rest_hello/controllers"
	//	"rest_hello/core/authentication"
	//	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
)

func SetAuthenticationRoutes(router *mux.Router) *mux.Router {
	router.HandleFunc("/api/v1/token-auth", controllers.Login).Methods("POST")

	return router
}
