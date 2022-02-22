import React, { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [tarjeta, setTarjeta] = useState(false);
  return (
    <div className="contenedor w-full h-auto bg-grisesitoFuertito lg:flex lg:justify-center lg:content-center lg:p-10">
      <div className=" w-full h-full lg:w-[70%] lg:flex  ">
        <div className="w-[100%] h-full lg:w-[70%] lg:h-full  ">
          <div className="contenedor-hijo-titulo w-full lg:w-[100%] h-auto bg-white ">
            <h2 className=" text-2xl lg:text-3xl 2xl:text-3xl pt-5 text-azulito underline decoration-rojito p-3">
              Metodo de pago
            </h2>
            <div className="p-5 md:p-10 md:px-28 lg:px-10">
              <a className=" cursor-pointer" onClick={() => setTarjeta(false)}>
                <div className="direccion bg-grisesitoFuertito h-full flex items-center my-2 rounded-xl p-5">
                  <ul className="text-azulito py-10">
                    <li className="w-[20%]">
                      <img src={require("../assets/paypal.png")} alt="Paypal churrodog" />
                    </li>
                  </ul>
                </div>
              </a>
              <a className=" cursor-pointer" onClick={() => setTarjeta(true)}>
                <div className="direccion bg-grisesitoFuertito h-full flex items-center my-2 rounded-xl p-5">
                  <ul className="text-azulito py-10">
                    <li>
                      <h2 className="text-2xl font-bold">
                        Agregar nueva tarjeta <ion-icon style={{fontSize:"25px"}} name="card-outline"></ion-icon>
                      </h2>
                      <h2
                        className={` ${
                          tarjeta ? "text-2xl " : " hidden text-sm italic"
                        }`}
                      >
                        Aqui va el formulario de la tarjeta 
                      </h2>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-grisesitoFuertito w-[100%] h-auto lg:w-[30%] lg:h-[70vh]  ">
          <div className="productos-total p-10">
            <h2 className="font-bold text-xl">Resumen de la compra</h2>
            <hr></hr>
            <h2 className="py-5 font-medium">Productos :(2)</h2>
            <div className="flex">
              <h2 className=" font-medium">Total :</h2>
              <h2 className="text-right ">$1293</h2>
            </div>
          </div>
          <div className="pedido bg-transparent w-full h-[15vh]  border-t-1 border-grisesitoFuertito flex justify-center ">
            <Link to={"/payment-method"}>
              <button className="bg-rojito lg:h-[5vh] lg:w-[10vw] hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-3 mx-10 my-2 md:px-10 md:mx-9 lg:py-1 lg:px-5 lg:mx-20 lg:my-0   rounded-full">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
