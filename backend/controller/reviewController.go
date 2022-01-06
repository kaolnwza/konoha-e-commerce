package controller

import (
	"konoha-e-commerce/model"
	"konoha-e-commerce/services"

	"github.com/gofiber/fiber/v2"
)

func CreateReview(c *fiber.Ctx) error {
	var req_review model.Review

	err := c.BodyParser(&req_review)
	if err != nil {
		return c.Status(400).JSON(err.Error())

	}

	res_review, err := services.CreateReviewService(req_review)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res_review)

}

func GetAllReview(c *fiber.Ctx) error {
	var review []model.Review

	review, err := services.GetAllReviewService(review)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(review)
}

func GetReviewByProduct(c *fiber.Ctx) error {
	product_id := c.Params("id")

	res, err := services.GetReviewByProductService(product_id)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}

	return c.Status(200).JSON(res)
}
