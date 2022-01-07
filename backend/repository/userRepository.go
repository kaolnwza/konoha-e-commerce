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

func DeleteAllUserRepo() (*mongo.DeleteResult, error) {
	return db.MongoDatabase.Collection("user").DeleteMany(context.Background(), bson.M{})
}

func ModifyUserByIdRepo(user model.User) (*mongo.UpdateResult, error) {
	return db.MongoDatabase.Collection("user").UpdateOne(
		context.Background(),
		bson.M{"_id": user.Id},
		bson.M{"$set": bson.M{
			"firstname":  user.Firstname,
			"lastname":   user.Lastname,
			"gender":     user.Gender,
			"address":    user.Address,
			"province":   user.Province,
			"postcode":   user.Postcode,
			"email":      user.Email,
			"store_name": user.StoreName,
			"image":      user.Image,
		}})
}
