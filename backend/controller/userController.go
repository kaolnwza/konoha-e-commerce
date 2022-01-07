package controller

import (
	"konoha-e-commerce/model"
	"konoha-e-commerce/services"

	"github.com/gofiber/fiber/v2"
)

//Get body then call CreateUserService
func CreateUser(c *fiber.Ctx) error {
	var req_user model.User

	err := c.BodyParser(&req_user)
	if err != nil {
		return c.Status(400).JSON(err.Error())

	}

	res_user, err := services.CreateUserService(req_user)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_user)

}

// get all user
func GetAllUser(c *fiber.Ctx) error {
	var user []model.User

	user, err := services.GetAllUserService(user)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(user)
}

// get user by _id
func GetUserById(c *fiber.Ctx) error {
	user_id := c.Params("id")

	res_user, err := services.GetUserByIdService(user_id)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_user)
}

// get user by _id
func GetUserByUsername(c *fiber.Ctx) error {
	username := c.Params("username")

	res_user, err := services.GetUserByUsernameService(username)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_user)
}

// get user by _id
func GetUserByStoreName(c *fiber.Ctx) error {
	store_name := c.Params("storename")

	res_user, err := services.GetUserByStoreNameService(store_name)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_user)
}

func DeleteAllUser(c *fiber.Ctx) error {

	res, err := services.DeleteAllUserService()
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res)
}

func ModifyUserById(c *fiber.Ctx) error {
	var req_user model.User

	err := c.BodyParser(&req_user)
	if err != nil {
		c.Status(400).JSON(err.Error())
	}

	response, err := services.ModifyUserByIdService(req_user)
	if err != nil {
		c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(response)
}
