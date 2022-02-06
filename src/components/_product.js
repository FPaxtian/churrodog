import React, { useState } from "react";
import Swal from "sweetalert2";
import ReactModal from "react-modal";


const Product = (props) => {
  const [open, setOpen] = useState(false);
  const agregado = () => {
      setOpen(false)
    Swal.fire({
      title: "Articulo agregado :)",
      padding: "3em",
      timer: 1000,
      type: "success",
      showCancelButton: false,
      showConfirmButton: false,
    });
  };

  console.log("aqui van los datos", props.product);
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
            onClick={() => agregado()}
            className="bg-white text-azulito hover:text-rojitoSubidito duration-500 font-semibold  mx-3 my-2 md:px-0 md:mx-10 lg:py-0 lg:px-5 lg:mx-0 lg:my-0   rounded-full"
          >
            <ion-icon style={{ fontSize: 25 }} name="cart"></ion-icon>
          </button>
        </div>
      </div>

      <ReactModal
        isOpen={open}
        style={{
          overlay: {
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(255,255,255, 0.1)",
          },
        }}
        className="w-[100%] lg:w-[60%] h-auto md:h-[70vh] bg-white absolute top-[10%] md:top-[20%] lg:left-[20%] rounded-lg shadow-2xl shadow-[#CCCCCC] animate-fade-in-down"
      >
        <div
          onClick={() => setOpen(false)}
          className="text-3x1 absolute  right-8 top-8 cursor-pointer  "
        >
          <ion-icon
            style={{ fontSize: 35, color: "black" }}
            name={"close"}
          ></ion-icon>
        </div>

        <div className="bg-white  h-full md:flex   ">
          <div className=" bg-white w-full h-4/6 md:h-full ">
            <div className="w-full h-full flex justify-center items-center">
              <div className="foto-contenedor w-[55%] md:w-[60%]  pt-12 ">
                <img
                  src={require("../assets/SACO 20 KILOS.jpg")}
                  className="img1 "
                  alt="churrodog perro feliz"
                ></img>
              </div>
            </div>
          </div>
          <div className="bg-white w-full h-2/6 md:w-1/3 md:h-full ">
            <div className="text-azulito p-5 md:mt-[60%]">
              <div className="font-bold text-xl md:text-3xl">
                <h1>{props.product.name}</h1>
              </div>
              <div className="text-xl w-[99%] text-left md:text-2xl ">
                <p className="break-words py-1">{props.product.description}</p>
              </div>
              <div className="text-xl">
                <h1>$ {props.product.price}</h1>
              </div>
              <div className="bg-white flex md:block  w-auto justfy-center items-center content-center">
                <button className="bg-rojito  hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-3 mx-10 my-2  md:my-4 md:px-5 md:mx-1 md:w-[100%]  rounded-full">
                  Comprar
                </button>
                <div className="pedido bg-white w-full h-auto  border-t-1 border-grisesitoFuertito flex justify-end items-center">
                  <button onClick={()=>agregado()} className="bg-azulito  hover:bg-azulito duration-500 text-white font-semibold py-1 px-10 mx-10 my-2   md:my-2 md:px-5 md:mx-1  md:w-[100%]  rounded-full">
                    <ion-icon style={{ fontSize: 20 }} name="cart"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default Product;
