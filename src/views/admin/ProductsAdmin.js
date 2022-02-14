import React, { useState, useEffect } from "react";
import Product from "../../components/admin/_productsAdm";
import axios from "axios";
import { deleteProductById } from '../../api/product'
import Swal from "sweetalert2";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      await axios
        .get(`api/v1/products/`)
        .then((res) => {
          setProducts(res.data);
          setLoader(false);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } catch (error) { }
  };

  const deleteConfirm = (product) => {
    Swal.fire({
      title: "¿Quieres eliminar este elemento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        _deleteProductById(product._id)
      }
    });
  };

  const _deleteProductById = async (product_id) => {
    await deleteProductById({ product_id, getProducts, churroAlerSuccessDelete })
  }

  const churroAlerSuccessDelete = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro producto eliminado con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="contenedor padre bg-black w-auto h-auto">
      <div className="w-full h-[auto] bg-white mx-auto">
        <div className="p-10">
          <h1 className="text-xl lg:text-4xl 2xl:text-5xl 2xl:pl-44 text-left font-bold text-black">
            Tus p<a className="underline decoration-rojito">roductos</a>
          </h1>
        </div>

        <a className="cursor-pointer">
          <div className="flex justify-center items-center text-center">
            <div className="bg-grisesitoFuertito w-[20%] h-auto text-4xl md:text-5xl rounded-lg">
              <ion-icon style={{ color: "gray" }} name="add-circle"></ion-icon>
            </div>
          </div>
        </a>
        {/* Loader */}
        {loader && (
          <div className="w-full flex justify-center items-center content-center">
            <img
              src={require("../../assets/perroEsperando.gif")}
              alt="Funny image"
            />
          </div>
        )}
        <div class="container mx-auto">
          <div className="contenedor-padre w-full h-auto grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
            {products.map((data) => {
              return <Product key={data._id} product={data} delete={deleteConfirm} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAdmin;
