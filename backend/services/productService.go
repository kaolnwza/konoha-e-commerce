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
func GetProductByIdService(id string) (model.Product, error) {
	var product model.Product

	product_id, _ := primitive.ObjectIDFromHex(id)
	err := repository.GetProductByIdRepo(product_id).Decode(&product)

	if err != nil {
		return model.Product{}, err
	}

	return product, nil
}

//get product by user_id
func GetProductByUserIdService(id string) ([]model.Product, error) {
	var product []model.Product

	user_id, _ := primitive.ObjectIDFromHex(id)
	cursor, err := repository.GetProductByUserIdRepo(user_id)
	if err != nil {
		return nil, err
	}

	err = cursor.All(context.Background(), &product)
	if err != nil {
		return nil, err
	}

	return product, nil
}

func DeleteProductByIdService(id string) (*mongo.DeleteResult, error) {
	product_id, _ := primitive.ObjectIDFromHex(id)
	res, err := repository.DeleteProductByIdRepo(product_id)
	if err != nil {
		return nil, err
	}

	return res, nil

}

func ModifyProductByIdService(product model.Product) (*mongo.UpdateResult, error) {

	res, err := repository.ModifyProductByIdRepo(product)
	if err != nil {
		return nil, err
	}

	return res, nil
}
