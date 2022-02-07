import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Direction = () => {
  const direccion = () => {
    Swal.fire({
      title: "Agrega una dirección",
      html: `<input type="text" id="calle" class="swal2-input" placeholder="Calle">
        <input type="text" id="colonia" class="swal2-input" placeholder="Colonia">
        <input type="text" id="numero" class="swal2-input" placeholder="Numero">
        <input type="text" id="codigo" class="swal2-input" placeholder="Codigo postal">
        <input type="text" id="referencia" class="swal2-input" placeholder="referencia">
        <input type="text" id="telefono" class="swal2-input" placeholder="telefono">`,
      confirmButtonText: "Guardar",
      showCancelButton: true,
      cancelButtonText: "Cerrar",
      focusConfirm: false,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#ff141e",
      preConfirm: () => {
        const calle = Swal.getPopup().querySelector("#calle").value;
        const colonia = Swal.getPopup().querySelector("#colonia").value;
        const numero = Swal.getPopup().querySelector("#numero").value;
        const codigo = Swal.getPopup().querySelector("#codigo").value;
        const referencia = Swal.getPopup().querySelector("#referencia").value;
        const telefono = Swal.getPopup().querySelector("#telefono").value;

        if (
          !calle ||
          !colonia ||
          !numero ||
          !codigo ||
          !referencia ||
          !telefono
        ) {
          Swal.showValidationMessage(`Escribe tu direccion`);
        }
        return {
          calle: calle,
          colonia: colonia,
          numero: numero,
          referencia: referencia,
          telefono: telefono,
        };
      },
    }).then((result) => {
      Swal.fire(
        `
          calle: ${result.value.calle}
          colonia: ${result.value.colonia}
          numero: ${result.value.Numero}
          codigo postal: ${result.value.Codigo}
          referencia: ${result.value.referencia}
          telefono: ${result.value.telefono}
        `.trim()
      );
    });
  };

  const direcciones = true;
  return (
    <div className="contenedor w-full h-auto bg-grisesitoFuertito lg:flex lg:justify-center lg:content-center lg:p-10">
      <div className=" w-full h-full lg:w-[70%] lg:flex  ">
        <div className="w-[100%] h-full lg:w-[70%] lg:h-full  ">
          <div className="contenedor-hijo-titulo w-full lg:w-[100%] h-auto bg-white ">
            <h1 className=" text-2xl lg:text-3xl 2xl:text-3xl pt-5 text-azulito underline decoration-rojito p-3">
              Mis direcciones
            </h1>
            {direcciones ? (
              <div className="p-5 md:p-10 md:px-28 lg:px-10">
                <div className="direccion bg-grisesitoFuertito h-full flex items-center justify-center content-center my-2 rounded-xl">
                  <a onClick={() => direccion()} className=" cursor-pointer" >
                    {" "}
                    <ion-icon
                      style={{ fontSize: "3rem", color: "gray" ,padding:"10px"}}
                      name="add-circle-outline"
                    ></ion-icon>
                  </a>
                </div>
                <div className="direccion bg-grisesitoFuertito h-full flex items-center my-2 rounded-xl">
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                    className="h-[3vh] w-[10%]"
                  />

                  <ul className="text-azulito py-10">
                    <li>
                      <h1 className="text-2xl font-bold">Aquiles Serdán </h1>
                    </li>
                    <li>
                      <h1>#1019</h1>
                    </li>
                    <li>
                      <h1>Benito Juarez Norte</h1>
                    </li>
                    <li>
                      <h1>Coatzacoalcos,Ver</h1>
                    </li>
                    <li>
                      <h1> Casa color azul con portón verde</h1>
                    </li>
                    <li>
                      <h1> +52 921 132 5408 </h1>
                    </li>
                  </ul>
                </div>
                <div className="direccion bg-grisesitoFuertito h-full flex items-center my-2 rounded-xl">
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                    className="h-[3vh] w-[10%]"
                  />

                  <ul className="text-azulito py-10">
                    <li>
                      <h1 className="text-2xl font-bold">Aquiles Serdán </h1>
                    </li>
                    <li>
                      <h1>#1019</h1>
                    </li>
                    <li>
                      <h1>Benito Juarez Norte</h1>
                    </li>
                    <li>
                      <h1>Coatzacoalcos,Ver</h1>
                    </li>
                    <li>
                      <h1> Casa color azul con portón verde</h1>
                    </li>
                    <li>
                      <h1> +52 921 132 5408 </h1>
                    </li>
                  </ul>
                </div>
                <div className="direccion bg-grisesitoFuertito h-full flex items-center my-2 rounded-xl">
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                    className="h-[3vh] w-[10%]"
                  />

                  <ul className="text-azulito py-10">
                    <li>
                      <h1 className="text-2xl font-bold">Aquiles Serdán </h1>
                    </li>
                    <li>
                      <h1>#1019</h1>
                    </li>
                    <li>
                      <h1>Benito Juarez Norte</h1>
                    </li>
                    <li>
                      <h1>Coatzacoalcos,Ver</h1>
                    </li>
                    <li>
                      <h1> Casa color azul con portón verde</h1>
                    </li>
                    <li>
                      <h1> +52 921 132 5408 </h1>
                    </li>
                  </ul>
                </div>
                <div className="direccion bg-grisesitoFuertito h-full flex items-center my-2 rounded-xl">
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                    className="h-[3vh] w-[10%]"
                  />

                  <ul className="text-azulito py-10">
                    <li>
                      <h1 className="text-2xl font-bold">Aquiles Serdán </h1>
                    </li>
                    <li>
                      <h1>#1019</h1>
                    </li>
                    <li>
                      <h1>Benito Juarez Norte</h1>
                    </li>
                    <li>
                      <h1>Coatzacoalcos,Ver</h1>
                    </li>
                    <li>
                      <h1> Casa color azul con portón verde</h1>
                    </li>
                    <li>
                      <h1> +52 921 132 5408 </h1>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <div className="pedido flex justify-center items-center bg-white w-full h-[17vh] border-t-4 border-grisesitoFuertito text-center text-2xl">
                  <a onClick={() => direccion()} className=" cursor-pointer">
                    <h1 className="p-5">
                      Parece que aún no tienes direcciones, agrega una.
                    </h1>
                    <ion-icon
                      style={{ fontSize: "3rem", color: "gray" }}
                      name="add-circle-outline"
                    ></ion-icon>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-grisesitoFuertito w-[100%] h-auto lg:w-[30%] lg:h-[70vh]  ">
          <div className="productos-total p-10">
            <h1 className="font-bold text-xl">Resumen de la compra</h1>
            <hr></hr>
            <h1 className="py-5 font-medium">Productos :(2)</h1>
            <div className="flex">
              <h1 className=" font-medium">Total :</h1>
              <h1 className="text-right ">$1293</h1>
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

export default Direction;
