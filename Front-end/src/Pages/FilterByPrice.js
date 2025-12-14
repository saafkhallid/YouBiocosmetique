import React from 'react'

const FilterByPrice = ({ handleFilters }) => {
    
    const prices = [
        {
            _id: 1,
            name: "Any",
            value: []
        },
        {
            _id: 2,
            name: "0 DH to 39 DH",
            value: [0, 39]
        },
        {
            _id: 3,
            name: "40 DH to 79 DH",
            value: [40, 79]
        },
        {
            _id: 4,
            name: "80 DH to 119 DH",
            value: [80, 119]
        },

        {
            _id: 5,
            name: "120 DH to 160 DH",
            value: [120, 160]
        },

        
        {
            _id: 6,
            name: "160 DH to 300 DH",
            value: [160, 300]
        },


        {
            _id: 7,
            name: "More",
            value: [300, 9999999]
        }
    ]


    const handlePrice = (e) => {

        handleFilters(prices[e.target.value]['value'])
    }

   
    return (
      <div>
        <h4 className="mt-5 font-weight-bold text-warning">Filter By Price</h4>

        {prices.map((price, i) => (
          <div key={i} className="my-3">
            <label htmlFor={`${i}-${price.name}`} className="font-weight-bold">
              <input
                onChange={handlePrice}
                className="mx-3"
                type="radio"
                name="price"
                id={`${i}-${price.name}`}
                value={i}
              />
              {price.name}
            </label>
          </div>
        ))}
      </div>
    );
}

export default FilterByPrice
