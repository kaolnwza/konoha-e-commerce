package services

import (
	"context"
	"konoha-e-commerce/model"
	"konoha-e-commerce/repository"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateCartService(cart model.Cart) (*mongo.InsertOneResult, error) {
	cart.CreateTime = time.Now()
	cart.CartStatus = "uncomplete"

	res, err := repository.CreateCartRepo(cart)
	if err != nil {
		return nil, err
	}

	return res, nil
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

func ModifyCartAmountByIdService(cart_id primitive.ObjectID, modify_amount int) (*mongo.UpdateResult, error) {

	res, err := repository.ModifyCartAmountByIdRepo(cart_id, modify_amount)
	if err != nil {
		return nil, err
	}

	return res, nil
}

func DeleteCartByIdService(cart_id primitive.ObjectID) (*mongo.DeleteResult, error) {

	res, err := repository.DeleteCartByIdRepo(cart_id)
	if err != nil {
		return nil, err
	}

	return res, nil

}
