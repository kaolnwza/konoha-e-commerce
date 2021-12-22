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
	var req_product model.Product

	err := c.BodyParser(&req_product)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	product_id := req_product.Id
	res_product, err := services.GetProductByIdService(product_id)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_product)
}
