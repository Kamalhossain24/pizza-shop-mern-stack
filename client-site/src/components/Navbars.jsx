import React from 'react'
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from 'react-router-bootstrap';
import { logoutUser } from "../actions/UserActions"
import { Link } from 'react-router-dom';

const Navbars = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer)
  const userState = useSelector((state) => state.loginUserReducer)
  const { currentUser } = userState;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image src="/images/logo.svg" style={{ height: "50px" }} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">


              {
                currentUser ? (
                  <>
                    <img className='avatar_dp' src={`https://ui-avatars.com/api/?name=${currentUser.name}&color=black&background=58b2ff`} alt="" />
                    <LinkContainer to="">


                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title={currentUser.name}
                        menuVariant="dark"
                      >
                        <NavDropdown.Item ><Link to="/orders">My Order</Link></NavDropdown.Item>

                        <NavDropdown.Item
                          onClick={() => { dispatch(logoutUser()) }}
                        >Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    </LinkContainer>
                  </>
                ) : (<>
                  <LinkContainer to="/login">
                    <Nav.Link>LogIn</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer></>)
              }

              <LinkContainer to="/cart">
                <Nav.Link className='position-relative'>Cart

                  <span class="position-absolute start-100 translate-middle badge rounded-pill bg-primary">{cartState.cartItems.length}</span>

                </Nav.Link>
              </LinkContainer>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars