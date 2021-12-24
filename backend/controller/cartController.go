package controller

import (
	"konoha-e-commerce/model"
	"konoha-e-commerce/services"
	"time"

	"github.com/gofiber/fiber/v2"
)

func CreateCart(c *fiber.Ctx) error {
	var cart model.Cart

	err := c.BodyParser(&cart)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	cart.CreateTime = time.Now()
	cart.CartStatus = "uncomplete"

	_, err = services.CreateCartService(cart)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(cart)
}

func GetAllCart(c *fiber.Ctx) error {
	var cart []model.Cart

	cart, err := services.GetAllCartService(cart)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(cart)
}

func GetCartByUserId(c *fiber.Ctx) error {
	var req_cart model.Cart

	err := c.BodyParser(&req_cart)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	user_id := req_cart.UserId
	res_cart, err := services.GetCartByUserIdService(user_id)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_cart)
}
