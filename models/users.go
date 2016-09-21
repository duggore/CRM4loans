package models

type User struct {
	UUID       string `json:"uuid" form:"-"`
	Username   string `json:"username" form:"username"`
	Password   string `json:"password" form:"password"`
	Lastname   string `json:"lastname" form:"lastname"`
	Firstname  string `json:"firstname" form:"firstname"`
	Secondname string `json:"secondname" form:"secondname"`
	Email      string `json:"email" form:"email"`
}
