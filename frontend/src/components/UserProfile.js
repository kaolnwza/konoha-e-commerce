import { Card, Button, Row, Col } from 'react-bootstrap'
import '../App.css'

const UserProfile = () => {
    return (
        <>
            <Card
                className="justify-content-md-center"
                style={cardStyle}
                border="light">
                <Card.Body>
                    <Row>
                        <Col md={4} >
                            <Card style={cardStyle_inside_left} >
                                <Card.Body className="text-center">
                                    <Row >
                                        <Col >
                                            <Card.Img
                                                src="holder.js/100px180"
                                                className="imageStyle_profile rounded-circle"
                                                style={imageStyle}
                                                src="https://cdn.staticneo.com/w/naruto/Maito_gai_smile.jpg" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <Card.Title style={userTitleStyle}>Maito Gai</Card.Title>
                                            <Button variant="outline-primary" style={{ marginTop: 10 }}>Edit Profile</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={cardStyle_inside_right}>

                                <Card.Body>
                                    <Row>
                                        <Col style={{ paddingLeft: 30 }}>
                                            <Button variant={'outline-secondary'} style={buttonTypeStyle}>ทั้งหมด</Button>
                                            <Button variant={'outline-secondary'} style={buttonTypeStyle}>ที่ต้องชำระ</Button>
                                            <Button variant={'outline-secondary'} style={buttonTypeStyle}>ที่ต้องจัดส่ง</Button>
                                            <Button variant={'outline-secondary'} style={buttonTypeStyle}>ที่ต้องได้รับ</Button>
                                            <Button variant={'outline-secondary'} style={buttonTypeStyle}>สำเร็จแล้ว</Button>
                                            <Button variant={'outline-secondary'} style={buttonTypeStyle}>ยกเลิกแล้ว</Button>
                                        </Col>

                                    </Row>
                                    <Col>
                                        <hr style={hrStyle} />
                                    </Col>
                                    <Row>
                                        <Col md={4}>
                                            <span style={spanStyleLeft}>detail #1</span>
                                        </Col>
                                        <Col>
                                            <span style={spanStyleRight} className='text-secondary'>list #1</span>

                                        </Col>

                                    </Row>
                                    <Col>
                                        <hr style={hrStyle} />
                                    </Col>
                                    <Row>
                                        <Col md={4}>
                                            <span style={spanStyleLeft}>detail #2</span>
                                        </Col>
                                        <Col>
                                            <span style={spanStyleRight} className='text-secondary'>list #2</span>

                                        </Col>

                                    </Row>
                                    <Col>
                                        <hr style={hrStyle} />
                                    </Col>

                                </Card.Body>

                            </Card></Col>
                    </Row>
                </Card.Body>
            </Card >
        </>
    )
}

const buttonTypeStyle = {
    marginRight: 20
}

const cardStyle = {
    width: '100%',
    height: 600,
    marginTop: 40,
    backgroundColor: '#FAFAFA'
}

const imageStyle = {
    height: 240,
    width: 240
}

const cardStyle_inside_left = {
    paddingTop: 20,
    marginTop: 20,
    marginLeft: 15,
    width: 330,
    height: 450
}
const cardStyle_inside_right = {
    marginTop: 20,
    width: 740,
    height: 450
}

const userTitleStyle = {
    fontSize: 25,
    marginTop: 15
}

const userHeader = {
    backgroundColor: 'white',
    fontSize: 22,
    fontWeight: 600,
    paddingLeft: 43,
    paddingTop: 12,
    paddingBottom: 12
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
export default UserProfile;