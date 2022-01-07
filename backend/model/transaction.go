package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Transaction struct {
	Id      primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	UserId  primitive.ObjectID `json:"user_id" bson:"user_id"`
	Product []struct {
		CartId        primitive.ObjectID `json:"cart_id" bson:"cart_id"`
		ProductId     primitive.ObjectID `json:"product_id" bson:"product_id"`
		ProductAmount int                `json:"product_amount" bson:"product_amount"`
		PickedOption  string             `json:"picked_option" bson:"picked_option"`
	} `json:"product" bson:"product"`
	CreateTime        time.Time `json:"create_time" bson:"create_time"`
	TransactionStatus string    `json:"transaction_status" bson:"transaction_status"`
}

type TransactionWithProduct struct {
	Id      primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	UserId  primitive.ObjectID `json:"user_id" bson:"user_id"`
	Product []struct {
		CartId        primitive.ObjectID `json:"cart_id" bson:"cart_id"`
		ProductId     primitive.ObjectID `json:"product_id" bson:"product_id"`
		ProductAmount int                `json:"product_amount" bson:"product_amount"`
		PickedOption  string             `json:"picked_option" bson:"picked_option"`
		ProductImage  string             `json:"product_image" bson:"product_image"`
		ProductName   string             `json:"product_name" bson:"product_name"`
		ProductPrice  int                `json:"product_price" bson:"product_price"`
		ProductStatus string             `json:"product_status" bson:"product_status"`
		Seller        primitive.ObjectID `json:"seller" bson:"seller"`
	} `json:"product" bson:"product"`
	CreateTime        time.Time `json:"create_time" bson:"create_time"`
	TransactionStatus string    `json:"transaction_status" bson:"transaction_status"`
}
