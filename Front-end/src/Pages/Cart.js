import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Checkout from "./checkout";

import {
  incProductCount,
  decProductCount,
  removeProduct,
  
} from "../actions/cartActions";

import Layout from "./Layout";
import ShowImage from "./ShowImage";

function Cart() {
  let productsInCart = useSelector((state) => state.cart.products);
  let dispatch = useDispatch();

  return (
    <div>
      <Layout className="container-fluid">
        <div className="row cart-select d-flex justify-content-center">
          <div className="col-md-9">
            <h1 className=" text-center font-weight-bold">MES COMMANDES</h1>
            <table className=" table-cart  table-cart  mt-4">
              <thead width="80px" className="font-weight-bold ">
                <tr className=" font-weight-bold text-secondar bg-light">
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {productsInCart.map((product, index) => (
                  <tr key={product._id}>
                    <td width="80px" className="font-weight-bold">
                      <ShowImage
                        item={product}
                        url="product/photo"
                        className="card-img-top"
                      ></ShowImage>
                    </td>
                    <td>
                      <h5 className="font-weight-bold">{product.name}</h5>
                      <p className="well text-dark">
                        {product.description.substring(0, 100)}
                      </p>
                    </td>
                    <td>
                      <div className="input-group">
                        <h4>
                          <span className="span span-success">
                            {product.count}
                          </span>
                        </h4>
                        <div className="input-group-prepend">
                          <button
                            onClick={() => dispatch(incProductCount(product))}
                            className="btn ml-2 btn-raised btn-sm btn-info"
                          >
                            <i className="material-icons">add</i>
                          </button>

                          {product.count > 1 && (
                            <button
                              onClick={() => dispatch(decProductCount(product))}
                              className="btn btn-raised btn-sm btn-secondary"
                            >
                              <i className="material-icons">remove</i>
                            </button>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>DH {product.price}</td>
                    <td>DH{product.price * product.count}</td>
                    <td className="text-right">
                      <button
                        onClick={() => dispatch(removeProduct(product._id))}
                        className="btn btn-sm btn-dark"
                      >
                        <i className="material-icons">delete</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-md-3">
            <Checkout products={productsInCart} />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Cart;
