package repository

import (
	"context"
	"konoha-e-commerce/db"

	"go.mongodb.org/mongo-driver/bson"
)

func CountAvailableUserRepo(username string) (int64, error) {
	return db.MongoDatabase.Collection("user").CountDocuments(context.Background(), bson.M{"username": username})
}
