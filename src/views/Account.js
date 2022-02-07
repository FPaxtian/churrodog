import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const status = "recibido";
  return (
    <div className="bg-white ">
      <div class="grid grid-cols-1 lg:flex p-5 gap-4">
        <div class=" lg:w-[70%] h-full shadow-lg bg-white p-10 rounded-lg grid grid-cols-1">
          <div class=" lg:w-[70%] pt-5 h-[20vh]  bg-white text-azulito   text-left lg:p-10 ">
            <div className="mt-4 bg-white w-auto h-auto flex">
              <h1 className="font-bold 2xl:text-3xl">Jesús Mendoza Silva</h1>
              <Link>
                <ion-icon
                  className="text-2xl"
                  style={{ marginLeft: 15 }}
                  name="create-outline"
                ></ion-icon>
              </Link>
            </div>
            <div className="mt-4 bg-white w-auto h-auto pb-5 lg:pb-0">
              <ul className="text-sm 2xl:text-lg">
                <li>
                  <p className="lg:p-1">Número celular: +52 921 132 5408</p>
                </li>
                <li>
                  <p className="lg:p-1">
                    Correo electronico: jmendoza@quaxar.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex mt-5 ">
            <div className="w-[50%] bg-white ">
              <h1 className="lg:text-3xl 2xl:text-3xl mt-5 text-azulito underline decoration-rojito">
                Pedidos
              </h1>
            </div>
            <div className="w-[50%] h-auto bg-white flex justify-end  ">
              <button className="text-sm lg:text-2xl bg-rojito hover:bg-rojitoSubidito duration-500 text-white font-semibold py-0 px-3 mx-1 my-2 md:px-10 md:mx-9 lg:py-0 lg:px-5 lg:mx-2 lg:my-0  rounded-full">
                Cerrar sesión
              </button>
            </div>
          </div>
          <div class=" producto mt-10  lg:w-[100%] h-auto shadow-lg bg-grisesitoFuertito text-azulito text-lg  text-left p-2 lg:p-5 rounded-lg flex">
            <div className="text-sm   bg-grisesitoFuertito w-[70%] h-auto p-0">
              <ul className="p-5 leading-1">
                <li className="font-bold">
                  Producto: <a className="font-normal	">ChurroDog 20kg </a>{" "}
                </li>
                <li className="font-bold">
                  Cantidad:<a className="font-normal	">5</a>{" "}
                </li>
                <li className="font-bold">
                  Dirección de envio:{" "}
                  <a className="font-normal	">
                    Allende #1503 col.Centro Coatzacoalcos
                  </a>
                </li>
                <li className="font-bold">
                  Numero de telefono:{" "}
                  <a className="font-normal	">+52 921 132 5408</a>
                </li>
              </ul>
            </div>
            <div className="bg-transparent w-[30%] lg:flex">
              <div className="contenedor-padre bg-grisesitoFuertesito 2-full lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                <h1 className="text-center font-bold">Estatus</h1>
                <div className="text-center">
                  {status == "recibido" ? (
                    <Link>
                      <ion-icon
                        className="text-lg"
                        style={{ color: "green" }}
                        name="checkmark-circle"
                      ></ion-icon>
                      <h1 className="text-center pb-10">Recibido</h1>
                    </Link>
                  ) : status == "pendiente" ? (
                    <Link>
                      <ion-icon
                        className="text-lg"
                        style={{ color: "red" }}
                        name="alert-circle"
                      ></ion-icon>
                      <h1 className="text-center text-sm pb-10">En proceso</h1>

                    </Link>
                  ) : (
                    <Link>
                      <ion-icon
                        className="text-lg"
                        style={{ color: "#002360" }}
                        name="airplane"
                      ></ion-icon>
                      <h1 className="text-center text-sm pb-10">Enviado</h1>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* direcciones */}
        <div class=" lg:w-[30%] h-full shadow-lg bg-grisesitoFuertito text-azulito text-lg  text-left p-2 lg:p-5 rounded-lg r">
          <div className="flex mt-5 ">
            <div className="w-[50%] bg-white ">
              <h1 className=" text-2xl lg:text-3xl 2xl:text-3xl mt-5 text-azulito underline decoration-rojito p-3">
                Tus direcciones
              </h1>
            </div>
            <div className="w-[50%] h-auto bg-white flex justify-end p-8 text-3xl ">
              <Link>
                <ion-icon name="add-circle"></ion-icon>
              </Link>
            </div>
          </div>
          <div className="direcciones bg-white w-full  mt-5 p-2 text-sm rounded-lg">
            <div className="bg-transparent-full h-auto">
              <ul className="p-5 leading-1">
                <li className="font-bold">
                  Calle:{" "}
                  <a className="font-normal	"> Allende #1503 Coatzacoalcos</a>{" "}
                </li>
                <li className="font-bold">
                  Colonia:<a className="font-normal	">Benito juarez norte</a>{" "}
                </li>
                <li className="font-bold">
                  Ciudad <a className="font-normal	">Coatzacoalcos</a>
                </li>
                <li className="font-bold">
                  Codigo postal <a className="font-normal	">96400</a>
                </li>
                <li className="font-bold">
                  Numero de telefono:{" "}
                  <a className="font-normal	">+52 921 132 5408</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="direcciones bg-white w-full  mt-5 p-2 text-sm rounded-lg">
            <div className="bg-transparent-full h-auto">
              <ul className="p-5 leading-1">
                <li className="font-bold">
                  Calle:{" "}
                  <a className="font-normal	"> Allende #1503 Coatzacoalcos</a>{" "}
                </li>
                <li className="font-bold">
                  Colonia:<a className="font-normal	">Benito juarez norte</a>{" "}
                </li>
                <li className="font-bold">
                  Ciudad <a className="font-normal	">Coatzacoalcos</a>
                </li>
                <li className="font-bold">
                  Codigo postal <a className="font-normal	">96400</a>
                </li>
                <li className="font-bold">
                  Numero de telefono:{" "}
                  <a className="font-normal	">+52 921 132 5408</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
