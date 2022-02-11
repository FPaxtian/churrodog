import React, { useState } from "react";
import Swal from "sweetalert2";
import ReactModal from "react-modal";
// import { addProductCart } from "../api/cart";

const Product = (props) => {
    const [open, setOpen] = useState(false);
    const agregado = (idProduct) => {
        setOpen(false)
        // addProductCart(idProduct);
        Swal.fire({
            title: "Articulo agregado :)",
            padding: "3em",
            timer: 1000,
            type: "success",
            showCancelButton: false,
            showConfirmButton: false,
        });
    };

    //console.log("aqui van los datos", props.product);
    return (
        <div>
            <div className=" contenedor-hijo relative shadow-2xl shadow-[rgb(176,176,176)] mx-3 my-3 lg:mx-10 lg:my-10 rounded-lg  w-[90%] h-[auto]  lg:w-[75%] xl:h-[45vh]  bg-white">
                <div className=" lg:transform  lg:transition lg:duration-500 lg:hover:scale-110">
                    <img
                        src={require("../assets/SACO 20 KILOS.jpg")}
                        className="imgProducto xl:h-auto lg:w-auto my-0  h-auto  rounded-lg  "
                        alt="churrodog perro feliz"
                    ></img>
                </div>

                <div className="flex justify-between items-center w-full absolute bottom-0 text-white 2xl:text-xl text-sm lg:p-4 font-bold bg-white  rounded-lg">
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-rojito hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-3 mx-1 my-2 md:px-10 md:mx-9 lg:py-1 lg:px-5 lg:mx-2 lg:my-0   rounded-full"
                    >
                        Ver producto
                    </button>
                    <button
                        onClick={() => agregado(props.product._id)}
                        className="bg-white text-azulito hover:text-rojitoSubidito duration-500 font-semibold  mx-3 my-2 md:px-0 md:mx-10 lg:py-0 lg:px-5 lg:mx-0 lg:my-0   rounded-full"
                    >
                        <ion-icon style={{ fontSize: 25 }} name="cart"></ion-icon>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Product;
