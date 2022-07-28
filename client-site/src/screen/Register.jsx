import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../actions/UserActions"
import { useHistory } from 'react-router-dom'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Sucess from '../components/Sucess'
const Register = () => {
    const history = useHistory()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [passErrorr, setPassErrorr] = useState('');
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
           history.push("/")
        }
    }, [])


    const registerState = useSelector((state) => state.regiterUserReducer);
    const { loading, success, error } = registerState;

    const registerHandler = (e) => {
        e.preventDefault()
        if (name === "" || email === "" || password === "" || cpassword === "") {
            alert("Please fill all fields properly!!")
        } else {

            if (password !== cpassword) {
                alert("Password Do not match!!")
                setPassErrorr("Enter Your Confrim Password Do not Match With Password.")
            } else {
                const user = { name, email, password, cpassword }
                dispatch(registerUser(user))
                alert("Account Create successfull", history.push("/"))

            }
        }
    }

    return (
        <>
            <Container className='mt-md-5 mb-md-5'>
                {loading && <Loader />}
                {success && <Sucess success="User Register Successfully" />}
                {error && <Error error="somthing went wrong" />}
                <Row>

                    <Col md={6}>
                        <img src="images/login_new.jpg"
                            style={{ height: "100%", width: "100%" }}
                            alt="" />
                    </Col>
                    <Col md={6}>
                        <h1 className='mb-md-3 text-center '>Register Now</h1>
                        <hr />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicConfrimPassword">
                                <Form.Label>Confrim Password</Form.Label>
                                <Form.Control
                                    type="password"

                                    placeholder="Confrim Password"
                                    value={cpassword}
                                    onChange={e => setCpassword(e.target.value)}
                                />
                                <Form.Text className="text-danger">
                                    {passErrorr}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={registerHandler}
                            >
                                Register Now
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register