package controller

import (
	"konoha-e-commerce/model"
	"konoha-e-commerce/services"

	"github.com/gofiber/fiber/v2"
)

func CreateTransaction(c *fiber.Ctx) error {
	var req_transaction model.Transaction

	err := c.BodyParser(&req_transaction)
	if err != nil {
		c.Status(400).JSON(err.Error())
	}

	res_transaction, err := services.CreateTransactionService(req_transaction)

	return c.Status(200).JSON(res_transaction)
}
