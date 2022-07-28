import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
const Dashboard = () => {
  return (
    <>
    <Row>
        <Col md={3}><div className="dashboard_box_cart"></div></Col>
        <Col md={3}><div className="dashboard_box_cart"></div></Col>
        <Col md={3}><div className="dashboard_box_cart"></div></Col>
        <Col md={3}><div className="dashboard_box_cart"></div></Col>
    </Row>
    </>
  )
}

export default Dashboard