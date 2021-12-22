package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Product struct {
	Id                 primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Seller             primitive.ObjectID `json:"seller" bson:"seller"`
	ProductName        string             `json:"product_name" bson:"product_name:"`
	ProductType        string             `json:"product_type" bson:"product_type"`
	ProductPrice       string             `json:"product_price" bson:"product_price"`
	ProductAmount      int                `json:"product_amount" bson:"product_amount"`
	ProductOption      []string           `json:"product_option" bson:"product_option"`
	ProductImage       string             `json:"product_image" bson:"product_image"`
	ProductSoldAmount  int                `json:"product_sold_amount" bson:"product_sold_amount"`
	ProductDescription string             `json:"product_description" bson:"product_description"`
	CreateTime         time.Time          `json:"create_time" bson:"create_time"`
}
