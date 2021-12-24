package services

import (
	"konoha-e-commerce/model"
	"konoha-e-commerce/repository"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
)

func CreateTransactionService(transaction model.Transaction) (*mongo.InsertOneResult, error) {
	transaction.CreateTime = time.Now()
	transaction.TransactionStatus = "unpaid"

	res, err := repository.CreateTransactionRepo(transaction)
	if err != nil {
		return nil, err
	}

	return res, nil
}
