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
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization",
		AllowCredentials: true,
		AllowMethods:     "GET, POST, PUT, DELETE",
	}))
	// app.Use(basicauth.New(basicauth.Config{
	// 	Authorizer: func(a, pass string) bool {
	// 		if 1 == 1 {
	// 			return true
	// 		}
	// 		return true
	// 	},
	// 	Unauthorized: func(c *fiber.Ctx) error {
	// 		return c.Status(403).JSON("fail lol")
	// 	},
	// }))

	router.SetupRoutes(app)

	app.Listen(":8080")

}
