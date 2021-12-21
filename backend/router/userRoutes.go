package router

import (
	"konoha-e-commerce/controller"

	"github.com/gofiber/fiber/v2"
)

func UserRoutes(router fiber.Router) {
	//add user to database
	router.Post("/add", controller.CreateUser)
	//get all user
	router.Get("/getall", controller.GetAllUser)

}
