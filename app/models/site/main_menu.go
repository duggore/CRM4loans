package site

import (
	"CRM4loans/app/core/permissions"
	"CRM4loans/app/models"
	"log"
)

//MenuItem element menu
type MenuItem struct {
	Name        string              `json:"Name"`
	Link        string              `json:"Link"`
	Items       []MenuItem          `json:"Items,omitempty"`
	Permissions *models.Permissions `json:"Permissions,omitempty"`
}

func (m MenuItem) CheckPermissions(uuid int, g []models.Group) *MenuItem {
	log.Print("MenuItem CheckPermissions")
	if !permissions.CheckPermissions(m.Permissions, uuid, g) {
		return nil
	}

	item := MenuItem{Name: m.Name, Link: m.Link}
	return m.checkItemsPermissions(&item, uuid, g)
}

func (m MenuItem) checkItemsPermissions(item *MenuItem, uuid int, g []models.Group) *MenuItem {
	for _, o := range m.Items {
		if newitem := o.CheckPermissions(uuid, g); newitem != nil {
			(*item).Items = append((*item).Items, *newitem)

		}
	}
	return item
}

//Menu - container of menu items
type Menu struct {
	Name        string              `json:"Name"`
	Items       []MenuItem          `json:"Items,omitempty"`
	Permissions *models.Permissions `json:"Permissions,omitempty"`
}

//CheckPermissions returns new Menu object without unauthenticated Items and nil value of Permissions field
func (m Menu) CheckPermissions(uuid int, g []models.Group) *Menu {
	if !permissions.CheckPermissions(m.Permissions, uuid, g) {
		return nil
	}
	result := Menu{Name: m.Name}

	for _, o := range m.Items {
		if item := o.CheckPermissions(uuid, g); item != nil {
			result.Items = append(result.Items, *item)
		}

	}
	return &result
}
