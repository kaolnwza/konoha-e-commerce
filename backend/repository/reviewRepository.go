package repository

import (
	"context"
	"konoha-e-commerce/db"
	"konoha-e-commerce/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateReviewRepo(review model.Review) (*mongo.InsertOneResult, error) {
	return db.MongoDatabase.Collection("review").InsertOne(context.Background(), review)
}

func GetAllReviewRepo() (*mongo.Cursor, error) {
	return db.MongoDatabase.Collection("review").Find(context.Background(), bson.M{})
}

func GetReviewByProductRepo(id primitive.ObjectID) (*mongo.Cursor, error) {
	return db.MongoDatabase.Collection("review").Find(context.Background(), bson.M{"product_id": id})
}
