package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Order struct {
	Id            primitive.ObjectID `json:"_id" bson:"_id"`
	UserId        primitive.ObjectID `json:"user_id" bson:"user_id"`
	ProductId     primitive.ObjectID `json:"product_id" bson:"product_id"`
	ProductAmount int                `json:"product_amount" bson:"product_amount"`
	CreateTime    time.Time          `json:"create_time" bson:"create_time"`
	OrderStatus   string             `json:"order_status" bson:"order_status"`
}

// type Order struct {
// 	Id           primitive.ObjectID `json:"_id" bson:"_id"`
// 	UserId       primitive.ObjectID `json:"user_id" bson:"user_id"`
// 	ProductArray []struct {
// 		ProductId     primitive.ObjectID `json:"product_id" bson:"product_id"`
// 		ProductAmount int                `json:"product_amount" bson:"product_amount"`
// 	}
// 	CreateTime  time.Time `json:"create_time" bson:"create_time"`
// 	OrderStatus string    `json:"order_status" bson:"order_status"`
// }
