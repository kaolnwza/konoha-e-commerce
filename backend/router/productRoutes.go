package router

import (
	"konoha-e-commerce/controller"
	"konoha-e-commerce/services"

	"github.com/gofiber/fiber/v2"
)

func ProductRoutes(router fiber.Router) {
	//get product by _id
	router.Get("/getbyid/:id", controller.GetProductById)

	//get all product
	router.Get("/getall", controller.GetAllProduct)

	//product with authorize
	router.Use(services.AuthorizationRequired())

	//add product
	router.Post("/add", controller.CreateProduct)
	//get product by user_id
	router.Get("/getbyuserid/:id", controller.GetProductByUserId)
	//delete product by product_id
	router.Delete("/deletebyid/:id", controller.DeleteProductById)
	//modify product by product_id
	router.Put("/modifybyid", controller.ModifyProductAmountById)

}
