package routers

import (
	"github.com/gorilla/mux"
)

func InitRoutes() *mux.Router {
	router := mux.NewRouter()
	router = MainRoutes(router)
	router = SetHelloRoutes(router)
	router = SetAuthenticationRoutes(router)
	router = SetAddUserRoutes(router)
	router = LoginRoutes(router)
	router = StaticRoutes(router)
	return router
}
