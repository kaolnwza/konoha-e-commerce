import { Card, Button, Col, Row, Image } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import '../App.css'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { FaShuttleVan } from 'react-icons/fa';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Product = () => {
    const [chooseItem, setChooseItem] = useState(0)
    const [chooseStar, setChooseStar] = useState(5)
    const testCheckBox = ["Prayuth", "Prawit", "Anutin"]
    const [itemAmount, setItemAmount] = useState(1)
    const [checkBox, setCheckBox] = useState([])

    const [product, setProduct] = useState({})
    const [seller, setSeller] = useState({})


    const { product_id_params } = useParams()

    useEffect(() => {
        GetAllInfo()
    }, [])

    const AddToCart = async () => {
        var data = {
            product_id: product_id_params,
            user_id: localStorage.getItem("user_id"),
            cart_product_amount: itemAmount,
            picked_option: product.product_option[chooseItem]
        }
        await axios.post("/cart/add", data)
            .then(res => console.log(res.status))
        console.log(data)
    }


    const GetAllInfo = () => {
        GetProduct()
    }

    const GetProduct = async () => {
        await axios.get("/product/getbyid/" + product_id_params)
            .then(res => {
                setProduct(res.data)
                setCheckBox(res.data.product_option)
                GetSellerInfo(res.data.seller)
            })
    }

    const GetSellerInfo = async (sellerId) => {
        await axios.get("/user/getbyid/" + sellerId)
            .then(res => {
                setSeller(res.data)
            })
    }

    const MapProductOption = () => {
        const product_option = product.product_option
        return (
            checkBox.map((item, i) =>
            (
                <Button

                    style={{ marginRight: 10, fontSize: 15 }}
                    onClick={() => {
                        setChooseItem(i)
                    }}
                    variant={chooseItem === i ? "info" : 'outline-secondary'}
                    key={i}

                >{item}</Button>
            ))
        )
    }


    return (
        <div >

            <Card
                className="justify-content-md-center mt-4"
            >
                <Card.Body style={cardBodyStyle} className="p-4">
                    <Row>

                        <Col lg="5">
                            <div style={{ width: 400 }}>
                                <Card.Img
                                    style={{ height: 400, width: 400, objectFit: 'cover' }}
                                    src={product.product_image}></Card.Img>
                            </div>
                        </Col>
                        <Col>
                            <Card.Title style={titleStyle}>{product.product_name}</Card.Title>
                            <Card.Text style={descStyle} className="text-muted">
                                <label style={{ color: 'rgb(238,77,45)' }}>
                                    4.8 <AiFillStar />
                                </label>
                                <label style={ratingTopStyle} >
                                    1300 Rating
                                </label>
                                <label>
                                    5900 ?????????????????????
                                </label>
                            </Card.Text>
                            <hr style={hrStyle} />

                            <Card.Text style={priceStyle}>
                                ???{product.product_price}
                            </Card.Text>


                            <Card.Text style={descStyle} className="text-muted">
                                <Row>
                                    <Col lg="3">
                                        <label >
                                            ???????????????????????????
                                        </label>
                                    </Col>
                                    <Col>
                                        <label style={descShipping}>
                                            <FaShuttleVan size={20} /> ????????? {seller.province}
                                        </label>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text style={descStyle} className="text-muted">
                                <Row style={{ marginTop: 20 }}>
                                    <Col lg="3">
                                        <label >
                                            ????????????????????????
                                        </label>
                                    </Col>
                                    <Col>
                                        <div style={descShipping}>
                                            {
                                                MapProductOption()
                                            }


                                        </div>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text style={descStyle} className="text-muted">
                                <Row style={{ marginTop: 20 }}>
                                    <Col lg="3">
                                        <label >
                                            ???????????????
                                        </label>
                                    </Col>
                                    <Col>
                                        <div style={descShipping}>
                                            <Button
                                                style={{ fontSize: 15 }}
                                                variant={'outline-secondary'}
                                                onClick={() => {
                                                    if (itemAmount > 0)
                                                        setItemAmount(itemAmount - 1)
                                                }
                                                }
                                            >-</Button>

                                            <Button
                                                style={{ fontSize: 15 }}
                                                variant={'outline-secondary'}
                                                disabled>{itemAmount}</Button>

                                            <Button
                                                variant={'outline-secondary'}
                                                style={{ fontSize: 15 }}
                                                onClick={() => {
                                                    if (itemAmount < product.product_amount) {
                                                        setItemAmount(itemAmount + 1)
                                                    }
                                                }}
                                            >+</Button>


                                        </div>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text style={descStyle, { marginTop: 20 }} className="text-muted">
                                <Row>
                                    <Col xs="3">
                                        <Button variant='outline-danger' style={{ marginRight: 10 }}
                                            onClick={() => AddToCart()}>????????????????????????????????????????????????</Button>
                                    </Col>
                                    <Col>
                                        <Button variant='danger'>??????????????????????????????</Button>
                                    </Col>
                                </Row>
                            </Card.Text>

                            <Card.Text style={descStyle} className="text-muted">
                                <div>
                                    <AiOutlineHeart size={20} /> Favorite
                                </div>
                            </Card.Text>

                        </Col>
                    </Row>
                </Card.Body>

            </Card>
            <Card className="mt-4">
                <Card.Body>
                    <Card.Text style={descStyle} className="text-muted">
                        <Row >
                            <Col lg="1" style={{ paddingLeft: 30 }}>
                                <label >
                                    <Image
                                        roundedCircle
                                        style={{ width: 100, height: 100, objectFit: 'cover' }}
                                        src={seller.image}></ Image>

                                </label>
                            </Col>
                            <Col style={{ color: 'black', marginLeft: 40, paddingTop: 10 }}>
                                <div style={{ marginBottom: 8 }}>
                                    <label style={{ fontSize: 18 }}>
                                        {seller.store_name}
                                    </label>
                                </div>
                                <div>
                                    <Button variant="outline-danger" style={{ fontSize: 14 }}>???????????????????????????</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mt-4">
                <Card.Body>
                    <Card.Title style={{ color: '#333333' }}>????????????????????????????????????</Card.Title>


                    <Card.Text style={descStyle} className="text-muted">
                        <Row >
                            <hr style={hrStyle} />
                            <Col lg="2">
                                <label >
                                    ????????????????????????
                                </label>
                            </Col>
                            <Col style={{ color: 'black', marginBottom: 5 }}>
                                <label>{product.product_type}</label>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Card.Text style={descStyle} className="text-muted">
                        <Row >
                            <Col lg="2">
                                <label >
                                    ?????????????????????????????????
                                </label>
                            </Col>
                            <Col style={{ color: 'black', marginBottom: 5 }}>
                                <label>{product.product_amount}</label>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Card.Text style={descStyle} className="text-muted">
                        <Row >
                            <Col lg="2">
                                <label >
                                    ??????????????????
                                </label>
                            </Col>
                            <Col style={{ color: 'black', marginBottom: 5 }}>
                                <label>?????????????????????</label>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Card.Text style={descStyle} className="text-muted">
                        <Row >
                            <Col lg="2">
                                <label >
                                    ????????????????????????????????????????????????
                                </label>
                            </Col>
                            <Col style={{ color: 'black', marginBottom: 0 }}>
                                <label>
                                    {product.product_description}
                                </label>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="mt-4 mb-5">
                <Card.Body>
                    <Card.Title style={{ color: '#333333' }}>??????????????????????????????????????????</Card.Title>


                    <Card.Text style={descStyle} className="text-muted">
                        <Row >
                            <hr style={hrStyle} />
                            <Col lg="2" >
                                <label style={priceStyle}>
                                    4.8 ???????????? 5
                                </label>
                            </Col>
                            <Col style={{ color: 'black' }}>
                                <div style={{ marginTop: 18 }}>
                                    <Button variant={chooseStar === 5 ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar(5)}>5 ?????????</Button>
                                    <Button variant={chooseStar === 4 ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar(4)}>4 ?????????</Button>
                                    <Button variant={chooseStar === 3 ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar(3)}>3 ?????????</Button>
                                    <Button variant={chooseStar === 2 ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar(2)}>2 ?????????</Button>
                                    <Button variant={chooseStar === 1 ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar(1)}>1 ?????????</Button>
                                    <Button variant={chooseStar === 'comment' ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar('comment')}>???????????????????????????????????????</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Text>
                    {testCheckBox.map((item, index) => (
                        <Card.Text style={descStyle} className="text-muted" key={index}>
                            <Row >
                                <hr style={hrStyle} />
                                <Col lg="1" style={{ paddingLeft: 30, paddingTop: 5 }}>
                                    <label >
                                        <Image
                                            roundedCircle
                                            style={{ width: 60, height: 60, objectFit: 'cover' }}
                                            src={'https://static.wikia.nocookie.net/8daae125-c4d1-42cc-a739-1a37017c2970'}></ Image>

                                    </label>
                                </Col>
                                <Col style={{ color: 'black', marginLeft: 10, paddingTop: 2, marginBottom: 10 }}>
                                    <div style={{}}>
                                        <label style={{ fontSize: 18 }}>?????????????????????????????????
                                        </label>
                                    </div>
                                    <div style={{ color: 'rgb(238,77,45)' }}>
                                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                                    </div>
                                    <div>
                                        <label>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also </label>
                                    </div>

                                </Col>

                            </Row>
                        </Card.Text >
                    ))}

                </Card.Body>
            </Card>

        </div >
    )
}

const titleStyle = {
    marginBottom: 1,
    color: '#333333',
    fontSize: 30
}
const ratingTopStyle = {

    borderLeft: "1px solid #6C757D", borderRight: "1px solid #6C757D", marginLeft: 20, marginRight: 20, paddingLeft: 20, paddingRight: 20
}
const descShipping = {

}
const priceStyle = {
    color: 'rgb(238,77,45)',
    fontWeight: '500',
    fontSize: 30,
    backgroundColor: '#FAFAFA',
    padding: 15
}

const descStyle = {
    fontSize: 15,
    paddingLeft: 3,
    marginBottom: 0
}



const hrStyle = {
    marginTop: 6,
    marginBottom: 8
}

const cardBodyStyle = {
    paddingLeft: 13,
    paddingTop: 10,
    paddingBottom: 10
}

export default Product