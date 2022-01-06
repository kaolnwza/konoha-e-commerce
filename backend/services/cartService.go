package services

import (
	"context"
	"konoha-e-commerce/model"
	"konoha-e-commerce/repository"
	"konoha-e-commerce/util"
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

func GetCartByUserIdService(id string) ([]model.CartWithProduct, error) {
	var cart []model.CartWithProduct

	user_id, _ := primitive.ObjectIDFromHex(id)
	cursor, err := repository.GetCartByUserIdRepo(user_id)
	if err != nil {
		return nil, err
	}

	err = cursor.All(context.Background(), &cart)
	if err != nil {
		return nil, err
	}

	//let merge cart and product
	var product []model.Product
	product, _ = GetAllProductService(product)

	cart = util.MergeCartAndProduct(cart, product)

	cart = util.ConfigOverAmount(cart)

	return cart, nil
}

func ModifyCartAmountByIdService(cart_id primitive.ObjectID, modify_amount int) (*mongo.UpdateResult, error) {

	res, err := repository.ModifyCartAmountByIdRepo(cart_id, modify_amount)
	if err != nil {
		return nil, err
	}

	return res, nil
}

func DeleteCartByIdService(id string) (*mongo.DeleteResult, error) {
	cart_id, _ := primitive.ObjectIDFromHex(id)
	res, err := repository.DeleteCartByIdRepo(cart_id)
	if err != nil {
		return nil, err
	}

	return res, nil

}
