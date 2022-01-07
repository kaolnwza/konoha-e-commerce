package util

import (
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

const SecretKey = "naruto007"

func GenerateToken(id string) (string, error) {
	//save objectid as id in token
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    id,
		ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
	})

	token, _ := claims.SignedString([]byte(SecretKey))

	return token, nil
}

func CreateToken(token string, c *fiber.Ctx) {
	cookie := fiber.Cookie{
		Name:    "jwt",
		Value:   token,
		Expires: time.Now().Add(time.Hour * 24),
	}

	c.Cookie(&cookie)
}

func RemoveToken(c *fiber.Ctx) {
	cookie := fiber.Cookie{
		Name:    "jwt",
		Value:   "",
		Expires: time.Now().Add(-time.Hour),
	}

	c.Cookie(&cookie)
}

func ExtractToken(c *fiber.Ctx) (*jwt.StandardClaims, error) {
	cookie := c.Cookies("jwt")

	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{},
		func(t *jwt.Token) (interface{}, error) {
			return []byte(SecretKey), nil
		})
	if err != nil {
		return nil, err
	}

	claims := token.Claims.(*jwt.StandardClaims)

	return claims, nil
}

func ObjectIdToString(id primitive.ObjectID) string {
	objectid_to_string := id.String()
	objectid_slice := objectid_to_string[10:34]

	return objectid_slice
}
