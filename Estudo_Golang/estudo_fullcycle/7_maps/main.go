package main

import (
	"fmt"
)

func main() {
	salarios := map[string]int{"Miguel": 1200, "Rafael": 12000, "Léo": 8000}
	// fmt.Println(salarios["Miguel"])
	delete(salarios, "Miguel")
	salarios["Ectil"] = 2000
	// fmt.Println(salarios["Ectil"])

	// sal := make(map[string] int)
	// sal1 := map[string]int{}
	// sal1["Miguel"] = 1000

	for _, salario := range salarios {
		fmt.Printf("O salario de é %d\n", salario)
	}
}
