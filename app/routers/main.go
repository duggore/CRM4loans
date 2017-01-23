package routers

import (
	"CRM4loans/app/controllers"

	"github.com/gorilla/mux"
)

// func MainRoutes(router *mux.Router) *mux.Router {
// 	router.Handle("/",
// 		negroni.New(
// 			negroni.HandlerFunc(controllers.RequireTokenAuthentication),
// 			negroni.HandlerFunc(controllers.MainController),
// 		)).Methods("GET")
//
// 	return router
// }

func MainRoutes(router *mux.Router) *mux.Router {
	router.HandleFunc("/", controllers.MainController).Methods("GET")

	return router
}
