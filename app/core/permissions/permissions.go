package permissions

import (
	"CRM4loans/app/models"
	//	"CRM4loans/app/models/site"
	"log"
)

// type PermissionsGetter interface {
// 	GetPermissions() models.Permissions
// }

type PermissionsCheсker interface {
	//	CheckPermissions(uuid int, g []models.Group) PermissionsCheсker
	GetPermissions() models.Permissions
	GetItems() []PermissionsCheсker
}

func CheckReadPermissions(object *PermissionsCheсker, uuid int, groups []models.Group) bool {
	p := object.GetPermissions()
	//	log.Print("GetPermissions")
	//	log.Print(object)
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

func CheckPermissions(object *PermissionsCheсker, uuid int, g []models.Group) { //*PermissionsCheсker {
	log.Print("CheckPermissions")
	log.Print(object)
	if !CheckReadPermissions(object, uuid, g) {
		log.Print("delete object")
		log.Print(object)
		//return nil
		object = nil
	}
	log.Print("GetItems")
	items := object.GetItems()
	for i, o := range items {
		items[i] = CheckPermissions(o, uuid, g)
		//		if !CheckReadPermissions(o, uuid, g) {
		//			items = append(items[:i], items[i+1:]...)
		//		}
	}
	//return object
}
