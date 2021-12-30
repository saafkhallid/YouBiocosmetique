import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated } from "../auth/helpers";
import Panier from "../images/Paniers.png";
import { useSelector } from "react-redux";
import toastr from "toastr";
import "toastr/build/toastr.css";

import { API_URL } from "../config";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#000" };
  } else {
    return { color: "#fff" };
  }
};

const Menu = (props) => {
  let countItem = useSelector((state) => state.cart.count);

  const signout = () => {
    fetch(`${API_URL}/signout`)
      .then(() => {
        toastr.info("User SignOut", "Next Time", {
          positionClass: "toast-bottom-left",
        });

        localStorage.removeItem("jwt_info");

        props.history.push("/signin");
      })
      .catch();
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary">
        <Link className="navbar-brand" to="/">
          <span className="Titre1">#YouBio</span>
          <span className="Titre2">cosmetique</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Fragment>
              <li className="font-weight-bold nav-item active   ">
                <Link
                  style={isActive(props.history, "/")}
                  className=" nav-link"
                  to="/"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="font-weight-bold nav-item active">
                <Link
                  style={isActive(props.history, "/shop")}
                  className="nav-link"
                  to="/shop"
                >
                  Shop{" "}
                </Link>
              </li>

              <li className=" font-weight-bold nav-item active">
                <Link
                  style={isActive(props.history, "/service")}
                  className="nav-link"
                  to="/service"
                >
                  Services{" "}
                </Link>
              </li>
              <li className=" font-weight-bold nav-item active">
                <Link
                  style={isActive(props.history, "/Contact")}
                  className="nav-link"
                  to="/Contact"
                >
                  Contact Us{" "}
                </Link>
              </li>

              <li className="font-weight-bold nav-item active">
                <Link
                  style={isActive(props.history, "/dashboard")}
                  className="nav-link"
                  to={`${
                    isAuthenticated() && isAuthenticated().user.role === 1
                      ? "/admin"
                      : ""
                  }/dashboard`}
                >
                  dashboard
                </Link>
              </li>
            </Fragment>
          </ul>
          <ul className="navbar-nav ml-auto">
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    style={isActive(props.history, "/signin")}
                    className="nav-link"
                    to="/signin"
                  >
                    Connexion
                  </Link>
                </li>

                <li className=" font-weight-bold nav-item">
                  <Link
                    style={isActive(props.history, "/signup")}
                    className="nav-link"
                    to="/signup"
                  >
                    inscription
                  </Link>
                </li>
              </Fragment>
            )}

            <li className="font-weight-bold nav-item">
              <Link
                style={isActive(props.history, "/cart")}
                className="nav-link"
                to="/cart"
              >
                <img src={Panier} height="20" className="logo-name" />
                &nbsp; &nbsp;
                <span className="badge badge-dark">{countItem} </span>
              </Link>
            </li>

            {isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={signout}
                  >
                    SignOut
                  </span>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Menu);
