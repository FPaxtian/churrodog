import React, { useState } from "react";

const DashboardClient = () => {
  const carrito = true;

  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    setNumero(numero + 1);
  };
  const restar = () => {
    if (numero == 0) {
    } else setNumero(numero - 1);
  };

  return (
    <div className="contenedor w-full h-full bg-grisesitoFuertito lg:flex lg:justify-center lg:content-center lg:p-10">
      <div className="contenedor-padre w-full lg:w-[60%] h-auto bg-grisesitoFuertito ">
        <div className="contenedor-hijo-titulo w-full lg:w-[100%] h-auto bg-white ">
          <h1 className=" text-2xl lg:text-3xl 2xl:text-3xl mt-5 text-azulito underline decoration-rojito p-3">
            Carrito
          </h1>
          {carrito ? (
            <div>
              <div className="pedido bg-white w-full h-auto md:h-auto lg:h-[17vh]  border-y-4 border-grisesitoFuertito  grid md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4">
                <div className="pedido-card  bg-black w-full h-auto   col-span-2  text-azulito grid grid-cols-4">
                  <div className="pedido-foto bg-white w-full h-auto flex justify-center  items-center p-2">
                    <img
                      src={require("../assets/SACO 20 KILOS.jpg")}
                      className="img1  h-[80%] "
                      alt="churrodog perro feliz"
                    ></img>
                  </div>

                  <div className="pedido-info bg-white w-full h-auto col-span-3 ">
                    <ul className="p-5 leading-1">
                      <li className="font-bold lg:text-lg 2xl:text-2xl">
                        Producto: <a className="font-normal	">ChurroDog 20kg </a>
                      </li>
                      <br></br>
                      <ul className="flex flex-row space-x-4 pb-0">
                        <li className="font-normal text-sm text-[#ff141e]">
                          <a href="" className="font-normal	">
                            Eliminar
                          </a>
                        </li>
                        <li className="font-normal text-sm ">
                          <a href="/productos" className="font-normal	">
                            Seguir comprando
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>

                <div className="pedido bg-white w-full h-auto grid text-azulito items-center text-center">
                  <h1>Cantidad</h1>
                  <div className="bg-white w-auto h-auto flex gap-0 m-5  text-azulito">
                    <div className="text-azulito bg-white border-l-4 border-t-4 border-b-4 border-grisesitoFuertito w-[50%] h-full flex justify-center content-center items-center text-2xl ">
                      <button
                        onClick={() => restar()}
                        className="w-full h-full bg-white"
                      >
                        -
                      </button>
                    </div>
                    <div className="text-azulito bg-white border-y-4 border-grisesitoFuertito w-[50%] h-full  flex justify-center content-center items-center text-2xl ">
                      {numero}
                    </div>
                    <div className=" text-azulito bg-black border-r-4 border-t-4 border-b-4 border-grisesitoFuertito w-[50%] h-full flex justify-center content-center items-center text-2xl  ">
                      <button
                        onClick={() => aumentar()}
                        className="w-full h-full bg-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pedido text-azulito bg-white w-full h-auto text-lg font-bold grid justify-center items-center text-center">
                  <h1>Precio</h1>
                  $1879.47
                </div>
              </div>
              <div className="pedido bg-white w-full h-auto md:h-auto lg:h-[17vh]  border-y-4 border-grisesitoFuertito  grid md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4">
                <div className="pedido-card  bg-black w-full h-auto   col-span-2  text-azulito grid grid-cols-4">
                  <div className="pedido-foto bg-white w-full h-auto flex justify-center  items-center p-2">
                    <img
                      src={require("../assets/SACO 20 KILOS.jpg")}
                      className="img1  h-[80%] "
                      alt="churrodog perro feliz"
                    ></img>
                  </div>

                  <div className="pedido-info bg-white w-full h-auto col-span-3 ">
                    <ul className="p-5 leading-1">
                      <li className="font-bold lg:text-lg 2xl:text-2xl">
                        Producto: <a className="font-normal	">ChurroDog 20kg </a>
                      </li>
                      <br></br>
                      <ul className="flex flex-row space-x-4 pb-0">
                        <li className="font-normal text-sm text-[#ff141e]">
                          <a href="" className="font-normal	">
                            Eliminar
                          </a>
                        </li>
                        <li className="font-normal text-sm ">
                          <a href="/productos" className="font-normal	">
                            Seguir comprando
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>

                <div className="pedido bg-white w-full h-auto grid text-azulito items-center text-center">
                  <h1>Cantidad</h1>
                  <div className="bg-white w-auto h-auto flex gap-0 m-5  text-azulito">
                    <div className="text-azulito bg-white border-l-4 border-t-4 border-b-4 border-grisesitoFuertito w-[50%] h-full flex justify-center content-center items-center text-2xl ">
                      <button
                        onClick={() => restar()}
                        className="w-full h-full bg-white"
                      >
                        -
                      </button>
                    </div>
                    <div className="text-azulito bg-white border-y-4 border-grisesitoFuertito w-[50%] h-full  flex justify-center content-center items-center text-2xl ">
                      {numero}
                    </div>
                    <div className=" text-azulito bg-black border-r-4 border-t-4 border-b-4 border-grisesitoFuertito w-[50%] h-full flex justify-center content-center items-center text-2xl  ">
                      <button
                        onClick={() => aumentar()}
                        className="w-full h-full bg-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pedido text-azulito bg-white w-full h-auto text-lg font-bold grid justify-center items-center text-center">
                  <h1>Precio</h1>
                  $1879.47
                </div>
              </div>
              <div className="pedido bg-white w-full h-auto md:h-auto lg:h-[17vh]  border-y-4 border-grisesitoFuertito  grid md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4">
                <div className="pedido-card  bg-black w-full h-auto   col-span-2  text-azulito grid grid-cols-4">
                  <div className="pedido-foto bg-white w-full h-auto flex justify-center  items-center p-2">
                    <img
                      src={require("../assets/SACO 20 KILOS.jpg")}
                      className="img1  h-[80%] "
                      alt="churrodog perro feliz"
                    ></img>
                  </div>

                  <div className="pedido-info bg-white w-full h-auto col-span-3 ">
                    <ul className="p-5 leading-1">
                      <li className="font-bold lg:text-lg 2xl:text-2xl">
                        Producto: <a className="font-normal	">ChurroDog 20kg </a>
                      </li>
                      <br></br>
                      <ul className="flex flex-row space-x-4 pb-0">
                        <li className="font-normal text-sm text-[#ff141e]">
                          <a href="" className="font-normal	">
                            Eliminar
                          </a>
                        </li>
                        <li className="font-normal text-sm ">
                          <a href="/productos" className="font-normal	">
                            Seguir comprando
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>

                <div className="pedido bg-white w-full h-auto grid text-azulito items-center text-center">
                  <h1>Cantidad</h1>
                  <div className="bg-white w-auto h-auto flex gap-0 m-5  text-azulito">
                    <div className="text-azulito bg-white border-l-4 border-t-4 border-b-4 border-grisesitoFuertito w-[50%] h-full flex justify-center content-center items-center text-2xl ">
                      <button
                        onClick={() => restar()}
                        className="w-full h-full bg-white"
                      >
                        -
                      </button>
                    </div>
                    <div className="text-azulito bg-white border-y-4 border-grisesitoFuertito w-[50%] h-full  flex justify-center content-center items-center text-2xl ">
                      {numero}
                    </div>
                    <div className=" text-azulito bg-black border-r-4 border-t-4 border-b-4 border-grisesitoFuertito w-[50%] h-full flex justify-center content-center items-center text-2xl  ">
                      <button
                        onClick={() => aumentar()}
                        className="w-full h-full bg-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pedido text-azulito bg-white w-full h-auto text-lg font-bold grid justify-center items-center text-center">
                  <h1>Precio</h1>
                  $1879.47
                </div>
              </div>
              
              
              
              
            </div>
          ) : (
            <div className="pedido bg-white w-full h-[17vh] border-y-4 border-grisesitoFuertito">
              no tienes
            </div>
          )}
          
           <div className="pedido bg-white w-full h-auto  order border-y-4 border-grisesitoFuertito flex justify-end items-center">
           <h1 className=" p-5  lg:p-10 font-bold text-2xl text-azulito">Total: $1839</h1>
          </div>
          
          <div className="pedido bg-white w-full h-[15vh]  border-t-1 border-grisesitoFuertito flex justify-end items-center">
            <button
              onClick={() => restar()}
              className="bg-rojito lg:h-[5vh] lg:w-[10vw] hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-3 mx-10 my-2 md:px-10 md:mx-9 lg:py-1 lg:px-5 lg:mx-20 lg:my-0   rounded-full"
            >
              Pagar
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
