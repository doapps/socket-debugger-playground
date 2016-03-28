package main

import (
	"fmt"
	"html/template"
	"net/http"
)

var templates = template.Must(template.ParseFiles("index.html"))

func indexHandler(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, "index.html", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func main() {
	http.HandleFunc("/", indexHandler)

	fmt.Println("Running at 8080")
	http.ListenAndServe(":8080", nil)
}
