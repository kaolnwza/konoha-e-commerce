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
	router.Get("/getbyid/:id", controller.GetProductById)
	//get product by user_id
	router.Get("/getbyuserid/:id", controller.GetProductByUserId)
	//delete product by product_id
	router.Delete("/deletebyid/:id", controller.DeleteProductById)
	//modify product by product_id
	router.Put("/modifybyid", controller.ModifyProductAmountById)

}
