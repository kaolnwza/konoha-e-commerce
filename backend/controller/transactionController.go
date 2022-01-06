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
	if err != nil {
		c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_transaction)
}

func GetAllTransaction(c *fiber.Ctx) error {
	var transaction []model.Transaction

	transaction, err := services.GetAllTransactionService(transaction)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(transaction)
}

func GetTransactionByUserId(c *fiber.Ctx) error {
	user_id := c.Params("id")

	res_cart, err := services.GetTransactionByUserIdService(user_id)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_cart)
}

func PaidTransaction(c *fiber.Ctx) error {
	transaction_id := c.Params("id")

	res, err := services.PaidTransactionService(transaction_id)
	if err != nil {
		c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res)
}

func ProductTransactionStatus(c *fiber.Ctx) error {
	transaction_id := c.Params("id")
	product_index := c.Params("index")
	status := c.Params("status")

	res, err := services.ProductTransactionStatusService(transaction_id, product_index, status)
	if err != nil {
		c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res)
}
