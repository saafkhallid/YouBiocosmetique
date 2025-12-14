import React from "react";
import  { BrowserRouter, Switch, Route }  from  "react-router-dom";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Menu from "./Pages/Menu";

import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Dashboard from "./user/Dashboard";
import AdminDashboard from "./user/AdminDashboard";

import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";

import AddCategory from "./admin/category/AddCategory";
import AddProduct from "./admin/product/AddProduct";
import AddService from "./admin/service/Addservice";

import Product from "./Pages/Product";

import Cart from "./Pages/Cart";

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/cart" exact component={Cart}/>
        <Route path="/product/:id" exact component={Product} />

        <PrivateRoute path="/shop" exact component={Shop} />
        <PrivateRoute path="/service" exact component={Service} />
        <PrivateRoute path="/Contact" exact component={Contact} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />

        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/products/create" exact component={AddProduct} />
        <AdminRoute path="/categorys/create" exact component={AddCategory} />
        <AdminRoute path="/services/create" exact component={AddService} />
        
        
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
