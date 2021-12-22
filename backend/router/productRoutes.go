package router

import (
	"konoha-e-commerce/controller"

	"github.com/gofiber/fiber/v2"
)

func ProductRoutes(router fiber.Router) {
	//add product to database
	router.Post("/add", controller.CreateProduct)
	//get all product
	router.Get("/getall", controller.GetAllProduct)
	//get product by _id
	router.Get("/getbyid", controller.GetProductById)

}
