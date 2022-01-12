package services

import (
	"konoha-e-commerce/model"
	"konoha-e-commerce/repository"
	"konoha-e-commerce/util"

	"github.com/gofiber/fiber/v2"
	jwtware "github.com/gofiber/jwt/v3"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func AvailableUserService(username string) error {
	db_count, err := repository.CountAvailableUserRepo(username)
	if err != nil {
		return fiber.NewError(404)
	}

	if db_count != 1 {
		return fiber.NewError(404)
	}

	return nil

}

func ComparePasswordService(user model.Login) error {
	var db_user model.Login

	err := repository.GetUserByUsernameRepo(user.Username).Decode(&db_user)
	if err != nil {
		return fiber.NewError(401)
	}

	isPasswordMatch := util.ComparePassword(user.Password, db_user.Password)
	if isPasswordMatch != true {
		return fiber.NewError(401)
	}

	return nil
}

func CreateCookie(user model.Login, c *fiber.Ctx) error {
	var db_user model.User
	err := repository.GetUserByUsernameRepo(user.Username).Decode(&db_user)

	//make primitive objectId to string then slice to delete ObjectId("") out
	newObjectId := util.ObjectIdToString(db_user.Id)
	token, err := util.GenerateToken(newObjectId)
	if err != nil {
		return err
	}

	util.CreateToken(token, c)

	return nil
}

func ExtractCookie(c *fiber.Ctx) (string, error) {
	claims, err := util.ExtractToken(c)
	if err != nil {
		return "", err
	}

	var user model.User

	//turn object id from token to primitive for searching in repository
	claims_string, _ := primitive.ObjectIDFromHex(claims.Issuer)
	err = repository.GetUserByIdRepo(claims_string).Decode(&user)
	if err != nil {
		return "", err
	}

	//make primitive objectId to string then slice to delete ObjectId("") out
	objectid_to_string := user.Id.String()
	objectid_slice := objectid_to_string[10:34]

	return objectid_slice, nil

}

func GetTokenService(c *fiber.Ctx) string {
	return util.GetToken(c)
}

func RemoveCookie(c *fiber.Ctx) {
	util.RemoveToken(c)
}

func AuthorizationRequired() fiber.Handler {
	return jwtware.New(jwtware.Config{
		SigningKey: []byte(util.SecretKey),

		ErrorHandler: ErrorAuth,
	})
}

func ErrorAuth(c *fiber.Ctx, e error) error {
	return c.Status(fiber.StatusUnauthorized).JSON("fail lol \n" + e.Error())
}

func SuccessAuth(c *fiber.Ctx) error {
	return nil
}
