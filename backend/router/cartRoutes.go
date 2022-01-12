package router

import (
	"konoha-e-commerce/controller"
	"konoha-e-commerce/services"

	"github.com/gofiber/fiber/v2"
)

func CartRoutes(router fiber.Router) {

	router.Use(services.AuthorizationRequired())
	//add user router
	router.Post("/add", controller.CreateCart)

	router.Get("/getall", controller.GetAllCart)

	router.Get("/getbyuserid/:id", controller.GetCartByUserId)

	router.Put("/modifyamountbyid", controller.ModifyCartAmountById)

	router.Delete("/deletebyid/:id", controller.DeleteCartById)
}
