import { Card, Button, Col, Row, Div, Image } from 'react-bootstrap'
import { useState } from 'react'
import '../App.css'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { FaShuttleVan } from 'react-icons/fa';

const ItemComp = ({ itemTitle, itemDesc, itemImg, itemStock }) => {
    const [chooseItem, setChooseItem] = useState(0)
    const [chooseStar, setChooseStar] = useState(5)
    const testCheckBox = ["Prayuth", "Prawit", "Anutin"]
    const [itemAmount, setItemAmount] = useState(0)

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
                                    src={'https://static.wikia.nocookie.net/8daae125-c4d1-42cc-a739-1a37017c2970'}></Card.Img>
                            </div>
                        </Col>
                        <Col>
                            <Card.Title style={titleStyle}>Title</Card.Title>
                            <Card.Text style={descStyle} className="text-muted">
                                <label style={{ color: 'rgb(238,77,45)' }}>
                                    4.8 <AiFillStar />
                                </label>
                                <label style={ratingTopStyle} >
                                    1300 Rating
                                </label>
                                <label>
                                    5900 ขายแล้ว
                                </label>
                            </Card.Text>
                            <hr style={hrStyle} />

                            <Card.Text style={priceStyle}>
                                ฿400
                            </Card.Text>


                            <Card.Text style={descStyle} className="text-muted">
                                <Row>
                                    <Col lg="3">
                                        <label >
                                            การจัดส่ง
                                        </label>
                                    </Col>
                                    <Col>
                                        <label style={descShipping}>
                                            <FaShuttleVan size={20} /> จาก กรุงเทพ
                                        </label>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text style={descStyle} className="text-muted">
                                <Row style={{ marginTop: 20 }}>
                                    <Col lg="3">
                                        <label >
                                            ตัวเลือก
                                        </label>
                                    </Col>
                                    <Col>
                                        <div style={descShipping}>
                                            {testCheckBox.map((item, i) =>
                                            (
                                                <Button

                                                    style={{ marginRight: 10, fontSize: 15 }}
                                                    onClick={() => setChooseItem(i)}
                                                    variant={chooseItem == i ? "info" : 'outline-secondary'}
                                                    key={i}
                                                >{item}</Button>
                                            ))}


                                        </div>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text style={descStyle} className="text-muted">
                                <Row style={{ marginTop: 20 }}>
                                    <Col lg="3">
                                        <label >
                                            จำนวน
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
                                                onClick={() => setItemAmount(itemAmount + 1)}
                                            >+</Button>


                                        </div>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text style={descStyle, { marginTop: 20 }} className="text-muted">
                                <Row>
                                    <Col xs="3">
                                        <Button variant='outline-danger' style={{ marginRight: 10 }}>เพิ่มไปยังตะกร้า</Button>
                                    </Col>
                                    <Col>
                                        <Button variant='danger'>ซื้อสินค้า</Button>
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
                                        src={'https://static.wikia.nocookie.net/8daae125-c4d1-42cc-a739-1a37017c2970'}></ Image>

                                </label>
                            </Col>
                            <Col style={{ color: 'black', marginLeft: 40, paddingTop: 10 }}>
                                <div style={{ marginBottom: 8 }}>
                                    <label style={{ fontSize: 18 }}>ร้านนารูโตะ
                                    </label>
                                </div>
                                <div>
                                    <Button variant="outline-danger" style={{ fontSize: 14 }}>ดูร้านค้า</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mt-4">
                <Card.Body>
                    <Card.Title style={{ color: '#333333' }}>ข้อมูลสินค้า</Card.Title>


                    <Card.Text style={descStyle} className="text-muted">
                        <Row >
                            <hr style={hrStyle} />
                            <Col lg="2">
                                <label >
                                    หมวดหมู่
                                </label>
                            </Col>
                            <Col style={{ color: 'black', marginBottom: 5 }}>
                                <label>zaza</label>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Card.Text style={descStyle} className="text-muted">
                        <Row >
                            <Col lg="2">
                                <label >
                                    จำนวนสินค้า
                                </label>
                            </Col>
                            <Col style={{ color: 'black', marginBottom: 5 }}>
                                <label>12345</label>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Card.Text style={descStyle} className="text-muted">
                        <Row >
                            <Col lg="2">
                                <label >
                                    ส่งจาก
                                </label>
                            </Col>
                            <Col style={{ color: 'black', marginBottom: 5 }}>
                                <label>กรุงเทพ</label>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Card.Text style={descStyle} className="text-muted">
                        <Row >
                            <Col lg="2">
                                <label >
                                    รายละเอียดสินค้า
                                </label>
                            </Col>
                            <Col style={{ color: 'black', marginBottom: 0 }}>
                                <label>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                </label>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="mt-4 mb-5">
                <Card.Body>
                    <Card.Title style={{ color: '#333333' }}>คะแนนของสินค้า</Card.Title>


                    <Card.Text style={descStyle} className="text-muted">
                        <Row >
                            <hr style={hrStyle} />
                            <Col lg="2" >
                                <label style={priceStyle}>
                                    4.8 เต็ม 5
                                </label>
                            </Col>
                            <Col style={{ color: 'black' }}>
                                <div style={{ marginTop: 18 }}>
                                    <Button variant={chooseStar == 5 ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar(5)}>5 ดาว</Button>
                                    <Button variant={chooseStar == 4 ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar(4)}>4 ดาว</Button>
                                    <Button variant={chooseStar == 3 ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar(3)}>3 ดาว</Button>
                                    <Button variant={chooseStar == 2 ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar(2)}>2 ดาว</Button>
                                    <Button variant={chooseStar == 1 ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar(1)}>1 ดาว</Button>
                                    <Button variant={chooseStar == 'comment' ? 'danger' : 'outline-secondary'}
                                        style={{ marginRight: 8 }}
                                        onClick={() => setChooseStar('comment')}>มีความคิดเห็น</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Text>
                    {testCheckBox.map((item) => (<Card.Text style={descStyle} className="text-muted">
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
                                    <label style={{ fontSize: 18 }}>ร้านนารูโตะ
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