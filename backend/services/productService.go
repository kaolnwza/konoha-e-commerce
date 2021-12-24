package services

import (
	"context"
	"konoha-e-commerce/model"
	"konoha-e-commerce/repository"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateProductService(product model.Product) (*mongo.InsertOneResult, error) {
	product.CreateTime = time.Now()

	res, err := repository.CreateProductRepo(product)
	if err != nil {
		return nil, err
	}

	return res, nil
}

//get all product
func GetAllProductService(product []model.Product) ([]model.Product, error) {
	cursor, err := repository.GetAllProductRepo()
	if err != nil {
		return nil, err
	}

	err = cursor.All(context.Background(), &product)
	if err != nil {
		return nil, err
	}
	return product, nil
}

//get product by _id
func GetProductByIdService(id primitive.ObjectID) (model.Product, error) {
	var product model.Product

	err := repository.GetProductByIdRepo(id).Decode(&product)
	if err != nil {
		return model.Product{}, err
	}

	return product, nil
}
