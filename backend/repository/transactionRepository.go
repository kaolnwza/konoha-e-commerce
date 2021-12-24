package repository

import (
	"context"
	"konoha-e-commerce/db"
	"konoha-e-commerce/model"

	"go.mongodb.org/mongo-driver/mongo"
)

func CreateTransactionRepo(transaction model.Transaction) (*mongo.InsertOneResult, error) {
	return db.MongoDatabase.Collection("transaction").InsertOne(context.Background(), transaction)

}
