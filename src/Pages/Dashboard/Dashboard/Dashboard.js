import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "../../../images/carco.png";
import Pay from "../Pay/Pay";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";
import Review from "../Review/Review";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddProducts from "../AddProducts/AddProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, logOut, admin } = useAuth();
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <img width="100px" className="img-fluid" src={img} alt="" />
              <ul
                className="nav flex-column mt-4 mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <NavLink
                    style={{ color: "white" }}
                    to="/home"
                    className="nav-link align-middle px-3"
                  >
                    <i className="fas fa-igloo"></i>
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={{ color: "white" }}
                    to={`${url}`}
                    className="nav-link align-middle px-3"
                  >
                    <i className="fas fa-tachometer-alt"></i>

                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </NavLink>
                </li>

                {/* User */}
                
                {!admin && (
                  <>
                    <li className="nav-item">
                      <NavLink
                        activeStyle={{
                          fontWeight: "bold",
                          color: "orange",
                        }}
                        style={{ color: "white" }}
                        to={`${url}/pay`}
                        className="nav-link align-middle px-3"
                      >
                        <i className="fas fa-money-check-alt"></i>

                        <span className="ms-1 d-none d-sm-inline">Payment</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeStyle={{
                          fontWeight: "bold",
                          color: "orange",
                        }}
                        style={{ color: "white" }}
                        to={`${url}/myOrder`}
                        className="nav-link align-middle px-3"
                      >
                        <i className="fas fa-clipboard-check"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          My Cart
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeStyle={{
                          fontWeight: "bold",
                          color: "orange",
                        }}
                        style={{ color: "white" }}
                        to={`${url}/review`}
                        className="nav-link align-middle px-3"
                      >
                        <i className="fas fa-clipboard-list"></i>
                        <span className="ms-1 d-none d-sm-inline">FeedBack</span>
                      </NavLink>
                    </li>
                  </>
                )}
                {/* Admin */}
                {admin && (
                  <>
                    <li className="nav-item">
                      <NavLink
                        activeStyle={{
                          fontWeight: "bold",
                          color: "Orange",
                        }}
                        style={{ color: "white" }}
                        to={`${url}/manageAllOrders`}
                        className="nav-link align-middle px-3"
                      >
                        <i className="fas fa-user-edit"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          Orders Panel
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeStyle={{
                          fontWeight: "bold",
                          color: "orange",
                        }}
                        style={{ color: "white" }}
                        to={`${url}/addCar`}
                        className="nav-link align-middle px-3"
                      >
                        <i className="fas fa-plus-square"></i>
                        <span className="ms-1 d-none d-sm-inline">Add New</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeStyle={{
                          fontWeight: "bold",
                          color: "orange",
                        }}
                        style={{ color: "white" }}
                        to={`${url}/makeAdmin`}
                        className="nav-link align-middle px-3"
                      >
                        <i className="fas fa-user-cog"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          Adminship
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeStyle={{
                          fontWeight: "bold",
                          color: "orange",
                        }}
                        style={{ color: "white" }}
                        to={`${url}/manageProducts`}
                        className="nav-link align-middle px-3"
                      >
                        <i className="fas fa-tasks"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          Manage Products
                        </span>
                      </NavLink>
                    </li>
                  </>
                )}
               
              </ul>

            </div>
          </div>
          <div className="col py-3">
            <Switch>
              <Route exact path={path}>
                <DashboardHome></DashboardHome>
              </Route>
              <Route path={`${path}/pay`}>
                <Pay />
              </Route>
              <Route path={`${path}/myOrder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <AdminRoute path={`${path}/manageAllOrders`}>
                <ManageAllOrders></ManageAllOrders>
              </AdminRoute>
              <AdminRoute path={`${path}/addCar`}>
                <AddProducts></AddProducts>
              </AdminRoute>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
