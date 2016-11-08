package site

import (
	"CRM4loans/app/models"
)

//MenuItem element menu
type MenuItem struct {
	Name        string             //`json:"Name,string"`
	Link        string             //`json:"Link"`
	Child       []MenuItem         //`json:"Child"`
	Permissions models.Permissions `json:"-"`
}

func (m MenuItem) GetPermissions() models.Permissions {
	return m.Permissions
}

//Menu - container of menu items
type Menu struct {
	Name        string             `json:"Name"`
	Items       []MenuItem         //`json:"Items"`
	Permissions models.Permissions `json:"a"`
}

func (m Menu) GetPermissions() models.Permissions {
	return m.Permissions
}
