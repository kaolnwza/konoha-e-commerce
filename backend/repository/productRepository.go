package repository

import (
	"context"
	"konoha-e-commerce/db"
	"konoha-e-commerce/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateProductRepo(product model.Product) (*mongo.InsertOneResult, error) {
	return db.MongoDatabase.Collection("product").InsertOne(context.Background(), product)
}

func GetAllProductRepo() (*mongo.Cursor, error) {
	return db.MongoDatabase.Collection("product").Find(context.Background(), bson.M{})
}

func GetProductByIdRepo(id primitive.ObjectID) *mongo.SingleResult {
	return db.MongoDatabase.Collection("product").FindOne(context.Background(), bson.M{"_id": id})
}
