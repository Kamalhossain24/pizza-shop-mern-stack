import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../actions/UserActions"
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      history.push("/")
    }
  }, [])


  const loginHandler = (e) => {
    e.preventDefault()
    const user = { email, password }
    dispatch(loginUser(user))
    history.push("/")
  }
  return (
    <>
      <Container className='mt-md-5'>

        <Row>

          <Col md={6}>
            <img src="images/login_new.jpg"
              style={{ height: "100%", width: "100%" }}
              alt="" />
          </Col>
          <Col md={6}>
            <h1 className='mb-md-3 text-center '>Login Now</h1>
            <hr />
            <Form>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
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


              <Button
                variant="primary"
                onClick={loginHandler}
              >
                Login Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login