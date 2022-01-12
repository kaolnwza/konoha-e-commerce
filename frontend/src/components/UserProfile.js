import { Card, Button, Row, Col } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductList from './ProductList'

const UserProfile = () => {
    const [user, setUser] = useState({})
    const [chooseType, setChooseType] = useState('Unpaid')
    const [product, setProduct] = useState([])
    const [transaction, setTransaction] = useState('')
    const [fuck, setFuck] = useState(false)
    const [chooseRole, setChooseRole] = useState('customer')


    const GetUser = async () => {
        await axios.get("user/getbyid/" + localStorage.getItem("user_id"))
            .then(res => setUser(res.data))
    }

    const GetAllProduct = async () => {
        await axios.get("product/getall")
            .then(res => setProduct(res.data))
    }

    const GetTransaction = async () => {
        await axios.get("/transaction/getbyuserid/" + localStorage.getItem("user_id"))
            .then(res => {
                setTransaction(res.data)
                setFuck(true)
            })
    }

    const PaidTransaction = async (id) => {
        await axios.put("/transaction/paidtransaction/" + id)
            .then(() => {
                alert("You has paid this transaction!")
                window.location.reload()
            })
    }

    useEffect(() => {

        GetUser()
        GetTransaction()
        // GetAllProduct()
        // console.log(product)

    }, [])


    const MapProductType = () => {
        var TypeList = ['Unpaid', 'Paid', 'Onshipping', 'Complete']
        return (
            TypeList.map((item, i) =>
            (
                <Button

                    style={buttonTypeStyle}
                    onClick={() => {
                        setChooseType(item)

                    }}
                    variant={chooseType === item ? "info" : 'outline-secondary'}
                    key={i}

                >{item}</Button>
            ))
        )
    }



    const TransactionList = () => {
        if (transaction.length > 0){
        var time


        return transaction.map((x, i) => {

            var productArray = x.product
            var allPrice = 0
            productArray.forEach(val => {
                allPrice += val.product_price
            });
            //return (<label>asd</label>)
            time = new Date(String(x.create_time));

            if (x.transaction_status == chooseType.toLocaleLowerCase()) {

                return [(<Button disabled className="mt-3" style={{ width: 703, marginLeft: 12 }} variant="secondary"> x</Button>),
                (productArray.map((e, i2) => (
                    <div >
                        < ProductList transaction_id={x._id} product_index={i2} item={e} complete={x.transaction_status} role={'user'} />
                    </div>
                ))
                ),
                (<label style={{ textAlign: 'right' }}>
                    <Button variant="outline-danger" disabled style={{ width: 200 }}>{allPrice}</Button>
                    {chooseType == 'Unpaid' ? <Button variant="danger" style={{ width: 200 }}
                        onClick={() => PaidTransaction(x._id)}>Pay</Button> : null}
                </label>)
                ]
            }

            if (x.transaction_status == "done") {

                return [
                    (productArray.map((k, i2) => {

                        if (k.product_status == chooseType.toLocaleLowerCase()) return (
                            <div >
                                < ProductList transaction_id={x._id} product_index={i2} item={k} complete={k.product_status} role={'user'} />
                            </div>
                        )
                    }

                    )
                    )
                ]
            }
        }
        );
    }
    else {
        return null
    }
    }

    const TransactionListSeller = () => {
        if (transaction.length > 0){
        return transaction.map((x, i) => {
            if (x.transaction_status == chooseType.toLocaleLowerCase()) {
                var product = x.product
                return product.map(e => {
                    if (e.seller == localStorage.getItem('user_id')) {
                        return (
                            <div >
                                < ProductList transaction_id={x._id} product_index={i} item={e} complete={x.transaction_status} role={"seller"} />
                            </div>
                        )
                    }

                })
            }
            if (x.transaction_status == "done") {

                return [
                    ((x.product).map((k, i2) => {

                        if (k.seller == localStorage.getItem('user_id') && k.product_status == chooseType.toLocaleLowerCase()) {
                            return (
                                <div >
                                    < ProductList transaction_id={x._id} product_index={i} item={k} complete={k.product_status} role={"seller"} />
                                </div>
                            )
                        }

                    }

                    )
                    )
                ]
            }
        }
        );
    }
    return null
    }

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
                                                src={user.image} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <Card.Title style={userTitleStyle}>{user.firstname + " " + user.lastname}</Card.Title>
                                            <Link to="/editprofile">
                                                <Button variant="outline-primary" style={buttonPathStyle}>Edit Profile</Button>
                                            </Link>
                                            <div />
                                            <Link to="/myproduct">
                                                <Button variant="outline-primary" style={buttonPathStyle}>My Product</Button>
                                            </Link>
                                            <div>
                                                <Button variant="outline-primary" style={buttonPathStyle} onClick={() => setChooseRole('customer')}>My Transaction</Button>
                                            </div>
                                            <div>
                                                <Button variant="outline-primary" style={buttonPathStyle} onClick={() => setChooseRole('seller')}>Customer Transaction</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={8}>
                            <Card style={cardStyle_inside_right}>

                                <Card.Body>
                                    {chooseRole == 'customer' ?
                                        (
                                            <div>
                                                <Row>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        {MapProductType()}
                                                    </Col>

                                                </Row>
                                                <Col>
                                                    <hr style={hrStyle} />
                                                </Col>
                                                <Row>
                                                    {fuck && transaction != null ? TransactionList() : null}

                                                </Row>
                                            </div>) :

                                        (<div>
                                            <Row>
                                                <Col style={{ textAlign: 'center' }}>
                                                    {MapProductType()}
                                                </Col>

                                            </Row>
                                            <Col>
                                                <hr style={hrStyle} />
                                            </Col>
                                            <Row>
                                                {fuck && transaction != null ? TransactionListSeller() : null}

                                            </Row>
                                        </div>)
                                    }


                                </Card.Body>

                            </Card></Col>
                    </Row>
                </Card.Body>
            </Card >
        </>
    )
}

const buttonTypeStyle = {
    marginRight: 10,
    width: 165

}
const buttonPathStyle = {
    marginTop: 10,
    width: 200
}

const cardStyle = {
    width: '100%',

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
    height: 550
}
const cardStyle_inside_right = {
    marginTop: 20,
    width: 740,

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