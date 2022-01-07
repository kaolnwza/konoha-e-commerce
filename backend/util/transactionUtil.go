package util

import (
	"konoha-e-commerce/model"
)

func MergeTransactionAndProduct(transaction []model.TransactionWithProduct, product []model.Product) []model.TransactionWithProduct {

	for t := 0; t < len(transaction); t++ {
		tran_product := transaction[t].Product
		for i := 0; i < len(tran_product); i++ {
			for j := 0; j < len(product); j++ {
				if product[j].Id == tran_product[i].ProductId {
					tran_product[i].ProductName = product[j].ProductName
					tran_product[i].ProductImage = product[j].ProductImage
					tran_product[i].ProductPrice = product[j].ProductPrice
					tran_product[i].Seller = product[j].Seller
				}
			}
		}
	}

	return transaction
}
