package settings

import (
	"CRM4loans/app/models"
	"CRM4loans/app/models/site"
	"encoding/json"
	//	"fmt"
	"html/template"
	"io/ioutil"
)

// type UserPassword struct {
// 	Username string
// 	Password string
// }

type Settings struct {
	PrivateKeyPath     string
	PublicKeyPath      string
	JWTExpirationDelta int
	User               []models.User
	Group              []models.Group
	PathForTemplates   map[string]string
	Templates          map[string]*template.Template
	MainMenu           site.Menu
}

var Cfg *Settings

func Init() (*Settings, error) {
	Cfg = new(Settings)
	err := Cfg.LoadSettings()
	if err != nil {
		return nil, err
	}
	err = Cfg.LoadTemplates()
	if err != nil {
		return nil, err
	}
	return Cfg, nil
}

func (s *Settings) LoadSettings() error {
	content, err := ioutil.ReadFile("settings/config.json")
	if err != nil {
		return err
	}

	err = json.Unmarshal(content, Cfg)
	if err != nil {
		return err
	}
	return nil
}

func (s *Settings) LoadTemplates() error {
	var err error
	s.Templates = make(map[string]*template.Template)
	s.Templates["main"], err = template.ParseFiles(s.PathForTemplates["main"])
	if err != nil {
		return err
	}
	s.Templates["login"], err = template.ParseFiles(s.PathForTemplates["login"])
	if err != nil {
		return err
	}
	return nil

}
