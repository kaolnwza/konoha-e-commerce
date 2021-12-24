package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Transaction struct {
	Id      primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	UserId  primitive.ObjectID `json:"user_id" bson:"user_id"`
	Product []struct {
		ProductId     primitive.ObjectID `json:"product_id" bson:"product_id"`
		ProductAmount int                `json:"product_amount" bson:"product_amount"`
	} `json:"product" bson:"product"`
	CreateTime        time.Time `json:"create_time" bson:"create_time"`
	TransactionStatus string    `json:"transaction_status" bson:"transaction_status"`
}
