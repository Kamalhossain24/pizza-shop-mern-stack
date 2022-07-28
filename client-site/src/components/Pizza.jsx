import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cardAction"
import { Card, Row, Col, Modal } from 'react-bootstrap'
import { BiRupee } from 'react-icons/bi'
const Pizza = ({ pizza }) => {
  const [varients, setVarients] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const addToCartHandle = () => {
    dispatch(addToCart(pizza, quantity, varients))
  }

  return (
    <>
      <Card style={{ width: 'auto', marginBottom: "50px" }}>
        <Card.Img
          onClick={handleShow}
          variant="top"
          style={{ height: '180px', cursor: "pointer" }}
          src={pizza.image}
          alt={pizza.name} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Variant</h6>
                <select value={varients} className="form-control" onChange={e => setVarients(e.target.value)}>
                  {
                    pizza.varients.map((varients) => {
                      return (
                        <option  >{varients}</option>
                      )
                    })
                  }
                </select>
              </Col>
              <Col md={6}><h6>Quantity</h6>
                <select value={quantity} className="form-control" onChange={e => setQuantity(e.target.value)}>
                  {[...Array(10).keys()].map((qnt, i) => {
                    return (
                      <option  >{qnt + 1}</option>
                    )
                  })}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price : <strong><BiRupee />{pizza.prices[0][varients] * quantity}/-</strong></Col>
            <Col md={6}><button
              onClick={addToCartHandle}
              className='btn btn-outline-warning'>Add to Cart</button></Col>
          </Row>

        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <a href={`/pizza/${pizza._id}`}>
              <img
                variant="top"
                style={{ height: '230px', width: "100%" }}
                src={pizza.image}
                alt={pizza.name} />
            </a>
          </div>
          <hr />
          <h4>Description</h4>
          <p>{pizza.description}</p>


        </Modal.Body>
      </Modal>
    </>
  )
}

export default Pizza