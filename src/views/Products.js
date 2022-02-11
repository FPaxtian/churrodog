import React, { useState, useEffect } from "react";
import Product from "../components/_product";
import axios from "axios";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //   getProducts();
  // }, []);



  // const getProducts = async () => {
  //   try {
  //     await axios
  //       .get(`api/v1/products/`)
  //       .then((res) => {
  //         setProducts(res.data);
  //         setLoader(false);
  //       })
  //       .catch((error) => {
  //         console.log("Error: ", error);
  //       });
  //   } catch (error) { }
  // };

  return (
    <div>product</div>
  );
};

export default Products;
