import React, { useState, useEffect } from "react";
import Product from '../components/_product';
import axios from 'axios'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      await axios
        .get(`api/v1/products/`)
        .then(res => {
          setProducts(res.data)
        })
        .catch(error => {
          console.log('Error: ', error)
        });
    } catch (error) {
    }
  }


  return (
    <div className="contenedor padre bg-black w-auto h-auto">
      <div className="w-full h-[auto] bg-white mx-auto">
        <div className="p-10">
          <h1 className="text-xl lg:text-4xl 2xl:text-5xl 2xl:pl-44 text-left font-bold text-black">
            Nuestros p<a className="underline decoration-rojito">roductos</a>
          </h1>
        </div>
        <div class="container mx-auto">
          <div className="contenedor-padre w-full h-auto grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">

            {
              products.map((data) => {
                return (
                  <Product key={data._id} product={data} />
                )
              })
            }


          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
