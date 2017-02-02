package routers

import (
	"CRM4loans/app/controllers"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
)

//SetAddUserRoutes - set route for add new user
func SetAddUserRoutes(router *mux.Router) *mux.Router {
	router.Handle("/api/v1/users/add",
		negroni.New(
			negroni.HandlerFunc(controllers.RequireTokenAuthentication),
			negroni.HandlerFunc(controllers.AddUserController),
		)).Methods("POST")

	return router
}

//GetUsersRoutes - get all users
func GetUsersRoutes(router *mux.Router) *mux.Router {
	router.Handle("/api/v1/users/getall",
		negroni.New(
			negroni.HandlerFunc(controllers.RequireTokenAuthentication),
			negroni.HandlerFunc(controllers.GetUsersController),
		)).Methods("POST")

	return router
}

// func UsersRoutes(router *mux.Router) *mux.Router {
// 	router.HandleFunc("/users", controllers.MainController).Methods("GET")
// 	// negroni.New(
// 	// 	negroni.HandlerFunc(controllers.RequireTokenAuthentication),
// 	// 	negroni.HandlerFunc(controllers.MainController),
// 	// )).Methods("GET")

// 	return router
// }
