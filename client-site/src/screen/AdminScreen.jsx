import React from 'react'
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Route, Switch } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import Addpizza from '../components/admin/Addpizza';
import Allorder from '../components/admin/Allorder';
import Allpizza from '../components/admin/Allpizza';
import Alluser from '../components/admin/Alluser';
import Dashboard from '../components/admin/Dashboard';
import { logoutUser } from "../actions/UserActions"
import { useEffect } from 'react';
import Editpizza from '../components/admin/Editpizza';
const AdminScreen = ({ history }) => {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
    useEffect(() => {
        if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
            history.push("/")
        }
    }, [currentUser]);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" style={{ "min-height": "100vh" }} className="p-0 col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
                        <NavLink to="/admin" className="d-flex mt-2 align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
                            <span className="fs-4 ">&nbsp;Admin Pannel</span>
                        </NavLink>
                        <hr className='text-light ' />
                        <div className="position-sticky pt-3">
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className="nav-item">
                                    <NavLink to="/admin/dashboard" className="nav-link link-light" aria-current="page">
                                        Dashboard
                                    </NavLink>
                                </li>
                                <hr className='text-light m-0' />
                                <li>
                                    <NavLink to="/admin/pizzalist" className="nav-link link-light">
                                        All Pizzas
                                    </NavLink>
                                </li>
                                <hr className='text-light m-0' />
                                <li>
                                    <NavLink to="/admin/addnewpizza" className="nav-link link-light">
                                        Add New Pizza
                                    </NavLink>
                                </li>
                                <hr className='text-light m-0' />
                                <li>
                                    <NavLink to="/admin/alluser" className="nav-link link-light">
                                        All Users
                                    </NavLink>
                                </li>
                                <hr className='text-light m-0' />
                                <li>
                                    <NavLink to="/admin/orderlist" className="nav-link link-light">
                                        All Orders
                                    </NavLink>
                                </li>
                                <hr className='text-light m-0' />
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Admin Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn btn-outline-secondary">Export</button>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn btn-outline-secondary"
                                    onClick={() => { dispatch(logoutUser()) }}
                                >
                                    <i className='fa fa-user'></i>
                                    Logout
                                </button>
                            </div>
                        </div>


                        <Switch>
                            <Route path="/admin" component={Allorder} exact />
                            <Route path="/admin/dashboard" component={Allorder} exact />
                            <Route exact path="/admin/orderlist" component={Allorder} />
                            <Route exact path="/admin/addnewpizza" component={Addpizza} />
                            <Route exact path="/admin/pizzalist" component={Allpizza} />
                            <Route exact path="/admin/alluser" component={Alluser} />
                            <Route exact path="/admin/editpizza/:pizzaId" component={Editpizza} />
                        </Switch>

                    </main>
                </div>
            </div>
        </>
    )
}

export default AdminScreen