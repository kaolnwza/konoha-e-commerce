package router

import (
	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	user_route := app.Group("/user")
	UserRoutes(user_route)
	// Setup note routes, can use same syntax to add routes for more models

}
