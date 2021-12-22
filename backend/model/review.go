package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Review struct {
	Id        primitive.ObjectID `json:"_id" bson:"_id"`
	UserId    primitive.ObjectID `json:"user_id" bson:"user_id"`
	ProductId primitive.ObjectID `json:"product_id" bson:"product_id"`
	Rating    int                `json:"rating" bson:"rating"`
	Comment   string             `json:"comment" bson:"comment"`
}
