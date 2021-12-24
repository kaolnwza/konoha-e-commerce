package router

import (
	"konoha-e-commerce/controller"

	"github.com/gofiber/fiber/v2"
)

func TransactionRoutes(router fiber.Router) {
	//add transaction to database
	router.Post("/add", controller.CreateTransaction)

}
