package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	Id         primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Firstname  string             `json:"firstname" bson:"firstname"`
	Lastname   string             `json:"lastname" bson:"lastname"`
	Gender     string             `json:"gender" bson:"gender"`
	Address    string             `json:"address" bson:"address"`
	Province   string             `json:"province" bson:"province"`
	Postcode   string             `json:"postcode" bson:"postcode"`
	Email      string             `json:"email" bson:"email"`
	Username   string             `json:"username" bson:"username"`
	Password   string             `json:"password" bson:"password"`
	CreateTime time.Time          `json:"create_time" bson:"create_time"`
	StoreName  string             `json:"store_name" bson:"store_name"`
	Image      string             `json:"image" bson:"image"`
}
