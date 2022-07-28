import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { getPizzaById, updatePizza } from "../actions/pizzasActions"
const Pizzadetails = ({ match }) => {
    const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
    const { error, pizza } = getPizzaByState;
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [smallPrice, setsmallPrice] = useState();
    const [largprice, setlargprice] = useState();
    const [mediumPrice, setmediumPrice] = useState();
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("");
    useEffect(() => {
        if (pizza) {
            if (pizza._id === match.params.id) {
                setname(pizza.name);
                setdescription(pizza.description);
                setcategory(pizza.category);
                setimage(pizza.image);
                setsmallPrice(pizza.prices[0]["small"]);
                setmediumPrice(pizza.prices[0]["medium"]);
                setlargprice(pizza.prices[0]["large"]);
            } else {
                dispatch(getPizzaById(match.params.pizzaId));
            }
        } else {
            dispatch(getPizzaById(match.params.id));
        }
    }, [pizza, dispatch, match.params.pizzaId])
    return (
        <div className="container">
            <div className="row  py-4">
                <div className="col-md-6">
                    <img src={`${image}`} alt={name} height='300px' width='100%' />
                </div>
                <div className="col-md-6">
                    <h4 className="text-black-50 text-uppercase">{category}</h4>
                    <h1 className="display-5">{name}</h1>
                    <h3 className="display-6 my-4 fw-bold">&#8377; {smallPrice}</h3>
                    <p className="lead">{description}</p>
                    <button className="btn btn-outline-dark px-4 ms-2 py-2">Add to cart</button>
                    <Link to='/cart' className="btn btn-outline-dark ms-2 px-3 py-2">Go to cart</Link>
                </div>
            </div>
        </div>
    )
}

export default Pizzadetails