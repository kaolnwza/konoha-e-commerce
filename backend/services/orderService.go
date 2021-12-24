package services

import (
	"context"
	"konoha-e-commerce/model"
	"konoha-e-commerce/repository"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func CreateCartService(cart model.Cart) (model.Cart, error) {
	_, err := repository.CreateCartRepo(cart)
	if err != nil {
		return model.Cart{}, err
	}

	return cart, nil
}

func GetAllCartService(cart []model.Cart) ([]model.Cart, error) {
	cursor, err := repository.GetAllCartRepo()
	if err != nil {
		return nil, err
	}

	err = cursor.All(context.Background(), &cart)
	if err != nil {
		return nil, err
	}
	return cart, nil
}

func GetCartByUserIdService(user_id primitive.ObjectID) ([]model.Cart, error) {
	var cart []model.Cart

	cursor, err := repository.GetCartByUserIdRepo(user_id)
	if err != nil {
		return nil, err
	}

	err = cursor.All(context.Background(), &cart)
	if err != nil {
		return nil, err
	}

	return cart, nil
}
