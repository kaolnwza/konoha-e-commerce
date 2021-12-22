package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Purchase struct {
	Id             primitive.ObjectID `json:"_id" bson:"_id"`
	UserId         primitive.ObjectID `json:"user_id" bson:"user_id"`
	ProductId      primitive.ObjectID `json:"product_id" bson:"product_id"`
	ProductAmount  int                `json:"product_amount" bson:"product_amount"`
	CreateTime     time.Time          `json:"create_time" bson:"create_time"`
	PurchaseStatus string             `json:"purchase_status" bson:"purchase_status"`
}
