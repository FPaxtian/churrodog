import React from 'react'
import Swal from "sweetalert2";
const Address = () => {
    const editar = () => {
    Swal.fire({
      title: "Edita una dirección",
      html: `<input type="text" id="calle" class="swal2-input" placeholder="Calle">
        <input type="text" id="colonia" class="swal2-input" placeholder="Colonia">
        <input type="text" id="numero" class="swal2-input" placeholder="Numero">
        <input type="text" id="codigo" class="swal2-input" placeholder="Codigo postal">
        <input type="text" id="referencia" class="swal2-input" placeholder="referencia">
        <input type="text" id="telefono" class="swal2-input" placeholder="telefono">
        <input type="text" id="recibe" class="swal2-input" placeholder="quien recibe">`,
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
        const recibe = Swal.getPopup().querySelector("#recibe").value;

        if (
          !calle ||
          !colonia ||
          !numero ||
          !codigo ||
          !referencia ||
          !telefono ||
          !recibe
        ) {
          Swal.showValidationMessage(`Escribe tu direccion`);
        }
        return {
          calle: calle,
          colonia: colonia,
          numero: numero,
          referencia: referencia,
          telefono: telefono,
          codigo: codigo,
          recibe: recibe
        };
      },
    }).then((result) => {
      Swal.fire(
        `
          calle: ${result.value.calle}
          colonia: ${result.value.colonia}
          numero: ${result.value.numero}
          codigo postal: ${result.value.codigo}
          referencia: ${result.value.referencia}
          telefono: ${result.value.telefono}
          recibe: ${result.value.recibe}
        `.trim()
      );
    });
  };

    return (
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
                    <li className="font-bold">
                        Referencia:
                        <a className="font-normal	"> casa azul dos pisos</a>
                    </li>
                </ul>
                <div className='flex w-full h-[5vh] gap-2 '>
                    <button onClick={()=>editar()} className='rounded-lg bg-azulito text-white text-lg w-[50%] h-full flex justify-center content-center items-center'>
                    <ion-icon name="create"></ion-icon>
                    </button>
                    <button className='rounded-lg bg-rojito text-white text-lg w-[50%] h-full flex justify-center content-center items-center'>
                    <ion-icon name="trash"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Address