package repository

import (
	"context"
	"konoha-e-commerce/db"
	"konoha-e-commerce/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateTransactionRepo(transaction model.Transaction) (*mongo.InsertOneResult, error) {
	return db.MongoDatabase.Collection("transaction").InsertOne(context.Background(), transaction)

}

func GetAllTransactionRepo() (*mongo.Cursor, error) {
	return db.MongoDatabase.Collection("transaction").Find(context.Background(), bson.M{})
}

func GetTransactionByUserIdRepo(user_id primitive.ObjectID) (*mongo.Cursor, error) {
	return db.MongoDatabase.Collection("transaction").Find(context.Background(), bson.M{"user_id": user_id})
}

func PaidTransactionRepo(transaction_id primitive.ObjectID) (*mongo.UpdateResult, error) {
	return db.MongoDatabase.Collection("transaction").UpdateOne(context.Background(),
		bson.M{"_id": transaction_id},
		bson.M{"$set": bson.M{
			"transaction_status": "paid",
		}})
}

func ProductTransactionStatusRepo(transaction_id primitive.ObjectID, product_index string, status string) (*mongo.UpdateResult, error) {
	set_index := "product." + product_index + ".product_status"
	return db.MongoDatabase.Collection("transaction").UpdateOne(context.Background(),
		bson.M{"_id": transaction_id},
		bson.M{"$set": bson.M{
			set_index:            status,
			"transaction_status": "done",
		}})
}
