package routers

import (
	"net/http"

	"github.com/gorilla/mux"
)

//StaticRoutes http-server for static objects for url: /static/
func StaticRoutes(router *mux.Router) *mux.Router {
	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

	return router
}
