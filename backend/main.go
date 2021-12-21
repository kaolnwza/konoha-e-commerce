package main

import (
	"konoha-e-commerce/router"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	router.SetupRoutes(app)

	app.Listen(":8080")

}
