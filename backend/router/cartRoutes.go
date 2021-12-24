package router

import (
	"konoha-e-commerce/controller"

	"github.com/gofiber/fiber/v2"
)

func CartRoutes(router fiber.Router) {
	//add user router
	router.Post("/add", controller.CreateCart)

	router.Get("/getall", controller.GetAllCart)

	router.Get("/getbyuserid", controller.GetCartByUserId)

	router.Put("/modifyamountbyid", controller.ModifyCartAmountById)

	router.Delete("/deletebyid", controller.DeleteCartById)
}
