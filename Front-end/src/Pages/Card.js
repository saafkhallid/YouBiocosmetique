import React from "react";

import { Link } from "react-router-dom";

import { addToCart } from "../actions/cartActions";

import { useDispatch } from "react-redux";

import ShowImage from "./ShowImage";

import moment from "moment";

// Afficher les Produit
const Card = ({ product, showViewBtn = true }) => {
  let dispatch = useDispatch();

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge badge-primary">{quantity} In Stock</span>
    ) : (
      <span className="badge badge-danger">Out of Stock</span>
    );
  };

  return (
    <div>
      <div className="card  text-white mb-2 px-2 Block-card ">
        <div className="card-header">
          <h4 className="display-6 text-center text-dark font-weight-bold">
            {product.name}
          </h4>{" "}
        </div>

        <ShowImage
          item={product}
          url="product/photo"
          className="card-img-top image-card "
        ></ShowImage>

        <div className="card-body  ">
          <p
            className=" font-weight-bold text-dark "
            style={{ fontSize: "15px" }}
          >
            {product.description.substring(0, 70)}...
          </p>

          <div className="text-center my-3">
            <h4>
              <span
                style={{ fontSize: "25px" }}
                className="badge text-danger font-weight-bold"
              >
                DH{product.price}
              </span>
            </h4>

            <span
              style={{ fontSize: "20px" }}
              className="ml-5  badge-pill  badge-success text-ligth  font-weight-bold "
            >
              {product.category.name}
            </span>
          </div>

          <div className="well">
            <h4 className="text-secondar">{showStock(product.quantity)}</h4>

            <span className="text-dark p-2">
              Added {moment(product.createdAt).fromNow()}
            </span>
          </div>
          <div className="block-view">
            {showViewBtn && (
              <Link to={`/product/${product._id}`}>
                <button className="btn-view  btn border btn-warning mr-3 font-weight-bold active">
                  View
                </button>
              </Link>
            )}

            {product.quantity > 0 && (
              <button
                onClick={() => dispatch(addToCart(product))}
                className=" btn-card btn border  btn-success font-weight-bold  active "
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
