package main

import (
	"html/template"
	"log"
	"os"
)

type WebData struct {
	Token string
}

func main() {
	//	t := template.New("main") //.Funcs(funcMap)

	t, err := template.ParseFiles("../templates/main.html")
	if err != nil {
		log.Print(err.Error())
		panic(-1)
	}
	//	d := Data{"test message"}
	//	log.Print(d.Token)

	// wd := WebData{
	// 	Token: "test message",
	// }

	err = t.ExecuteTemplate(os.Stdout, "main.html", "!!!!!!!!!!!!!") //(os.Stdout, wd)
	if err != nil {
		log.Print(err.Error())
		panic(-2)
	}

}
