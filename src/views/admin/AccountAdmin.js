import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getUserCurrent, updateUser, signOff, createAddress } from '../../api/auth'

const AccountAdmin = () => {
  const status = "recibido";

  const editarUsuario = () => {
    Swal.fire({
      title: "Edita tus datos",
      html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
        <input type="text" id="apellidos" class="swal2-input" placeholder="Apellidos">
        <input type="text" id="telefono" class="swal2-input" placeholder="Telefono">
        <input type="email" id="correo" class="swal2-input" placeholder="Correo">`,

      confirmButtonText: "Guardar",
      showCancelButton: true,
      cancelButtonText: "Cerrar",
      focusConfirm: false,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#ff141e",
      preConfirm: () => {
        const nombre = Swal.getPopup().querySelector("#nombre").value;
        const apellidos = Swal.getPopup().querySelector("#apellidos").value;
        const telefono = Swal.getPopup().querySelector("#telefono").value;
        const correo = Swal.getPopup().querySelector("#correo").correo;

        if (!nombre || !apellidos || !telefono || !correo) {
          Swal.showValidationMessage(`Escribe tus datos`);
        }
        return {
          nombre: nombre,
          apellidos: apellidos,
          telefono: telefono,
          correo: correo,
        };
      },
    }).then((result) => {
      Swal.fire(
        `
          calle: ${result.value.calle}
          colonia: ${result.value.colonia}
          numero: ${result.value.Numero}
          codigo postal: ${result.value.Codigo}
       
        `.trim()
      );
    });
  };

  const _signOff = async () => {
    await signOff({ churroAlerOff, goToHome })
  }

  const goToHome = () => {
    window.location.href = "/"
  }

  const churroAlerOff = () => {
    Swal.fire({
      icon: 'info',
      title: 'Churro vuelve pronto!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className="bg-white w-[100%] h-auto flex justify-center content-center text-azulito ">
      <div className="bg-grisesitoFuertito w-[90%] md:w-[40%] h-auto mt-20 rounded-lg">
        <div className="mt-4 auto h-auto flex p-7">
          <h1 className="font-bold 2xl:text-5xl">Jesús Mendoza Silva</h1>
          <button onClick={() => editarUsuario()}>
            <ion-icon
              className="text-2xl"
              style={{ marginLeft: 15 }}
              name="create-outline"
            ></ion-icon>
          </button>
        </div>
        <div className="mt-1 pl-7  w-auto h-auto pb-5 lg:pb-0">
          <ul className="text-sm 2xl:text-lg">
            <li>
              <p className="lg:p-1">Número celular: +52 921 132 5408</p>
            </li>
            <li>
              <p className="lg:p-1">Correo electronico: jmendoza@quaxar.com</p>
            </li>
            <li>
              <p className="lg:p-1">Cuenta: Administrador</p>
            </li>
          </ul>
        </div>
        <div className=" w-full h-[10%] mt-5 ml-5 mb-5">
          <button onClick={() => _signOff()} className="text-sm lg:text-lg bg-rojito hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-4 rounded-full">
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountAdmin;
