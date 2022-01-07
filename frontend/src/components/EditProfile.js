import { Form, Button, Image, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState('Male')
    const [email, setEmail] = useState('')
    const [province, setProvince] = useState('')
    const [address, setAddress] = useState('')
    const [postcode, setPostcode] = useState('')
    const [storename, setStorename] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        GetUser()
    }, [])

    const GetUser = async () => {
        await axios.get("/user/getbyid/" + localStorage.getItem('user_id'))
            .then(res => {
                var x = res.data
                setUsername(x.username)
                setFirstname(x.firstname)
                setLastname(x.lastname)
                setGender(x.gender)
                setEmail(x.email)
                setProvince(x.province)
                setAddress(x.address)
                setPostcode(x.postcode)
                setStorename(x.store_name)
                setImage(x.image)
            })
    }

    const EditProfile = async () => {
        var data = {
            _id: localStorage.getItem('user_id'),
            username: username,
            firstname: firstname,
            lastname: lastname,
            gender: gender,
            email: email,
            province: province,
            address: address,
            postcode: postcode,
            store_name: storename,
            image: image
        }
        await axios.put("http://localhost:8080/user/modifyuser", data)
            .then(res => {
                if (res.status == 200) alert('Complete')
                window.location.href = "/userprofile"
            })
        // .then(res => window.location.href = "/login")

        //.then(res => console.log("za"))
    }


    return (
        <Row style={{ marginTop: '5%' }}>
            <Col md={5}>
                <Image src={image}
                    style={{ width: 400, height: 400, objectFit: 'cover' }}
                    className="imageObjectFit"
                    rounded
                />
            </Col>
            <Col>

                <Form >
                    <Form.Group className="mb-3" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username"
                            style={{ width: '50%' }}
                            value={username}
                            onChange={e => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control type="text" placeholder="Enter Firstname"
                            style={{ width: '50%' }}
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="text" placeholder="Enter Lastname"
                            style={{ width: '50%' }}
                            value={lastname}
                            onChange={e => setLastname(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            as="select"
                            style={{ width: '50%' }}
                            value={gender}
                            onChange={e => setGender(e.target.value)} defaultValue="Male">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email"
                            style={{ width: '50%' }}
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Storename</Form.Label>
                        <Form.Control type="text" placeholder="Enter Storename"
                            style={{ width: '50%' }}
                            value={storename}
                            onChange={e => setStorename(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Province</Form.Label>
                        <Form.Control type="text" placeholder="Enter Province"
                            style={{ width: '50%' }}
                            value={province}
                            onChange={e => setProvince(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address"
                            style={{ width: '50%' }}
                            value={address}
                            onChange={e => setAddress(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control type="text" placeholder="Enter Postcode"
                            style={{ width: '50%' }}
                            value={postcode}
                            onChange={e => setPostcode(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="Enter Image ex. http://facebook.com/image.png"
                            style={{ width: '50%' }}
                            value={image}
                            onChange={e => setImage(e.target.value)} />
                    </Form.Group>


                    <Button variant="primary" onClick={() => EditProfile()}>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default Login