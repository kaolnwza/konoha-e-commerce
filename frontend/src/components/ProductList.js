import { Card, Row, Col, Button, FormCheck, Form } from 'react-bootstrap'
import '../App.css'
import Image from 'react-bootstrap/Image'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsCartCheck } from "react-icons/bs"
const Cart = ({ item, complete, role, transaction_id, product_index }) => {
    const [cart, setCart] = useState([])
    let { product_id_params } = useParams()
    const [asd, setAsd] = useState([])
    const [productList, setProductList] = useState([])
    const [selectedCart, setSelectedCart] = useState('')

    const ChangeStatus = async (status) => {
        console.log(transaction_id)
        await axios.put("/transaction/productstatus/" + transaction_id + '/' + product_index + '/' + status)
            .then(res => console.log(res.status))
    }


    return (
        <div >

            <Card style={{}} className="" >
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
                        <Row className="mt-4 mb-2">
                            <Col md={4}>
                                <span style={spanStyleLeft}>Product Name</span>
                            </Col>
                            <Col>
                                <span style={spanStyleRight} className='text-secondary'>{item.product_name}</span>

                            </Col>

                        </Row>
                        <Row>
                            <Col md={4}>
                                <span style={spanStyleLeft}>Product Amount</span>
                            </Col>

                            <Col>
                                <span style={spanStyleRight} className='text-secondary'>{item.product_amount}</span>


                            </Col>

                        </Row>

                        <Row className="mt-2">
                            <Col md={4}>
                                <span style={spanStyleLeft}>Product Price</span>
                            </Col>

                            <Col>
                                <span style={spanStyleRight} className='text-secondary'>{item.product_price}</span>


                            </Col>
                            {complete == 'complete' && role == 'user' ?
                                <Col>
                                    <Button style={{}} variant="outline-warning">Review</Button>
                                </Col>
                                : null
                            }
                            {complete == 'paid' && role == 'seller' ?
                                <Col>
                                    <Button style={{}} variant="outline-warning" onClick={() => ChangeStatus("shipping")}>Shipping</Button>
                                </Col>
                                : null
                            }
                            {complete == 'onshipping' && role == 'user' ?
                                <Col>
                                    <Button style={{}} variant="outline-warning" onClick={() => ChangeStatus("complete")}>Accpet Product</Button>
                                </Col>
                                : null
                            }
                        </Row>
                    </Col>
                </Row>
            </Card >




        </div >
    )
}

const imageStyle = {
    width: 120,
    height: 120,
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