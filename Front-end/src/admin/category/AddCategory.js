import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../Pages/Layout";
import { API_URL } from "./../../config";
import { isAuthenticated } from "./../../auth/helpers";
import { getCategories} from "../../Pages/ApiCore";
import toastr from "toastr";
import "toastr/build/toastr.css";

function AddCategory() {
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const submitCategory = (e) => {
    e.preventDefault();

    const { user, token } = isAuthenticated();

    fetch(`${API_URL}/category/create/${user._id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          toastr.warning(res.error, "Please Check form !", {
            positionClass: "toast-bottom-left",
          });
        } else {
          toastr.success(`Category ${name} created`, "new Category", {
            positionClass: "toast-bottom-left",
          });

          setName("");
        }
      })
      .catch((err) =>
        toastr.error(err, "Server error !", {
          positionClass: "toast-bottom-left",
        })
      );
  };


  //  const onDelete = (categoryid, userId) => {
  //    axios.delete(`${API_URL}/service/${categoryid}/${userId}`).then((res) => {
  //      alert(res.data.title + " has been deleted successfully");
  //      this.getCategories();
  //    });
  //  };



  const  DeleteCategories=(categoryid, userid)=>{
          return fetch(`${API_URL}/category/${categoryid}/${userid}`, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => res.categories)
            .catch((err) => console.error(err));
  };


  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <div>
      <Layout title="Category" description="New category" className="container">
        <div className="row">
          <div className="dashbord-AddCategory  col-md-6 mx-auto">
            <h1 className="titre-category font-weight-bold text-dark text-center ">
              Add Category
            </h1>

            <form onSubmit={submitCategory}>
              <div className="form-grou">
                <label htmlFor="" className="text-muted"></label>
                <input
                  value={name}
                  required
                  autoFocus
                  placeholder="Add name of Category"
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
              <button className=" Add-button font-weight-bold text-light bg-secondary btn btn-outline-primary ">
                New category
              </button>
            </form>
          </div>
          <div id="mytable">
            <table class="table-dashbord">
              <tr className="thstyle">
                <th>ID</th>
                <th>Name Category</th>
                <th>Action</th>
              </tr>
              {categories &&
                categories.map((category, i) => (
                  <tr className="table-category">
                    <td className="font-weight-bold" scope="row">
                      {i}{" "}
                    </td>
                    <td className="font-weight-bold">{category.name}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => DeleteCategories()}
                        // onClick={() =>onDelete(category._categoryid)}
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
      </Layout>
    </div>
  );
}

export default AddCategory;
