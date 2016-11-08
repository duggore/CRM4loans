package controllers

import (
	//	"CRM4loans/app/models"
	"CRM4loans/app/core/authentication"
	"CRM4loans/app/core/permissions"
	"CRM4loans/app/models"
	"CRM4loans/app/models/site"
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

	menu := settings.Cfg.MainMenu

	token, err := authentication.TokenFromRequest(r)
	uuid := token.Claims.(jwt.MapClaims)["sub"]
	log.Print(uuid)
	log.Print(menu)

	CheckMenuPermissions(&menu, int(uuid.(float64)), settings.Cfg.Group)
	//b, err := json.Marshal(menu)
	json.NewEncoder(w).Encode(&menu)
	if err != nil {
		log.Print("error:", err)
	}
	// w.Write(b)

}

func CheckMenuPermissions(m *site.Menu, uuid int, g []models.Group) bool {
	if !permissions.CheckReadPermissions(m, uuid, g) {
		*m = site.Menu{}
		return false
	}
	for i, mi := range m.Items {
		if !permissions.CheckReadPermissions(mi, uuid, g) {
			m.Items = append(m.Items[:i], m.Items[i+1:]...)
		}
	}
	return true

}
