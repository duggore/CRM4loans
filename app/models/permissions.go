package models

type Permissions struct {
	Read  Rights //`json:"-"`
	Write Rights //`json:"-"`
}

type Rights struct {
	Users  []int //`json:"-"`
	Groups []int //`json:"-"`
}
