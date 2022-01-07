import { Card, Row, Col, Button, Form } from 'react-bootstrap'
import '../App.css'
import Image from 'react-bootstrap/Image'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ModifyProduct = () => {
    const [product, setProduct] = useState({})
    let { product_id_params } = useParams()

    const [productName, setProductName] = useState()
    const [productType, setProductType] = useState()
    const [productPrice, setProductPrice] = useState()
    const [productAmount, setProductAmount] = useState()
    const [productImage, setProductImage] = useState("")
    const [productOption, setProductOption] = useState()
    const [productDesc, setProductDesc] = useState()

    useEffect(() => {
        GetProduct()
    }, [])

    const GetProduct = async () => {
        await axios.get("/product/getbyid/" + product_id_params)
            .then(res => {
                setProduct(res.data)
                setProductName(res.data.product_name)
                setProductType(res.data.product_type)
                setProductPrice(res.data.product_price)
                setProductAmount(res.data.product_amount)
                setProductImage(res.data.product_image)
                setProductOption((res.data.product_option) + '')
                setProductDesc(res.data.product_description)
            })

    }

    const UpdateProduct = async () => {
        // var arrayOption = productOption.split(',')
        // console.log(typeof productOption)
        var data = {
            _id: product._id,
            product_name: productName,
            product_type: productType,
            product_price: parseInt(productPrice),
            product_amount: parseInt(productAmount),
            product_image: productImage,
            product_option: productOption.split(','),
            product_description: productDesc
        }
        console.log(data)

        await axios.put("/product/modifybyid", data)
            .then(res => {
                if (res.status == 200) {
                    alert('Update Success')
                }
            })
    }


    return (
        <div >

            <Card style={{}} className="mt-5">
                <Form>
                    <Row>
                        <Col md={5} className="p-4">
                            <div style={{ borderWidth: 1, borderColor: "red" }}>
                                <Image src={productImage}
                                    style={imageStyle}
                                    className="imageObjectFit"
                                    rounded
                                />
                                <Button variant="outline-danger" onClick={() => UpdateProduct()}>Save</Button>
                                <Button variant="outline-warning" style={{ marginLeft: 8 }} onClick={() => console.log(productImage)}>Cancel</Button>
                            </div>
                        </Col>
                        <Col>
                            <Row className="mt-4">
                                <Col md={4}>
                                    <span style={spanStyleLeft}>Product Name</span>
                                </Col>
                                <Col>
                                    <Form.Control type="text" onChange={x => setProductName(x.target.value)} defaultValue={product.product_name} style={formControlStyle} />
                                </Col>

                            </Row>
                            <Col>
                                <hr style={hrStyle} />
                            </Col>
                            <Row>
                                <Col md={4}>
                                    <span style={spanStyleLeft}>Product Type</span>
                                </Col>
                                <Col >
                                    <Form.Control
                                        as="select"
                                        style={formControlStyle}
                                        onChange={e => setProductType(e.target.value)}
                                        value={productType}
                                    >
                                        <option value="weapon">Weapon</option>
                                        <option value="clothes">Clothes</option>
                                        <option value="phone">Phone</option>
                                        <option value="pet">Pet</option>
                                    </Form.Control>
                                </Col>


                            </Row>
                            <Col>
                                <hr style={hrStyle} />
                            </Col>
                            <Row className="mt-4">
                                <Col md={4}>
                                    <span style={spanStyleLeft}>Product Price</span>
                                </Col>
                                <Col>
                                    <Form.Control type="number" onChange={x => setProductPrice(x.target.value)} defaultValue={product.product_price} style={formControlStyle} />
                                </Col>

                            </Row>
                            <Col>
                                <hr style={hrStyle} />
                            </Col>
                            <Row>
                                <Col md={4}>
                                    <span style={spanStyleLeft}>Product Amount</span>
                                </Col>
                                <Col>
                                    <Form.Control type="number" onChange={x => setProductAmount(x.target.value)} defaultValue={product.product_amount} style={formControlStyle} />
                                </Col>


                            </Row>
                            <Col>
                                <hr style={hrStyle} />
                            </Col>
                            <Row className="mt-4">
                                <Col md={4}>
                                    <span style={spanStyleLeft}>Product Image</span>
                                </Col>
                                <Col>
                                    <Form.Control type="text" onChange={x => setProductImage(x.target.value)} defaultValue={product.product_image} style={formControlStyle} />

                                </Col>

                            </Row>
                            <Col>
                                <hr style={hrStyle} />
                            </Col>


                            <Row>
                                <Col md={4}>
                                    <span style={spanStyleLeft}>Product Options</span>
                                </Col>
                                <Col>
                                    <Form.Control type="text" onChange={x => setProductOption(x.target.value)} defaultValue={product.product_option} style={formControlStyle} />
                                </Col>


                            </Row>
                            <Col>
                                <hr style={hrStyle} />
                            </Col>

                            <Row>
                                <Col md={4}>
                                    <span style={spanStyleLeft}>Product Description</span>
                                </Col>
                                <Col>
                                    <Form.Control type="text" onChange={x => setProductDesc(x.target.value)} defaultValue={product.product_description} style={formControlStyle} />
                                </Col>


                            </Row>
                            <Col>
                                <hr style={hrStyle} />
                            </Col>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div >
    )
}

const imageStyle = {
    width: 450,
    height: 450,
    marginBottom: 20


}
const buttonTypeStyle = {
    marginRight: 20
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

const formControlStyle = {
    width: "70%"
}

export default ModifyProduct