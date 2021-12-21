package controller

import (
	"konoha-e-commerce/model"
	"konoha-e-commerce/services"

	"github.com/gofiber/fiber/v2"
)

//Get body then call CreateUserService
func CreateUser(c *fiber.Ctx) error {
	var user model.User
	err := c.BodyParser(&user)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(err.Error())

	}
	user, err = services.CreateUserService(user)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(err.Error())
	}
	return c.Status(200).JSON(user)

}

func GetAllUser(c *fiber.Ctx) error {
	var user []model.User

	user, err := services.GetAllUserService(user)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(user)
}
