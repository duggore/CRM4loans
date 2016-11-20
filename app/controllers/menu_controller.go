package controllers

import (
	//	"CRM4loans/app/models"
	"CRM4loans/app/core/authentication"
	//	"CRM4loans/app/core/permissions"
	//	"CRM4loans/app/models"
	//	"CRM4loans/app/models/site"
	"CRM4loans/settings"
	"encoding/json"
	jwt "github.com/dgrijalva/jwt-go"
	"log"
	"net/http"
	//	"strconv"
)

// type Claims struct {
// 	//   Username string `json:"username"`
// 	// recommended having
// 	jwt.StandardClaims
// }

//MenuGet - return menu in JSON format
func MenuGet(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {

	token, err := authentication.TokenFromRequest(r)
	uuid := token.Claims.(jwt.MapClaims)["sub"]
	if err != nil {
		log.Print(err.Error())
	}
	menu := settings.Cfg.MainMenu
	result := menu.CheckPermissions(int(uuid.(float64)), settings.Cfg.Group)
	if result != nil {
		b, err := json.Marshal(*result)
		if err != nil {
			log.Print("error:", err)
			w.Write([]byte("empty"))
			return
		}
		w.Write(b)
		return
	}
	w.Write([]byte("empty"))

}
