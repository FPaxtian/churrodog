import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCart from '../components/_product_cart';
import { getProductsCartApi, getTotalCartAPi, deleteAllProductCartApi, getCartApi, addProductCart, deleteProductCartApiById } from "../api/cart";
const Cart = () => {

  const [products, setProducts] = useState([])
  const [total, setTotal] = useState([])
  const [cart, setCart] = useState([])
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getProducts()
    getTotal()
    getCart()
  }, [])

  const getProducts = async () => {
    const productsCart = await getProductsCartApi()
    console.log(productsCart);
    setProducts(productsCart)
    setLoader(false)
  }
  const getTotal = async () => {
    const totalApi = await getTotalCartAPi()
    setTotal(totalApi)
  }
  const getCart = async () => {
    const cart = await getCartApi()
    setCart(cart)
  }

  const deleteProductCart = async (productId) => {
    deleteAllProductCartApi(productId)
    getProducts()
    getTotal()
    getCart()
  }
  const addProductApi = async (productId) => {
    addProductCart(productId)
    getProducts()
    getTotal()
    getCart()
  }
  const deleteProductCartiById = async (productId) => {
    deleteProductCartApiById(productId)
    getProducts()
    getTotal()
    getCart()
  }
  return (
    <div className="contenedor w-full h-full bg-grisesitoFuertito lg:flex lg:justify-center lg:content-center lg:p-10">
      <div className="contenedor-padre w-full lg:w-[60%] h-auto bg-grisesitoFuertito ">
        <div className="contenedor-hijo-titulo w-full lg:w-[100%] h-auto bg-white ">
          <h1 className=" text-2xl lg:text-3xl 2xl:text-3xl mt-5 text-azulito underline decoration-rojito p-3">
            Carrito
          </h1>
          {loader && (
            <div className="w-full flex justify-center items-center content-center">
              <img
                src={require("../assets/perroEsperando.gif")}
                alt="Funny image"
              />
            </div>
          )}
          {cart.length === 0 ? (
            <div className="pedido flex justify-center items-center bg-white w-full h-[17vh] border-y-4 border-grisesitoFuertito text-center text-2xl">
              Aun no tienes productos
            </div>
          ) : (
            <div>

              {products.map((data) => {
                return <ProductCart product={data} deleteProduct={deleteProductCart} addProduct={addProductApi} deleteProductById={deleteProductCartiById} />
              })}

              <div className="pedido bg-white w-full h-auto  order border-y-4 border-grisesitoFuertito flex justify-end items-center">
                <h1 className=" p-5  lg:p-10 font-bold text-2xl text-azulito">
                  Total: {"$"}{total}
                </h1>
              </div>
              {/* boton para Pagar */}
              <div className="pedido bg-white w-full h-[15vh]  border-t-1 border-grisesitoFuertito flex justify-end items-center">
                <Link to={"/direction-payment"}>
                  <button className="bg-rojito lg:h-[5vh] lg:w-[10vw] hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-3 mx-10 my-2 md:px-10 md:mx-9 lg:py-1 lg:px-5 lg:mx-20 lg:my-0   rounded-full">
                    Pagar
                  </button>
                </Link>
              </div>
            </div>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
