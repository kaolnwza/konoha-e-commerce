package controller

import (
	"konoha-e-commerce/model"
	"konoha-e-commerce/services"

	"github.com/gofiber/fiber/v2"
)

func Login(c *fiber.Ctx) error {
	var req_user model.Login

	err := c.BodyParser(&req_user)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	//check is username avilable
	err = services.AvailableUserService(req_user.Username)
	if err != nil {
		return c.Status(404).JSON(err.Error())
	}

	//matching password
	err = services.ComparePasswordService(req_user)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	//create cookie
	err = services.CreateCookie(req_user, c)
	if err != nil {
		return c.Status(500).JSON(err.Error())
	}

	return c.Status(200).JSON("login success")
}

func Logout(c *fiber.Ctx) error {
	services.RemoveCookie(c)
	return nil
}

func GetExtractCookie(c *fiber.Ctx) error {

	res_user, err := services.ExtractCookie(c)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_user)
}

func GetCookie(c *fiber.Ctx) error {
	return c.Status(200).JSON(services.GetTokenService(c))
}
