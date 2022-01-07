import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState('Male')
    const [email, setEmail] = useState('')
    const [province, setProvince] = useState('')
    const [address, setAddress] = useState('')
    const [postcode, setPostcode] = useState('')
    const [storename, setStorename] = useState('')

    const Signup = async () => {
        var data = {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            gender: gender,
            email: email,
            province: province,
            address: address,
            postcode: postcode,
            store_name: storename
        }
        await axios.post("http://localhost:8080/user/add", data)
            .then(res => window.location.href = "/login")

        //.then(res => console.log("za"))
    }


    return (
        <Form style={{ marginTop: '5%', paddingLeft: '30%' }}>
            <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username"
                    style={{ width: '50%' }}
                    onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    style={{ width: '50%' }}
                    onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" placeholder="Enter Firstname"
                    style={{ width: '50%' }}
                    onChange={e => setFirstname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder="Enter Lastname"
                    style={{ width: '50%' }}
                    onChange={e => setLastname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Gender</Form.Label>
                <Form.Control
                    as="select"
                    style={{ width: '50%' }}
                    onChange={e => setGender(e.target.value)} defaultValue="Male">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email"
                    style={{ width: '50%' }}
                    onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Storename</Form.Label>
                <Form.Control type="text" placeholder="Enter Storename"
                    style={{ width: '50%' }}
                    onChange={e => setStorename(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Province</Form.Label>
                <Form.Control type="text" placeholder="Enter Province"
                    style={{ width: '50%' }}
                    onChange={e => setProvince(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address"
                    style={{ width: '50%' }}
                    onChange={e => setAddress(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Postcode</Form.Label>
                <Form.Control type="text" placeholder="Enter Postcode"
                    style={{ width: '50%' }}
                    onChange={e => setPostcode(e.target.value)} />
            </Form.Group>


            <Button variant="primary" onClick={() => Signup()}>
                Submit
            </Button>
        </Form>
    )
}

export default Login