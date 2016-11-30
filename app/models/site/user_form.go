package site

import (
	"CRM4loans/app/core/permissions"
	"CRM4loans/app/models"
	"log"
)

type UserForm struct {
	Name        string              `json:"Name"`
	Users       []User              `json:"User"`
	Permissions *models.Permissions `json:"Permissions,omitempty"`
}
