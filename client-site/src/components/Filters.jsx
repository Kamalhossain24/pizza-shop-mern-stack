import React, { useState } from "react";
import { useEffect } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzasActions";
const Filters = () => {
    const [searchkey, setsearchkey] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(filterPizza(searchkey))
    }, [searchkey])

    return (
        <div className="p-4 all-center mb-2">
            <Form>
                <Row>
                    <Col>
                    
                        <Form className="d-flex">
                            <Form.Control
                                value={searchkey}
                                onChange={(e) => setsearchkey(e.target.value)}
                                placeholder="Serach Pizza"
                                aria-label="Search"
                            />
                            <Button variant="outline-dark ms-2">Search</Button>
                        </Form>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Filters;
