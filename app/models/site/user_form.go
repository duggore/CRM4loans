package site

import (
	//	"CRM4loans/app/core/permissions"
	"CRM4loans/app/models"
	//	"log"
)

//UserForm - structure for user permission
type UserForm struct {
	Name        string              `json:"Name"`
	Users       []models.User       `json:"User"`
	Permissions *models.Permissions `json:"Permissions,omitempty"`
}
