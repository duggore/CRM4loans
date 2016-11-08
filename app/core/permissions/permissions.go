package permissions

import (
	"CRM4loans/app/models"
	"log"
)

type PermissionsChecker interface {
	GetPermissions() models.Permissions
}

func CheckReadPermissions(object PermissionsChecker, uuid int, groups []models.Group) bool {
	p := object.GetPermissions()
	log.Print(p)
	for _, u := range p.Read.Users {
		log.Print("compare:", u, " and ", uuid)
		if u == uuid {
			return true
		}
	}
	for _, permitedGroup := range p.Read.Groups {
		for _, g := range groups {
			if permitedGroup == g.GUID {
				for _, u := range g.Users {
					if u == uuid {
						return true
					}
				}
			}
		}
	}
	return false
}
