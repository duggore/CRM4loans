package settings

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
//	"os"
)


type UserPassword struct {
	Username	string
	Password	string
}

type Settings struct {
	PrivateKeyPath     string
	PublicKeyPath      string
	JWTExpirationDelta int
	User				[]UserPassword
}



var settings Settings = Settings{}


func Init() {

	LoadSettings() 
}

func LoadSettings() { 
	content, err := ioutil.ReadFile("settings/pre.json")
	if err != nil {
		fmt.Println("Error while reading config file", err)
	}
	settings = Settings{}
	jsonErr := json.Unmarshal(content, &settings)
	if jsonErr != nil {
		fmt.Println("Error while parsing config file", jsonErr)
	}
}


func Get() Settings {
	if &settings == nil {
		Init()
	}
	return settings
}


