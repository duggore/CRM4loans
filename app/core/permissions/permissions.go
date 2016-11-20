package permissions

import (
	"CRM4loans/app/models"
	//	"CRM4loans/app/models/site"
	"log"
)

func CheckReadPermissions(p *models.Permissions, uuid int, groups []models.Group) bool {
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

func CheckPermissions(p *models.Permissions, uuid int, g []models.Group) bool {
	return CheckReadPermissions(p, uuid, g)
}
