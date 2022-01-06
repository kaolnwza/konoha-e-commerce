package services

import (
	"context"
	"konoha-e-commerce/model"
	"konoha-e-commerce/repository"
	"konoha-e-commerce/util"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

//remove complete cart when create transaction success
func DeleteCompleteCart(cart model.Transaction) error {

	for _, s := range cart.Product {
		strObjectId := util.ObjectIdToString(s.CartId)
		_, err := DeleteCartByIdService(strObjectId)
		if err != nil {
			return err
		}
	}

	return nil
}

func CreateTransactionService(transaction model.Transaction) (*mongo.InsertOneResult, error) {
	transaction.CreateTime = time.Now()
	transaction.TransactionStatus = "unpaid"

	res, err := repository.CreateTransactionRepo(transaction)
	if err != nil {
		return nil, err
	}

	err = DeleteCompleteCart(transaction)
	if err != nil {
		return nil, err
	}

	return res, nil
}

func GetAllTransactionService(transaction []model.Transaction) ([]model.Transaction, error) {
	cursor, err := repository.GetAllTransactionRepo()
	if err != nil {
		return nil, err
	}

	err = cursor.All(context.Background(), &transaction)
	if err != nil {
		return nil, err
	}
	return transaction, nil
}

func GetTransactionByUserIdService(id string) ([]model.TransactionWithProduct, error) {
	var transaction []model.TransactionWithProduct

	user_id, _ := primitive.ObjectIDFromHex(id)
	cursor, err := repository.GetTransactionByUserIdRepo(user_id)
	if err != nil {
		return nil, err
	}

	err = cursor.All(context.Background(), &transaction)
	if err != nil {
		return nil, err
	}

	//get other struct data ex.product image, product name with merge them
	var all_product []model.Product
	all_product, err = GetAllProductService(all_product)
	if err != nil {
		return nil, err
	}

	transaction = util.MergeTransactionAndProduct(transaction, all_product)

	return transaction, nil
}

func PaidTransactionService(transaction_id string) (*mongo.UpdateResult, error) {
	transaction_id_objectId, _ := primitive.ObjectIDFromHex(transaction_id)

	res, err := repository.PaidTransactionRepo(transaction_id_objectId)
	if err != nil {
		return nil, err
	}

	return res, nil
}

func ProductTransactionStatusService(transaction_id string, product_index string, status string) (*mongo.UpdateResult, error) {
	new_transaction_id, _ := primitive.ObjectIDFromHex(transaction_id)
	res, err := repository.ProductTransactionStatusRepo(new_transaction_id, product_index, status)
	if err != nil {
		return nil, err
	}

	return res, nil
}
