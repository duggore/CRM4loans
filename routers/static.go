package routers

import (
	//"rest_hello/controllers"
	//"rest_hello/core/authentication"

	//"github.com/codegangsta/negroni"
	"net/http"

	"github.com/gorilla/mux"
)

func StaticRoutes(router *mux.Router) *mux.Router {
	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

	return router
}
