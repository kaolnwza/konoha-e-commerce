package router

import (
	"konoha-e-commerce/controller"

	"github.com/gofiber/fiber/v2"
)

func ReviewRoute(router fiber.Router) {
	//add product to database
	router.Post("/add", controller.CreateReview)
	//get all product
	router.Get("/getall", controller.GetAllProduct)
	//get product by _id
	router.Get("/getbyproduct/:id", controller.GetReviewByProduct)

}
