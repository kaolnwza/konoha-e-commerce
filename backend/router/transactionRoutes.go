package router

import (
	"konoha-e-commerce/controller"

	"github.com/gofiber/fiber/v2"
)

func TransactionRoutes(router fiber.Router) {
	//add transaction to database
	router.Post("/add", controller.CreateTransaction)

	router.Get("/getall", controller.GetAllTransaction)

	router.Get("/getbyuserid/:id", controller.GetTransactionByUserId)

	router.Put("/paidtransaction/:id", controller.PaidTransaction)

	router.Put("/productstatus/:id/:index/:status", controller.ProductTransactionStatus)

}
