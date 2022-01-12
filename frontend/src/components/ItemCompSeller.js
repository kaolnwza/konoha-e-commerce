import { Card, Row, Col, Button } from 'react-bootstrap'
import '../App.css'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ItemCompSeller = ({ itemTitle, itemImg, itemId , itemPrice}) => {

    const DeleteProduct = async () => {
        await axios.delete("/product/deletebyid/" + itemId)
            .then(window.location.reload())
    }

    return (
        <div className="itemHover">

            <Card
                className="justify-content-md-center"
                style={{ width: 260, marginBottom: 20 }}
            >

                <Card.Img
                    className="imageStyle"
                    src={itemImg}></Card.Img>

                <Card.Body style={cardBodyStyle}>

                    <Card.Title style={titleStyle}>{itemTitle}</Card.Title>
                    <Card.Text >
                        <Row>
                            <Col xs={3}>
                                <label style={priceStyle}>  ฿{itemPrice}</label>
                            </Col>

                        </Row>
                        {/* <Row>
                            <Col xs={3}>
                                <AiOutlineHeart />
                            </Col>
                            <Col style={{ textAlign: 'right' }}>
                                <label>
                                    <AiFillStar style={starStyle} size={13} />
                                    <AiFillStar style={starStyle} size={13} />
                                    <AiFillStar style={starStyle} size={13} />
                                    <AiFillStar style={starStyle} size={13} />
                                    <AiFillStar style={starStyle} size={13} />
                                </label>
                                <label> &nbsp;</label>
                                <label style={soldAmountStyle}>   ขายแล้ว 5000 ชิ้น</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={addressStyle}>
                                หมู่บ้านโคโนฮะ
                            </Col>
                        </Row> */}
                        <Row className="mt-2">
                            <Col md={3}>
                                <Link to={"/modifyproduct/" + itemId}>
                                    <Button variant="outline-info">Edit </Button>
                                </Link>
                            </Col>
                            <Col>
                                <Button variant="outline-danger"
                                    onClick={() => DeleteProduct()}>Delete </Button>
                            </Col>
                        </Row>
                    </Card.Text>

                </Card.Body>

            </Card>
        </div >
    )
}

const priceStyle = {
    color: 'rgb(238,77,45)',
    fontWeight: '500',
    fontSize: 18,
    backgroundColor: '#FAFAFA',

}
const starStyle = {
    color: '#FFCE3D',

}
const soldAmountStyle = {
    color: 'grey',
    fontSize: 12
}
const addressStyle = {
    color: 'grey',
    fontSize: 12,
    textAlign: 'right'

}

const titleStyle = {
    marginBottom: 35,
    fontSize: 18
}



const cardBodyStyle = {
    paddingLeft: 13,
    paddingTop: 10,
    paddingBottom: 10
}

export default ItemCompSeller