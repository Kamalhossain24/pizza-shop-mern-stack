import React from 'react'
import { Row, Col, Container, Table,Image } from 'react-bootstrap'
import {FiPhoneCall} from "react-icons/fi"
import {HiOutlineMail} from "react-icons/hi"
import {ImWhatsapp} from "react-icons/im"
const Contact = () => {
    return (
        <>
            <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
                <Row>
                    <Col md={6}>
                    <Table striped bordered hover className="text-center">
                            <thead>
                                <tr >
                                    <th colspan="3" className="text-center bg-warning">--Contact details--</th>
                            
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><FiPhoneCall/></td>
                                    <td>Phone</td>
                                    <td>+91 6296461649</td>
                                </tr>
                                <tr>
                                    <td><ImWhatsapp/></td>
                                    <td>WhatsApp</td>
                                    <td>+91 6296461649</td>
                                </tr>
                                <tr>
                                    <td><HiOutlineMail/></td>
                                    <td>Email</td>
                                    <td>mr.kamalhssain09@gmail.com</td>
                                </tr>
                        
                            </tbody>
                        </Table>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet adipisci pariatur optio illum similique fugit cumque labore, ab repudiandae maiores velit omnis sit voluptatibus. Mollitia doloribus rem illum dolores dignissimos inventore nisi neque architecto dolorem, quae minus voluptatum deserunt ipsa suscipit sint impedit maiores vel dolor. Aperiam omnis adipisci similique aliquid possimus nesciunt voluptatum facilis iusto minima rerum? Nihil molestiae iusto quae repellendus quaerat quas corporis rerum consectetur reiciendis dolore modi laudantium libero, doloremque repudiandae minus obcaecati a error aliquid vero, aspernatur repellat cumque magnam illo. Harum officia nisi temporibus veniam ipsum reiciendis sequi deleniti accusantium dolorem recusandae magni praesentium laborum consequuntur aliquam, fugit accusamus animi laboriosam neque nesciunt delectus necessitatibus debitis! Totam repudiandae facilis vitae, enim velit ab praesentium. Inventore quod vero voluptatum nam vel rem architecto quasi? Ipsam consequuntur cum repudiandae doloribus, facilis sit. Minus minima maxime aliquid fugit quo laboriosam quos aspernatur, est voluptatum in quia voluptate vel dolor? Quisquam laudantium illo beatae sapiente nobis, quia inventore quo labore? Consequatur quis repudiandae vitae culpa praesentium blanditiis alias pariatur tempora hic omnis voluptates nobis saepe, placeat vero fugiat necessitatibus et labore molestiae. Magnam dolorum dignissimos nobis ipsum incidunt perspiciatis facilis velit, sunt perferendis similique doloremque exercitationem adipisci fugit.</p>
                       
                    </Col>
                    <Col md={6}>
                        <Image src='/images/pizza.jpg' style={{width:"100%",height:"auto"}}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact