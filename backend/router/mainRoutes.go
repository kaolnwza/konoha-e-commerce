package router

import (
	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	user_route := app.Group("/user")
	UserRoutes(user_route)

	product_route := app.Group("/product")
	ProductRoutes(product_route)

	cart_route := app.Group("/cart")
	CartRoutes(cart_route)

	transaction_route := app.Group("/transaction")
	TransactionRoutes(transaction_route)

}
