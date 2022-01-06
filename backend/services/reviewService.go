package services

import (
	"context"
	"konoha-e-commerce/model"
	"konoha-e-commerce/repository"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateReviewService(review model.Review) (*mongo.InsertOneResult, error) {
	review.CreatedTime = time.Now()

	res, err := repository.CreateReviewRepo(review)
	if err != nil {
		return nil, err
	}

	return res, nil

}

func GetAllReviewService(review []model.Review) ([]model.Review, error) {
	cursor, err := repository.GetAllReviewRepo()
	if err != nil {
		return nil, err
	}

	err = cursor.All(context.Background(), &review)
	if err != nil {
		return nil, err
	}
	return review, nil
}

func GetReviewByProductService(id string) ([]model.Review, error) {
	var review []model.Review

	product_id, _ := primitive.ObjectIDFromHex(id)
	cursor, err := repository.GetReviewByProductRepo(product_id)
	if err != nil {
		return nil, err
	}

	err = cursor.All(context.Background(), &review)
	if err != nil {
		return nil, err
	}

	return review, nil
}
