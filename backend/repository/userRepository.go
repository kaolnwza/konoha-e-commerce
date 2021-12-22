package repository

import (
	"context"
	"konoha-e-commerce/db"
	"konoha-e-commerce/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateUserRepo(user model.User) (*mongo.InsertOneResult, error) {
	return db.MongoDatabase.Collection("user").InsertOne(context.Background(), user)
}

func GetAllUserRepo() (*mongo.Cursor, error) {
	return db.MongoDatabase.Collection("user").Find(context.Background(), bson.M{})
}

func GetUserByIdRepo(id primitive.ObjectID) *mongo.SingleResult {
	return db.MongoDatabase.Collection("user").FindOne(context.Background(), bson.M{"_id": id})
}

func GetUserByUsernameRepo(username string) *mongo.SingleResult {
	return db.MongoDatabase.Collection("user").FindOne(context.Background(), bson.M{"username": username})
}

func GetUserByStoreNameRepo(store_name string) *mongo.SingleResult {
	return db.MongoDatabase.Collection("user").FindOne(context.Background(), bson.M{"store_name": store_name})
}
