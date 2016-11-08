package models

type Group struct {
	GUID      int    `json:"GUID" form:"guid"`
	Groupname string `json:"Groupname" form:"groupname"`
	Users     []int  `json:"Users" form:"users"`
}
