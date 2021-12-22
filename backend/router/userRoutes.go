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
	//get user by _id
	router.Get("/getbyid", controller.GetUserById)
	//get user by username
	router.Get("/getbyusername", controller.GetUserByUsername)
	//get user by store name
	router.Get("/getbystorename", controller.GetUserByStoreName)
}
