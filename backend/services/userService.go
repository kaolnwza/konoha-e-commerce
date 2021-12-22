package services

import (
	"context"
	"konoha-e-commerce/model"
	"konoha-e-commerce/repository"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

//insert to collection 'user'
func CreateUserService(user model.User) (model.User, error) {
	user.CreateTime = time.Now()

	_, err := repository.CreateUserRepo(user)
	if err != nil {
		return model.User{}, err
	}

	return user, nil

}

//get all user
func GetAllUserService(user []model.User) ([]model.User, error) {
	cursor, err := repository.GetAllUserRepo()
	if err != nil {
		return nil, err
	}

	err = cursor.All(context.Background(), &user)
	if err != nil {
		return nil, err
	}
	return user, nil
}

//get user by _id
func GetUserByIdService(id primitive.ObjectID) (model.User, error) {
	var user model.User

	err := repository.GetUserByIdRepo(id).Decode(&user)
	if err != nil {
		return model.User{}, err
	}

	return user, nil
}

//get user by username
func GetUserByUsernameService(username string) (model.User, error) {
	var user model.User

	err := repository.GetUserByUsernameRepo(username).Decode(&user)
	if err != nil {
		return model.User{}, err
	}

	return user, nil
}

//get user by store_name
func GetUserByStoreNameService(store_name string) (model.User, error) {
	var user model.User

	err := repository.GetUserByStoreNameRepo(store_name).Decode(&user)
	if err != nil {
		return model.User{}, err
	}

	return user, nil
}
