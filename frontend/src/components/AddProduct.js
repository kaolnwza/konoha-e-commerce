import { Form, Button, Col, Row, Image } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import { Text } from 'vue'

const AddProduct = () => {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productImg, setProductImg] = useState('https://image.flaticon.com/icons/png/512/16/16410.png')
    const [productAmount, setProductAmount] = useState(0)
    const [productDesc, setProductDesc] = useState('')
    const [productType, setProductType] = useState('weapon')
    const [productOption, setProductOption] = useState('')
    const [productOptionArray, setProductOptionArray] = useState([])

    const InsertProduct = async () => {

        var data = {
            seller: localStorage.getItem('user_id'),
            product_name: productName,
            product_price: parseInt(productPrice),
            product_image: productImg,
            product_amount: parseInt(productAmount),
            product_description: productDesc,
            product_type: productType,
            product_option: productOption.split(','),
        }
        console.log(data)
        await axios.post("/product/add", data)
            .then(() => window.location.href = "/userprofile")


    }

    const StoreCookie = async () => {
        await axios.get("auth/getcookie")
            .then(res => {
                localStorage.setItem("user_id", res.data)
                console.log(res.data)
            })
            .catch(err => console.log("heeza"))
    }

    const MakeProductOptionArray = () => {
        var toArray = productOption.split(',')
        setProductOptionArray(toArray)

        if (productOption == '') setProductOptionArray([])

    }

    return (
        <Form style={{ marginTop: '10%', paddingLeft: '0%' }}>
            <Row>
                <Col md={5} className="mt-1">
                    <Image src={productImg}
                        style={{ height: 400, width: 400 }}
                        className="imageObjectFit"
                        rounded
                    />
                </Col>
                <Col>
                    <Form.Group className="mb-3" >
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="ex. iPhone X"
                            style={{ width: '75%' }}
                            onChange={e => setProductName(e.target.value)} />

                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="ex. 750"
                            style={{ width: '75%' }}
                            onChange={e => setProductPrice(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Image Source</Form.Label>
                        <Form.Control type="text" placeholder="ex. https://media.comicbook.com/2020/12/naruto-1249229.jpeg"
                            style={{ width: '75%' }}
                            onChange={e => setProductImg(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Product Amount</Form.Label>
                        <Form.Control type="number" placeholder="ex. 23"
                            style={{ width: '75%' }}
                            onChange={e => setProductAmount(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Product Type</Form.Label>
                        <Form.Control
                            as="select"
                            style={{ width: '75%' }}
                            onChange={e => setProductType(e.target.value)}
                        >
                            <option value="weapon">Weapon</option>
                            <option value="clothes">Clothes</option>
                            <option value="phone">Phone</option>
                            <option value="pet">Pet</option>

                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Product Options</Form.Label>
                        <Form.Control type="text" placeholder="ex. black,red,green "
                            style={{ width: '75%' }}
                            onChange={e => setProductOption(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control type="text" placeholder="ex. item for cool boys"
                            style={{ width: '75%' }}
                            onChange={e => setProductDesc(e.target.value)} />
                    </Form.Group>


                    <Button variant="primary" onClick={() => InsertProduct()}>
                        Submit
                    </Button></Col>
            </Row>

        </Form>
    )
}

export default AddProduct