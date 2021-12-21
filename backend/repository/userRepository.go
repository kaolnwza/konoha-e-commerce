package repository

import (
	"context"
	"konoha-e-commerce/db"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetAllUser() (*mongo.Cursor, error) {
	return db.DB.Collection("user").Find(context.Background(), bson.M{})
}
