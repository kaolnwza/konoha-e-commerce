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
