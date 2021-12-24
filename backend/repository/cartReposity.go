package repository

import (
	"context"
	"konoha-e-commerce/db"
	"konoha-e-commerce/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateCartRepo(cart model.Cart) (*mongo.InsertOneResult, error) {
	return db.MongoDatabase.Collection("cart").InsertOne(context.Background(), cart)
}

func GetAllCartRepo() (*mongo.Cursor, error) {
	return db.MongoDatabase.Collection("cart").Find(context.Background(), bson.M{})
}

func GetCartByUserIdRepo(user_id primitive.ObjectID) (*mongo.Cursor, error) {
	return db.MongoDatabase.Collection("cart").Find(context.Background(), bson.M{"user_id": user_id})
}

func ModifyCartAmountByIdRepo(cart_id primitive.ObjectID, modify_amount int) (*mongo.UpdateResult, error) {
	return db.MongoDatabase.Collection("cart").UpdateOne(
		context.Background(),
		bson.M{"_id": cart_id},
		bson.M{"$set": bson.M{"product_amount": modify_amount}})
}

func DeleteCartByIdRepo(cart_id primitive.ObjectID) (*mongo.DeleteResult, error) {
	return db.MongoDatabase.Collection("cart").DeleteOne(context.Background(), bson.M{"_id": cart_id})
}
