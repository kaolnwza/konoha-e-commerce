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

func GetProductByUserIdRepo(id primitive.ObjectID) (*mongo.Cursor, error) {
	return db.MongoDatabase.Collection("product").Find(context.Background(), bson.M{"seller": id})
}

func DeleteProductByIdRepo(product_id primitive.ObjectID) (*mongo.DeleteResult, error) {
	return db.MongoDatabase.Collection("product").DeleteOne(context.Background(), bson.M{"_id": product_id})
}

func ModifyProductByIdRepo(product model.Product) (*mongo.UpdateResult, error) {
	return db.MongoDatabase.Collection("product").UpdateOne(
		context.Background(),
		bson.M{"_id": product.Id},
		bson.M{"$set": bson.M{
			"product_name":        product.ProductName,
			"product_type":        product.ProductType,
			"product_price":       product.ProductPrice,
			"product_amount":      product.ProductAmount,
			"product_image":       product.ProductImage,
			"product_option":      product.ProductOption,
			"product_description": product.ProductDescription,
		}})
}
