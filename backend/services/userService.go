package services

import (
	"context"
	"konoha-e-commerce/db"
	"konoha-e-commerce/model"
	"konoha-e-commerce/repository"
)

//insert to collection 'user'
func CreateUserService(user model.User) (model.User, error) {
	_, err := db.DB.Collection("user").InsertOne(context.Background(), user)

	return user, err

}

//get all user
func GetAllUserService(user []model.User) ([]model.User, error) {
	cursor, err := repository.GetAllUser()
	if err != nil {
		return nil, err
	}

	err = cursor.All(context.Background(), &user)
	if err != nil {
		return nil, err
	}
	return user, nil
}

//get user by username
