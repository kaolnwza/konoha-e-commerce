import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        var data = {
            username: username,
            password: password
        }
        await axios.post("http://localhost:8080/auth/login", data)
            .then(res => StoreCookie())

        //.then(res => console.log("za"))
    }

    const StoreCookie = async () => {
        await axios.get("auth/getcookie")
            .then(res => {
                localStorage.setItem("user_id", res.data)
                console.log("object")
                window.location.href = "/"
            })

    }


    return (
        <Form style={{ marginTop: '20%', paddingLeft: '30%' }}>
            <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username"
                    style={{ width: '50%' }}
                    onChange={e => setUsername(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    style={{ width: '50%' }}
                    onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" onClick={() => login()}>
                Submit
            </Button>
        </Form>
    )
}

export default Login