import React from 'react'
import ShowImage from "./ShowImage";


function ServiceCard(service) {
  return (
    <div>
      <div>
        <ShowImage
          item={service}
          url="service/photo"
          className=""
        ></ShowImage>
        <h1 className="text-dark">{service.name}</h1>
        <p className="text-dark">{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard
