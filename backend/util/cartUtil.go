package util

import (
	"konoha-e-commerce/model"
	"konoha-e-commerce/repository"
)

func MergeCartAndProduct(cart []model.CartWithProduct, product []model.Product) []model.CartWithProduct {
	for i := 0; i < len(cart); i++ {
		for j := 0; j < len(product); j++ {
			if product[j].Id == cart[i].ProductId {
				cart[i].Product = product[j]
			}
		}
	}
	return cart
}

//when cart amount more than product amount
func ConfigOverAmount(cart []model.CartWithProduct) []model.CartWithProduct {
	for i, s := range cart {
		if s.CartProductAmount > s.ProductAmount {
			cart[i].CartProductAmount = s.ProductAmount
			repository.ModifyCartAmountByIdRepo(s.Id, s.ProductAmount)
		}
	}

	return cart
}
