package settings

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
)

type UserPassword struct {
	Username string
	Password string
}

type Settings struct {
	PrivateKeyPath     string
	PublicKeyPath      string
	JWTExpirationDelta int
	User               []UserPassword
	PathForTemplates   map[string]string
}

var Cfg Settings = Settings{}

func Init() {

	LoadSettings()
}

func LoadSettings() {
	content, err := ioutil.ReadFile("settings/config.json")
	if err != nil {
		fmt.Println("Error while reading config file", err)
	}
	Cfg = Settings{}
	jsonErr := json.Unmarshal(content, &Cfg)
	if jsonErr != nil {
		fmt.Println("Error while parsing config file", jsonErr)
	}
}

func Get() Settings {
	if &Cfg == nil {
		Init()
	}
	return Cfg
}
