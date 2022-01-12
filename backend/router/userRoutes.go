package router

import (
	"konoha-e-commerce/controller"
	"konoha-e-commerce/services"

	"github.com/gofiber/fiber/v2"
)

func UserRoutes(router fiber.Router) {

	//add user to database
	router.Post("/add", controller.CreateUser)
	//get all user
	router.Get("/getall", controller.GetAllUser)
	//get user by _id
	router.Get("/getbyid/:id", controller.GetUserById)
	//get user by username
	router.Get("/getbyusername/:username", controller.GetUserByUsername)
	//get user by store name
	router.Get("/getbystorename/:storename", controller.GetUserByStoreName)

	router.Use(services.AuthorizationRequired())
	//delete all user
	router.Delete("/deletealluser", controller.DeleteAllUser)
	//edit user
	router.Put("/modifyuser", controller.ModifyUserById)
}
