import { Col, Row, Card } from 'react-bootstrap'
import ItemComp from './ItemComp'
import LoginModal from './LoginModal'

const Marketplace = () => {
    return (
        <div>
            <Card style={{ marginTop: 30, paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
                <Card.Body >
                    <Row >
                        <LoginModal />
                        {dataList}
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

const dataList = Data.map((item, i) => (
    <Col md={3} >
        <div onClick={() => alert(item.title)}>
            <ItemComp
                itemTitle={item.title}
                itemDesc={item.desc}
                itemImg={item.img}
                itemStock={item.stock}
                key={i}

            />
        </div >
    </Col>
))



export default Marketplace