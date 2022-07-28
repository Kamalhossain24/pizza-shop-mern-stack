import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Pizza from '../components/Pizza'
import { Row, Col, Container } from 'react-bootstrap'
import { useEffect } from 'react'
import { getAllPizzas } from '../actions/pizzasActions'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Hero from '../components/Hero'
import Filters from '../components/Filters'
const HomeScreen = () => {
    const dispatch = useDispatch(getAllPizzas());
    const pizzastate = useSelector(state => state.getAllPizzasReducer);
    const { loading, pizzas, error } = pizzastate;
    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch])

    return (
        <>
            <Hero />
            <Container>
                <h1 class="display-6 mt-5 text-center fw-bold">Tranding Pizza</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, assumenda.</p>
                <hr />
                {loading ? (<Loader />)
                    : error ? (<Error />)
                        : (
                            <Row>
                                <Filters />
                                {
                                    pizzas.length === 0 ? (<h4 className='text-center mb-5'>"Search Results Not Found☹"</h4>) : null
                                }
                                {
                                    pizzas.map((pizza) => {
                                        return (
                                            <Col md={4} key={pizza.name}>
                                                <Pizza pizza={pizza} />
                                            </Col>)
                                    })
                                }
                            </Row>
                        )
                }

            </Container>
        </>
    )
}

export default HomeScreen