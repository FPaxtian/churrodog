import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PedidosAdmin = () => {
  const status = "recibido";
  const cuenta = true;
  const [loader, setLoader] = useState(true);

// funcion solo para pruebas de loader
  const loaderFuncion = () => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const deleteConfirm = () => {
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
        Swal.fire("Borrado", "Se ha borrado el pedido", "success");
      }
    });
  };
  useEffect(() => {
    loaderFuncion();
  }, []);

  return (
    <div className="bg-white flex justify-center  mt-5">
      <div className=" w-[90%] lg:w-[60%] h-auto">
        <div class=" lg:w-[100%] h-full shadow-lg bg-white p-10 rounded-lg grid grid-cols-1">
          <div className="flex mt-5 ">
            <div className="w-[50%] bg-white ">
              <h1 className="lg:text-3xl 2xl:text-3xl mt-5 text-azulito underline decoration-rojito">
                Pedidos
              </h1>
            </div>

            {/* <div className="w-[50%] lg:h-[4vh] bg-white flex  justify-end  ">
          <button className="text-sm lg:text-2xl bg-rojito hover:bg-rojitoSubidito duration-500 text-white font-semibold py-0 px-3 mx-1 my-2 md:px-10 md:mx-9 lg:py-0 lg:px-5 lg:mx-2 lg:my-0  rounded-full">
            Cerrar sesión
          </button>
        </div> */}
          </div>

          <hr />
          {loader && (
            <div className="w-full flex justify-center items-center content-center">
              <img
                src={require("../../../assets/perroEsperando.gif")}
                alt="Funny image"
              />
            </div>
          )}
          <div className="contenedor-productos">
            <div class=" producto mt-10  lg:w-[100%] h-auto shadow-lg bg-grisesitoFuertito text-azulito text-lg  text-left p-2 lg:p-5 rounded-lg lg:flex">
              <div className="text-sm   bg-grisesitoFuertito w-[100%] lg:w-[60%] h-auto p-0">
                <ul className="p-5 leading-1">
                  <li className="font-bold">
                    Producto: <a className="font-normal	">ChurroDog 20kg </a>{" "}
                  </li>
                  <li className="font-bold">
                    Cantidad:<a className="font-normal	">5</a>{" "}
                  </li>
                  <li className="font-bold">
                    Nombre: <a className="font-normal	">Jesús Mendoza Silva</a>{" "}
                  </li>
                  <li className="font-bold">
                    Dirección de envio:{" "}
                    <a className="font-normal	">
                      Allende #1503 col.Centro Coatzacoalcos
                    </a>
                  </li>
                  <li className="font-bold">
                    Referencia:{" "}
                    <a className="font-normal	">
                      Casa azul abandonada en pedazos
                    </a>
                  </li>
                  <li className="font-bold">
                    Numero de telefono:{" "}
                    <a className="font-normal	">+52 921 132 5408</a>
                  </li>
                </ul>
              </div>
              <div className="bg-grisesitoFuertito w-[100%] lg:w-[40%] flex">
                <div className="contenedor-padre bg-grisesitoFuertesito w-[50%] lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                  <h1 className="text-center font-semibold">Estatus</h1>
                  <div className="text-center ">
                    <form>
                      <select className="w-[80%]">
                        <option value="proceso">En proceso</option>
                        <option value="Enviado">Enviado</option>
                        <option selected value="Aceptado">
                          Aceptado
                        </option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="contenedor-padre bg-grisesitoFuertesito w-[50%] lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                  <h1 className="text-center font-semibold">Acciones</h1>
                  <div className=" w-[100%]  text-center">
                    <a className="text-xl lg:text-2xl cursor-pointer px-1 text-azulito">
                      {" "}
                      <ion-icon name="create"></ion-icon>
                    </a>
                    <a
                      onClick={() => deleteConfirm()}
                      className="text-xl lg:text-2xl cursor-pointer px-1 "
                    >
                      {" "}
                      <ion-icon
                        style={{ color: "red" }}
                        name="trash"
                      ></ion-icon>
                    </a>
                    <a className="text-xl lg:text-2xl cursor-pointer px-1 text-azulito">
                      {" "}
                      <ion-icon name="bookmark"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class=" producto mt-10  lg:w-[100%] h-auto shadow-lg bg-grisesitoFuertito text-azulito text-lg  text-left p-2 lg:p-5 rounded-lg lg:flex">
              <div className="text-sm   bg-grisesitoFuertito w-[100%] lg:w-[60%] h-auto p-0">
                <ul className="p-5 leading-1">
                  <li className="font-bold">
                    Producto: <a className="font-normal	">ChurroDog 20kg </a>{" "}
                  </li>
                  <li className="font-bold">
                    Cantidad:<a className="font-normal	">5</a>{" "}
                  </li>
                  <li className="font-bold">
                    Nombre: <a className="font-normal	">Jesús Mendoza Silva</a>{" "}
                  </li>
                  <li className="font-bold">
                    Dirección de envio:{" "}
                    <a className="font-normal	">
                      Allende #1503 col.Centro Coatzacoalcos
                    </a>
                  </li>
                  <li className="font-bold">
                    Referencia:{" "}
                    <a className="font-normal	">
                      Casa azul abandonada en pedazos
                    </a>
                  </li>
                  <li className="font-bold">
                    Numero de telefono:{" "}
                    <a className="font-normal	">+52 921 132 5408</a>
                  </li>
                </ul>
              </div>
              <div className="bg-grisesitoFuertito w-[100%] lg:w-[40%] flex">
                <div className="contenedor-padre bg-grisesitoFuertesito w-[50%] lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                  <h1 className="text-center font-semibold">Estatus</h1>
                  <div className="text-center ">
                    <form>
                      <select className="w-[80%]">
                        <option value="proceso">En proceso</option>
                        <option value="Enviado">Enviado</option>
                        <option selected value="Aceptado">
                          Aceptado
                        </option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="contenedor-padre bg-grisesitoFuertesito w-[50%] lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                  <h1 className="text-center font-semibold">Acciones</h1>
                  <div className=" w-[100%]  text-center">
                    <a className="text-xl lg:text-2xl cursor-pointer px-1 text-azulito">
                      {" "}
                      <ion-icon name="create"></ion-icon>
                    </a>
                    <a
                      onClick={() => deleteConfirm()}
                      className="text-xl lg:text-2xl cursor-pointer px-1 "
                    >
                      {" "}
                      <ion-icon
                        style={{ color: "red" }}
                        name="trash"
                      ></ion-icon>
                    </a>
                    <a className="text-xl lg:text-2xl cursor-pointer px-1 text-azulito">
                      {" "}
                      <ion-icon name="bookmark"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class=" producto mt-10  lg:w-[100%] h-auto shadow-lg bg-grisesitoFuertito text-azulito text-lg  text-left p-2 lg:p-5 rounded-lg lg:flex">
              <div className="text-sm   bg-grisesitoFuertito w-[100%] lg:w-[60%] h-auto p-0">
                <ul className="p-5 leading-1">
                  <li className="font-bold">
                    Producto: <a className="font-normal	">ChurroDog 20kg </a>{" "}
                  </li>
                  <li className="font-bold">
                    Cantidad:<a className="font-normal	">5</a>{" "}
                  </li>
                  <li className="font-bold">
                    Nombre: <a className="font-normal	">Jesús Mendoza Silva</a>{" "}
                  </li>
                  <li className="font-bold">
                    Dirección de envio:{" "}
                    <a className="font-normal	">
                      Allende #1503 col.Centro Coatzacoalcos
                    </a>
                  </li>
                  <li className="font-bold">
                    Referencia:{" "}
                    <a className="font-normal	">
                      Casa azul abandonada en pedazos
                    </a>
                  </li>
                  <li className="font-bold">
                    Numero de telefono:{" "}
                    <a className="font-normal	">+52 921 132 5408</a>
                  </li>
                </ul>
              </div>
              <div className="bg-grisesitoFuertito w-[100%] lg:w-[40%] flex">
                <div className="contenedor-padre bg-grisesitoFuertesito w-[50%] lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                  <h1 className="text-center font-semibold">Estatus</h1>
                  <div className="text-center ">
                    <form>
                      <select className="w-[80%]">
                        <option value="proceso">En proceso</option>
                        <option value="Enviado">Enviado</option>
                        <option selected value="Aceptado">
                          Aceptado
                        </option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="contenedor-padre bg-grisesitoFuertesito w-[50%] lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                  <h1 className="text-center font-semibold">Acciones</h1>
                  <div className=" w-[100%]  text-center">
                    <a className="text-xl lg:text-2xl cursor-pointer px-1 text-azulito">
                      {" "}
                      <ion-icon name="create"></ion-icon>
                    </a>
                    <a
                      onClick={() => deleteConfirm()}
                      className="text-xl lg:text-2xl cursor-pointer px-1 "
                    >
                      {" "}
                      <ion-icon
                        style={{ color: "red" }}
                        name="trash"
                      ></ion-icon>
                    </a>
                    <a className="text-xl lg:text-2xl cursor-pointer px-1 text-azulito">
                      {" "}
                      <ion-icon name="bookmark"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class=" producto mt-10  lg:w-[100%] h-auto shadow-lg bg-grisesitoFuertito text-azulito text-lg  text-left p-2 lg:p-5 rounded-lg lg:flex">
              <div className="text-sm   bg-grisesitoFuertito w-[100%] lg:w-[60%] h-auto p-0">
                <ul className="p-5 leading-1">
                  <li className="font-bold">
                    Producto: <a className="font-normal	">ChurroDog 20kg </a>{" "}
                  </li>
                  <li className="font-bold">
                    Cantidad:<a className="font-normal	">5</a>{" "}
                  </li>
                  <li className="font-bold">
                    Nombre: <a className="font-normal	">Jesús Mendoza Silva</a>{" "}
                  </li>
                  <li className="font-bold">
                    Dirección de envio:{" "}
                    <a className="font-normal	">
                      Allende #1503 col.Centro Coatzacoalcos
                    </a>
                  </li>
                  <li className="font-bold">
                    Referencia:{" "}
                    <a className="font-normal	">
                      Casa azul abandonada en pedazos
                    </a>
                  </li>
                  <li className="font-bold">
                    Numero de telefono:{" "}
                    <a className="font-normal	">+52 921 132 5408</a>
                  </li>
                </ul>
              </div>
              <div className="bg-grisesitoFuertito w-[100%] lg:w-[40%] flex">
                <div className="contenedor-padre bg-grisesitoFuertesito w-[50%] lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                  <h1 className="text-center font-semibold">Estatus</h1>
                  <div className="text-center ">
                    <form>
                      <select className="w-[90%]">
                        <option value="proceso">En proceso</option>
                        <option value="Enviado">Enviado</option>
                        <option selected value="Aceptado">
                          Aceptado
                        </option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="contenedor-padre bg-grisesitoFuertesito w-[50%] lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                  <h1 className="text-center font-semibold">Acciones</h1>
                  <div className=" w-[100%]  text-center">
                    <a className="text-xl lg:text-2xl cursor-pointer px-1 text-azulito">
                      {" "}
                      <ion-icon name="create"></ion-icon>
                    </a>
                    <a
                      onClick={() => deleteConfirm()}
                      className="text-xl lg:text-2xl cursor-pointer px-1 "
                    >
                      {" "}
                      <ion-icon
                        style={{ color: "red" }}
                        name="trash"
                      ></ion-icon>
                    </a>
                    <a className="text-xl lg:text-2xl cursor-pointer px-1 text-azulito">
                      {" "}
                      <ion-icon name="bookmark"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosAdmin;
