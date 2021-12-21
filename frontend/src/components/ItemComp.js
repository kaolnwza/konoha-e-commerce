import { Card, Button, Row, Col } from 'react-bootstrap'
import '../App.css'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
const ItemComp = ({ itemTitle, itemDesc, itemImg, itemStock }) => {
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
                                <label style={priceStyle}>  ฿400</label>
                            </Col>

                        </Row>
                        <Row>
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

const descStyle = {
    fontSize: 15,
    paddingLeft: 3,
    marginBottom: 0
}

const buyButtonStyle = {
    fontSize: 15,
    marginTop: 10,
    paddingTop: 3,
    paddingBotton: 3,
    marginBottom: 6
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

export default ItemComp