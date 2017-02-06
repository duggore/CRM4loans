package models

//User structure for users
type User struct {
	UUID       int    `json:"UUID" form:"uuid"`
	Login      string `json:"Login" form:"login"`
	Password   string `json:"Password" form:"password"`
	Lastname   string `json:"Lastname" form:"lastname"`
	Firstname  string `json:"Firstname" form:"firstname"`
	Secondname string `json:"Secondname" form:"secondname"`
	Email      string `json:"Email" form:"email"`
}
