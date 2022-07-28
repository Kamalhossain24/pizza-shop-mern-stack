import React from 'react'
import { getUserOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import Loader from '../components/Loader';
import { Row, Col } from "react-bootstrap";
import Error from '../components/Error';
const OrderScreen = () => {
    const orderState = useSelector(state => state.getUserOrdersReducer)
    const { loading, orders, error } = orderState;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOrders())

    }, [dispatch])

    return (
        <div className="container mt-4 mb-5">

            {loading && <Loader />}
            {error && <Error error="something went wrong" />}
            {orders &&
                orders.map((order, ind) => (
                    <div className=" border p-4 bg-light">
                        <Row>
                            <Col md={4}>
                                <h4>Items :</h4>
                                {order.orderItems.map((item) => (
                                    <h6 key={item.name}>
                                        {item.name} [{item.varients}] * {item.quantity} ={" "}
                                        {item.price}

                                    </h6>
                                ))}
                            </Col>
                            <Col md={4}>
                                <h4>Address :</h4>
                                <h6>Street : {order.shippingAddress.street}</h6>
                                <h6>City : {order.shippingAddress.city}</h6>
                                <h6>PinCode : {order.shippingAddress.picode}</h6>
                                <h6>Countery : {order.shippingAddress.country}</h6>
                            </Col>
                            <Col md={4}>
                                <h4>Order Info :</h4>
                                <h6>Order Amount : {order.orderAmount}</h6>
                                <h6>Transection id : {order.transectionId}</h6>
                                <h6>Order id : {order._id}</h6>
                                {order.isDeliverd ? (
                                    <h6 >Order Status : <span className="text-success">Deliverd</span> </h6>
                                ) : (
                                    <>
                                        <h6 >Remark : <span >Order Received by Admin</span> </h6>
                                        <h6 >Order Status : <span className="text-warning">Processing...</span> </h6>
                                    </>
                                )}{" "}
                            </Col>
                        </Row>
                    </div>
                ))}

        </div>
    )
}

export default OrderScreen