package site

import (
	"CRM4loans/app/core/permissions"
	"CRM4loans/app/models"
)

//MenuItem element menu
type MenuItem struct {
	Name        string             `json:"Name"`
	Link        string             `json:"Link"`
	Items       []MenuItem         `json:"Items"`
	Permissions models.Permissions `json:"Permissions"`
}

func (m *MenuItem) GetPermissions() models.Permissions {
	return m.Permissions
}

func (m *MenuItem) GetItems() []permissions.PermissionsCheсker {
	result := make([]permissions.PermissionsCheсker, len(m.Items))
	for i := range m.Items {
		result[i] = m.Items[i]
	}
	return result
}

//Menu - container of menu items
type Menu struct {
	Name        string             `json:"Name"`
	Items       []MenuItem         `json:"Items"`
	Permissions models.Permissions `json:"Permissions"`
}

func (m *Menu) GetPermissions() models.Permissions {
	return m.Permissions
}

func (m *Menu) GetItems() []permissions.PermissionsCheсker {
	result := make([]permissions.PermissionsCheсker, len(m.Items))
	for i := range m.Items {
		result[i] = m.Items[i]
	}
	return result
}
