import { Card, Row, Col, Button, FormCheck, Form } from 'react-bootstrap'
import '../App.css'
import Image from 'react-bootstrap/Image'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsCartCheck } from "react-icons/bs"
const Cart = () => {
    const [cart, setCart] = useState([])
    let { product_id_params } = useParams()
    const [asd, setAsd] = useState([])
    const [productList, setProductList] = useState([])
    const [selectedCart, setSelectedCart] = useState('')


    useEffect(() => {
        GetCartInfo()
    }, [])


    const GetCartInfo = async () => {
        await axios.get("/cart/getbyuserid/" + localStorage.getItem('user_id'))
            .then(res => {
                setCart(res.data)

            })
    }

    const TransactionObject = (info) => {
        var newArray = []
        if (info) {
            info.forEach(x => {

                newArray = [...newArray, {
                    cart_id: x._id,
                    product_id: x.product_id,
                    product_amount: x.cart_product_amount,
                    picked_option: x.picked_option,
                }]
            });
        }

        return newArray
    }

    const CheckoutCart = async () => {
        //make string selectedcart to int array
        if (selectedCart != '') {
            var splitSelected = selectedCart.slice(0, selectedCart.length - 1).split(',').map(x => Number(x))

            //from idex to get cart
            var getCartId = splitSelected.map((x) => cart[x])


            var transactionObject = TransactionObject(getCartId)
            var data =
            {
                user_id: localStorage.getItem('user_id'),
                product: transactionObject
            }

            await axios.post("/transaction/add", data)
                .then(res => console.log(res))

        }





    }

    const toggleCheck = (cart_index) => {
        var foundIndex = selectedCart.search(cart_index)

        if (foundIndex == -1) {
            setSelectedCart(selectedCart + cart_index + ',')
        }
        else {
            var index = selectedCart.indexOf((cart_index + ','))
            var string = selectedCart.slice(0, index) + selectedCart.slice((index + 2), selectedCart.length)
            setSelectedCart(string)
        }
    }

    const ModifyCartProduct = async (id, amount) => {
        var data = {
            _id: id,
            cart_product_amount: parseInt(amount)
        }
        await axios.put("/cart/modifyamountbyid", data)
    }

    const DeleteCart = async (id) => {
        await axios.delete("/cart/deletebyid/" + id)
            .then(GetCartInfo())

    }

    const MakeDiv = () => {
        if (cart !== null ) {
            return (
        
        cart.map((item, i) => (
            <Card style={{}} className="" key={i}>
                <Row>
                    <Col md={3} >
                        <div style={{ padding: 10 }}>
                            <Image src={item.product_image}
                                style={imageStyle}
                                className="imageObjectFit"
                                rounded
                            />

                        </div>
                    </Col>
                    <Col>
                        <Row className="mt-4">
                            <Col md={3}>
                                <span style={spanStyleLeft}>Product Name</span>
                            </Col>
                            <Col>
                                <span style={spanStyleRight} className='text-secondary'>{item.product_name}</span>

                            </Col>

                        </Row>
                        <Col>
                            <hr style={hrStyle} />
                        </Col>
                        <Row>
                            <Col md={3}>
                                <span style={spanStyleLeft}>Product Amount</span>
                            </Col>

                            <Col md={3}>
                                <Button
                                    style={{ fontSize: 15 }}
                                    variant={'outline-secondary'}
                                    onClick={() => {
                                        if (item.cart_product_amount > 1)
                                            ModifyCartProduct(item._id, item.cart_product_amount - 1)
                                        GetCartInfo()
                                    }}

                                >-</Button>

                                <Button
                                    style={{ fontSize: 15 }}
                                    variant={'outline-secondary'}
                                >{item.cart_product_amount}</Button>

                                <Button
                                    variant={'outline-secondary'}
                                    style={{ fontSize: 15 }}
                                    onClick={() => {

                                        if (item.cart_product_amount < item.product_amount) {
                                            ModifyCartProduct(item._id, item.cart_product_amount + 1)
                                            GetCartInfo()
                                        }


                                    }}
                                >+</Button>
                            </Col>

                        </Row>
                        <Col>
                            <hr style={hrStyle} />
                        </Col>
                        <Row>
                            <Col style={{ marginLeft: 30 }} md={1}>
                                <Button variant="outline-danger" onClick={() => DeleteCart(item._id)}>Delete</Button>

                            </Col>
                            <Col style={{ marginLeft: 10, marginTop: 2 }}> <input type="checkbox" style={checkboxStyle} onClick={() => toggleCheck(i)} /></Col>


                        </Row>
                    </Col>
                </Row>
            </Card >

        ))

            )
    }
else {
    return null
}}


    return (
        <div >
            <Button className="mt-5"
                variant="danger"
                style={{ marginLeft: 10, marginBottom: 10 }}
                onClick={() => CheckoutCart()}>Check out</Button>
            {
                MakeDiv()
            }
            


        </div >
    )
}

const imageStyle = {
    width: 200,
    height: 200,
    color: 'red'



}

const checkboxStyle = {
    width: 35,
    height: 35
}

const hrStyle = {
    marginTop: 20,
    marginBottom: 20
}

const spanStyleLeft = {
    paddingLeft: 30,
    fontWeight: 500
}

const spanStyleRight = {
    paddingLeft: 20,
    fontWeight: 500
}

export default Cart