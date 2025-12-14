import React, { useState, useEffect } from "react";
import ShowImage from "./ShowImage";
import { API_URL } from "../config";

import Layout from "./Layout";

const Service = () => {
  
  const [services, setService] = useState([]);

   const getServices = () => {
     fetch(`${API_URL}/service`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setService(res.services))
      .catch((err) => console.error(err));
  };

  
  
  useEffect(() => getServices(), []);


  return (
    <div>
      <Layout className="container">
        <div className=" font-weight-bold text-center text-dark ">
          <h1>
            Services <span className="Titre1">Youbio</span>
            <span className="Titre2">cosmetique </span>
          </h1>
          <hr className="service-ligne" />
          <p className="text-dark service-para">
            Commencez à vendre vos produits en ligne dès aujourd'hui
          </p>
        </div>
        <div className="container-service">
          {services &&
            services.map((service, i) => (
              <div className="block-service col-md-3 ">
                <ShowImage
                  item={service}
                  url="service/photo"
                  className="image-service"
                ></ShowImage>
                <h3 className=" font-weight-bold titre-service  text-center">
                  {service.name}
                </h3>
                <p className=" text-secondary para-service text-center ">
                  {service.description}
                </p>
              </div>
            ))}
        </div>
      </Layout>
    </div>
  );
};

export default Service;
