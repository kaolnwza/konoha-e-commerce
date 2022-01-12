import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCompSeller from './ItemCompSeller'
import LoginModal from './LoginModal'

const MyProduct = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        GetMyProduct()

    }, [])

    const GetMyProduct = async () => {
        await axios.get("/product/getbyuserid/" + localStorage.getItem('user_id'))
            .then(res => {
                console.log("kuy :" + res.data)
                setProduct(res.data)
                
            })
    }

    const test = () => {
        if (product) {
            return product.map((item, i) => (
                <Col md={3} >
                    <div >
                        <ItemCompSeller
                            itemTitle={item.product_name}
                            itemDesc={item.product_description}
                            itemImg={item.product_image}
                            itemSold={item.product_sold_amount}
                            itemId={item._id}
                            itemPrice={item.product_price}
                            key={i}

                        />
                    </div >
                </Col>))
        }

        // console.log(product.length)
        return null
    }




    return (
        <div>
            <Card style={{ marginTop: 30, paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
                <Card.Body >
                    <Card.Text>
                        <Link to="/addproduct">
                            <Button variant="outline-primary" >Add Product</Button>
                        </Link>
                    </Card.Text>
                    <Row >
                        {test()}
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


export default MyProduct