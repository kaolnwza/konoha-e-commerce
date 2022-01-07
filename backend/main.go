package main

import (
	"konoha-e-commerce/router"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "*",
		AllowHeaders:     "Origin, Content-Type, Accept",
		AllowCredentials: true,
		AllowMethods:     "GET, POST, PUT, DELETE",
	}))

	router.SetupRoutes(app)

	app.Listen(":8080")

}
