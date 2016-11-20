package models

type Permissions struct {
	Read  Rights `json:"Read,omitempty"`
	Write Rights `json:"Write,omitempty"`
}

type Rights struct {
	Users  []int `json:"Users,omitempty"`
	Groups []int `json:"Groups,omitempty"`
}
