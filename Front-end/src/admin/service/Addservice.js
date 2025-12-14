import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../Pages/Layout";
import { API_URL } from "../../config";
import { isAuthenticated } from "../../auth/helpers";
import toastr from "toastr";
import "toastr/build/toastr.css";
import ShowImage from "../../Pages/ShowImage";

function Addservice() {
  const { user, token } = isAuthenticated();
  const [services, setServices] = useState([]);
  const [service, setService] = useState({
    photo: "",
    name: "",
    description: "",
  });

  const getServices = () => {
    fetch(`${API_URL}/service`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setServices(res.services))
      .catch((err) => console.error(err));
  };

  const DeleteService = (serviceId, userId) => {

    return fetch(`${API_URL}/service/${serviceId}/${userId}`, {
      
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => res.services)
      .catch((err) => console.error(err));
  };

 const onDelete = (serviceId, userId) => {
    axios.delete(`${API_URL}/service/${serviceId}/${userId}`).then((res) => {
      alert(res.data.title+" has been deleted successfully");
      this.getServices();
    });
  };

  // const onDelete = (id) => {
  //   axios.delete(`${API_URL}/service/${id}`).then((res) => {
  //     alert(" has been deleted successfully");
  //     this.getServices();
  //   });
  // };

  useEffect(() => getServices(), []);
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (e) => {
    const value = e.target.id === "photo" ? e.target.files[0] : e.target.value;

    formData.set(e.target.id, value);

    setService({ ...service, [e.target.id]: value });
  };

  const submitService = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/service/create/${user._id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          toastr.warning(res.error, "Please Check form !", {
            positionClass: "toast-bottom-left",
          });
        } else {
          toastr.success(`Service ${service.name} created`, "new Product", {
            positionClass: "toast-bottom-left",
          });

          setService({
            photo: "",
            name: "",
            description: "",
          });

          setFormData(new FormData());
        }
      })
      .catch((err) =>
        toastr.error(err, "Server error !", {
          positionClass: "toast-bottom-left",
        })
      );
  };

  return (
    <div className="container">
      <Layout className="container">
        <div>
          <div className="row">
            <div className="dashbord-AddService col-md-6 mx-auto">
              <h1 className="btn-service font-weight-bold text-dark text-center ">
                Add Service
              </h1>
              <form onSubmit={submitService}>
                <div className="form-group">
                  <label htmlFor="photo" className="font-weight-bold">
                    Photo Service
                  </label>
                  <input
                    onChange={handleChange}
                    id="photo"
                    type="file"
                    className="form-control-file"
                    name="photo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="" className=" font-weight-bold">
                    Service name
                  </label>
                  <input
                    onChange={handleChange}
                    id="name"
                    required
                    autoFocus
                    placeholder="Add name of Product"
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="font-weight-bold">
                    Service description
                  </label>
                  <textarea
                    onChange={handleChange}
                    id="description"
                    name="description"
                    rows="2"
                    className="form-control"
                  ></textarea>
                </div>

                {/* { JSON.stringify(service) } */}

                <button className="Add-button font-weight-bold text-light bg-secondary my-5 btn-block btn btn-outline-primary">
                  New Service
                </button>
              </form>
            </div>

            <div class="table" id="mytable">
              <table>
                <tr className="thstyle">
                  <th>ID</th>
                  <th>photo service </th>
                  <th>name service </th>
                  <th>description service </th>
                  <th>Action</th>
                </tr>
                {services &&
                  services.map((service, i) => (
                    <tr className="table-service">
                      <td className="font-weight-bold" scope="row">
                        {i + 1}
                      </td>
                      <td>
                        {" "}
                        <ShowImage
                          item={service}
                          url="service/photo"
                          className="image-service"
                        ></ShowImage>
                      </td>
                      <td className="font-weight-bold"> {service.name}</td>
                      <td className="font-weight-bold">
                        {" "}
                        {service.description}
                      </td>
                      <td className="font-weight-bold">
                        {" "}
                        <button
                          className="btn btn-primary"
                          // onClick={() => onDelete(service._id)}
                          onClick={() => onDelete(service._serviceId)}
                          // onClick={() => DeleteService(service.serviceId)}
                        >
                          Delete
                        </button>
                        <button className="btn btn-primary">Update</button>
                      </td>
                    </tr>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Addservice;
