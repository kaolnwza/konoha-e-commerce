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

//insert to collection 'user'
func CreateUserService(user model.User) (*mongo.InsertOneResult, error) {
	user.CreateTime = time.Now()

	generatedPassword, err := util.GeneratePassword(user.Password)
	if err != nil {
		return nil, err
	}
	user.Password = generatedPassword

	res, err := repository.CreateUserRepo(user)
	if err != nil {
		return nil, err
	}

	return res, nil

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
func GetUserByIdService(id string) (model.User, error) {
	var user model.User

	user_id, _ := primitive.ObjectIDFromHex(id)
	err := repository.GetUserByIdRepo(user_id).Decode(&user)
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

func DeleteAllUserService() (*mongo.DeleteResult, error) {
	result, err := repository.DeleteAllUserRepo()
	if err != nil {
		return nil, err
	}

	return result, nil
}

func ModifyUserByIdService(user model.User) (*mongo.UpdateResult, error) {

	res, err := repository.ModifyUserByIdRepo(user)
	if err != nil {
		return nil, err
	}

	return res, nil
}
