package controller

import (
	"konoha-e-commerce/model"
	"konoha-e-commerce/services"

	"github.com/gofiber/fiber/v2"
)

func CreateProduct(c *fiber.Ctx) error {
	var req_product model.Product

	err := c.BodyParser(&req_product)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	res_product, err := services.CreateProductService(req_product)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_product)
}

// get all product
func GetAllProduct(c *fiber.Ctx) error {
	var product []model.Product

	product, err := services.GetAllProductService(product)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(product)
}

// get product by _id
func GetProductById(c *fiber.Ctx) error {
	product_id := c.Params("id")

	res_product, err := services.GetProductByIdService(product_id)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_product)
}

// get product by user_id
func GetProductByUserId(c *fiber.Ctx) error {
	user_id := c.Params("id")

	res_product, err := services.GetProductByUserIdService(user_id)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_product)
}

func DeleteProductById(c *fiber.Ctx) error {
	product_id := c.Params("id")
	response, err := services.DeleteProductByIdService(product_id)
	if err != nil {
		c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(response)
}

func ModifyProductAmountById(c *fiber.Ctx) error {
	var req_product model.Product

	err := c.BodyParser(&req_product)
	if err != nil {
		c.Status(400).JSON(err.Error())
	}

	response, err := services.ModifyProductByIdService(req_product)
	if err != nil {
		c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(response)
}
