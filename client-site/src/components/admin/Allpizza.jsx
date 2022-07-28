import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Container } from 'react-bootstrap'
import { useEffect } from 'react'
import swal from "sweetalert";
import { getAllPizzas,deletePizza } from '../../actions/pizzasActions'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Loader from '../Loader'
import { Table } from "react-bootstrap";
import Error from '../Error'
import { Link } from 'react-router-dom'
const Allpizza = () => {
  const dispatch = useDispatch(getAllPizzas());
  const pizzastate = useSelector(state => state.getAllPizzasReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch])
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching pizzas {error}</Error>
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Pizza Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzas &&
                pizzas.map((pizza) => (
                  <tr>
                    <td>
                      <img
                        src={pizza.image}
                        alt="logo"
                        width="100px"
                        height="70px"
                      />
                    </td>
                    <td>{pizza.name}</td>
                    <td>
                      Small : {pizza.prices[0]["small"]}
                      <br />
                      Medium : {pizza.prices[0]["medium"]}
                      <br />
                      Large : {pizza.prices[0]["large"]}
                    </td>
                    <td>{pizza.category}</td>
                    <td>
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                        <AiFillEdit style={{ cursor: "pointer",fontSize:"20px" }} />
                      </Link>
                      &nbsp;&nbsp;
                      <AiFillDelete
                        style={{ color: "red", fontSize:"20px", cursor: "pointer" }}
                        onClick={() => {

                          swal({
                            title: "Are you sure?",
                            text: "Once deleted, you will not be able to recover this imaginary file!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          })
                          .then((willDelete) => {
                            if (willDelete) {
                              dispatch(deletePizza(pizza._id));                 
                            } else {
                              swal("Your imaginary file is safe!");
                            }
                          });
                          
                          
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  )
}

export default Allpizza