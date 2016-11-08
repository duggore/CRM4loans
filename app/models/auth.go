package models

type TokenAuthentication struct {
	Token string `json:"token" form:"token"`
}

type ActiveTokenList struct {
	TokenList map[string]string
}
