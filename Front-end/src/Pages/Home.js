import React, { useState, useEffect } from "react";

import Layout from "./Layout";

import { getProducts } from "./ApiCore";

import Card from "./Card";

import Heroheader from "./heroherder";

import Section from "./section";

import Search from "./Search";

function Home() {

  const [productsBestSellers, setProductsBestSellers] = useState([]);
  const [productsArrivals, setProductsArrivals] = useState([]);

  const loadBestSellers = () => {
    getProducts({ sortBy: "sold", order: "desc", limit: 4 }).then((products) =>
      setProductsBestSellers(products)
    );
  };

  const loadArrivals = () => {
    getProducts({ sortBy: "createdAt", order: "desc", limit: 8 }).then(
      (products) => setProductsArrivals(products)
    );
  };
  useEffect(() => {
    loadArrivals();
    loadBestSellers();
  }, []);

  return (
    <div>
      <Heroheader />
      
      <div>
        <div class="elfsight-app-cf04d448-6120-47e1-a7a5-5838721d5610"></div>
      </div>
      
      <Layout className="container">
        <Search/>

        <h1 className="container-titre">Nouveau Produis</h1>
        <hr className="Titre-ligne1" />
        <div className="container-home  row mt-3 mb-5">
          {productsArrivals.map((product, i) => (
            <div key={product._id} className="col-md-4">
              <Card product={product}></Card>
            </div>
          ))}
        </div>
        <hr />

        <h1 className="container-titre">Produis</h1>
        <hr className="Titre-ligne2" />

        <div className=" container-home row mt-3 mb-5">
          {productsBestSellers.map((product, i) => (
            <div key={product._id} className="col-md-4">
              <Card product={product}></Card>
            </div>
          ))}
        </div>
      </Layout>
      <Section />

      <div className="one">
        <div class="elfsight-app-0eac41ce-4794-4c36-bf86-c4ddc987ccdc"></div>
      </div>
    </div>
  );
}

export default Home;
