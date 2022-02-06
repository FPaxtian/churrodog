import React from "react";
import { Link } from "react-router-dom";

const DashboardClient = () => {
  const carrito = true;
  return (
    <div className="contenedor w-full h-screen bg-grisesitoFuertito lg:flex lg:justify-center lg:content-center lg:p-10">
      <div className="contenedor-padre w-full lg:w-[60%] h-auto bg-grisesitoFuertito ">
        <div className="contenedor-hijo-titulo w-full lg:w-[100%] h-auto] bg-white ">
          <h1 className=" text-2xl lg:text-3xl 2xl:text-3xl mt-5 text-azulito underline decoration-rojito p-3">
            Carrito
          </h1>
          {carrito ? (
            <div>
              <div className="pedido bg-white w-full h-[30vh] md:h-[17vh] lg:h-[17vh] border-t-4  border-grisesitoFuertito grid md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4">
                <div className="pedido bg-red-500 w-full h-auto border-y-4 border-grisesitoFuertito  col-span-2 p-10 ">
                  no tienes
                </div>
                <div className="pedido bg-blue-500 w-full h-auto border-y-4 border-grisesitoFuertito flex justify-center items-center">
                <input type="number" id="quantity" name="quantity" min="1" max="5" placeholder="1"/>
                </div>
                <div className="pedido bg-green-500 w-full h-auto text-xl border-y-4 font-bold border-grisesitoFuertito flex justify-center items-center">
                 $1879.47
                </div>
              </div>
            </div>
          ) : (
            <div className="pedido bg-white w-full h-[17vh] border-y-4 border-grisesitoFuertito">
              no tienes
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
