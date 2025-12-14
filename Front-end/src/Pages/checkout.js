import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { isAuthenticated } from "../auth/helpers";
import { Link } from "react-router-dom";

const checkout = ({ products }) => {
  //fonction calculer Totale
  function totalcheckout(products) {
    return products.reduce(
      (total, product) => total + product.count * product.price,
      0
    );
  }
  //fonction Afficher block paimment online

  //fonction Afficher le Button
  const showBtncheckout = () => {
    if (isAuthenticated()) {
      return (
        <div>
          <PayPalButton
            options={{
              clientId:
                "AXzQc7Bvycv0j8ELPfVTIB5FIlLyWCNdEj0-6RmuiM-scUhijwVf1P981zHzaoUhxpAYZ2GYUqY4DZqO",
              currency: "USD",
            }}


            onSuccess={(details, data) => {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
              console.log({ details, data });
            }}
            
            amount={totalcheckout(products)}
          />
        </div>
      );
    }
    return (
      <Link to="/signin">
        <button className=" btn-checkout btn font-weight-bold text-light btn-block btn-warning btn-raised ">
          inscrire pour Payer
        </button>
      </Link>
    );
  };
  return (
    <div>
      <h2 className=" font-weight-bold text-center  ">
        Total :<span className="text-warning">{totalcheckout(products)}DH</span>
      </h2>
      {showBtncheckout()}
    </div>
  );
};

export default checkout;
