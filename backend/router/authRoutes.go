package router

import (
	"konoha-e-commerce/controller"

	"github.com/gofiber/fiber/v2"
)

func AuthRoutes(router fiber.Router) {

	router.Post("/login", controller.Login)

	router.Delete("/logout", controller.Logout)

	router.Get("/getcookie", controller.GetCookie)
}
