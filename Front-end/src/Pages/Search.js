import React, { useState, useEffect } from "react";
import { getCategories, getProducts } from "./ApiCore";

import Card from "./Card";

const Search = () => {
  
  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);

  // const [result, setResult] = useState('')

  const [searchData, setSearchData] = useState({ search: "", category: "" });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.id]: e.target.value });
  };

  const resultMessage = () => {
    return (
      products &&
      products.length > 0 && (
        <h3 className=" text-center font-weight-bold text-secondary p-2">
          {" "}
          {products.length} produit(s) trouvé(s)
        </h3>
      )
    );
  };

  const searchSubmit = (e) => {

    e.preventDefault();

    let { search, category } = searchData;
    // console.log(search,category);

    if (search || category) {
      getProducts({ search: search || undefined, category }).then((res) =>
        setProducts(res)
      );
    } else {
      setProducts([]);
    }
  };

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <div>
      <form className="forme-Search" onSubmit={searchSubmit}>
        <div className="input-group input-group-lg">
          <div className="input-group-prepend  ">
            <select
              onChange={handleChange}
              id="category"
              className="btn-category font-weight-bold text-white bg-secondary px-4"
            >
              <option value="" className="bg-dark">
                Select a Category
              </option>
              {categories.map((category, i) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <input
            onChange={handleChange}
            id="search"
            type="search"
            className="form-control px-4  "
            placeholder="Rechercher un produit"
          />
          <div className="  btn-search input-group-apprend  bg-secondary ">
            <img src="https://img.icons8.com/material-outlined/20/000000/search--v1.png" />
            <button className="  btn font-weight-bold text-white ">
              Search
            </button>
          </div>
        </div>
        {/* {JSON.stringify(searchData)} */}
      </form>

      {/* <hr/> */}

      {resultMessage()}

      <div className="row">
        {products.map((product, i) => (
          <div key={product._id} className="col-md-4">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
