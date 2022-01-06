import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Row, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemComp from './ItemComp'
import LoginModal from './LoginModal'

const Marketplace = () => {
    const [product, setProduct] = useState([])
    const [type, setType] = useState('all')

    useEffect(() => {
        GetAllProduct()
    }, [])

    const GetAllProduct = async () => {
        await axios.get("product/getall")
            .then(res => setProduct(res.data))
    }

    const filterSome = (type) => {
        var filterProduct = product
        if (type != 'all') {
            filterProduct = product.filter(x => x.product_type == type)
        }

        return (
            filterProduct.map((item, i) => (
                <Col md={3} key={i}>
                    <div>
                        <Link to={"/product/" + item._id} style={{ textDecoration: 'none', color: 'black' }}>
                            <ItemComp
                                itemTitle={item.product_name}
                                itemDesc={item.product_description}
                                itemImg={item.product_image}
                                itemSold={item.product_sold_amount}


                            />
                        </Link>
                    </div>
                </Col>
            ))
        )
    }

    const dataList = product.map((item, i) => (
        <Col md={3} key={i}>
            <div>
                <Link to={"/product/" + item._id} style={{ textDecoration: 'none', color: 'black' }}>
                    <ItemComp
                        itemTitle={item.product_name}
                        itemDesc={item.product_description}
                        itemImg={item.product_image}
                        itemSold={item.product_sold_amount}


                    />
                </Link>
            </div>
        </Col>
    ))


    return (
        <div>
            <Card style={{ marginTop: 30, paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
                <Card.Body >
                    {/* <Button onClick={() => setType('all')}>All</Button>
                    <Button onClick={() => setType('pet')}>Pet</Button>
                    <Button onClick={() => setType('weapon')}>Weapon</Button> */}

                    <Form className="mb-3">
                        <Form.Control
                            as="select"
                            style={{ width: '30%', fontWeight: 'bold' }}
                            onChange={e => setType(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="weapon">Weapon</option>
                            <option value="clothes">Clothes</option>
                            <option value="phone">Phone</option>
                            <option value="pet">Pet</option>

                        </Form.Control>
                    </Form>
                    <Row >

                        {filterSome(type)}
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}
const Data = [
    {
        id: 0,
        title: 'Naruto',
        desc: 'Konoha Boya',
        img: 'https://static.wikia.nocookie.net/8daae125-c4d1-42cc-a739-1a37017c2970',
        stock: 4
    },
    {
        id: 1,
        title: 'Sasuke',
        desc: 'Konoha Boya',
        img: 'https://preview.redd.it/mp7vwegocbb21.png?width=497&format=png&auto=webp&s=d5f6d9553a2097d1d8866a0819d12b1d09f81709',
        stock: 0
    }, {
        id: 2,
        title: 'Sasuke2',
        desc: 'Konoha Boya',
        img: 'https://preview.redd.it/mp7vwegocbb21.png?width=497&format=png&auto=webp&s=d5f6d9553a2097d1d8866a0819d12b1d09f81709',
        stock: 2
    }, {
        id: 3,
        title: 'Sasuke3',
        desc: 'Konoha Boya',
        img: 'https://preview.redd.it/mp7vwegocbb21.png?width=497&format=png&auto=webp&s=d5f6d9553a2097d1d8866a0819d12b1d09f81709',
        stock: 0
    }, {
        id: 4,
        title: 'Sasuke4',
        desc: 'Konoha Boya',
        img: 'https://preview.redd.it/mp7vwegocbb21.png?width=497&format=png&auto=webp&s=d5f6d9553a2097d1d8866a0819d12b1d09f81709',
        stock: 7

    }
]




export default Marketplace