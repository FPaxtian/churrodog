import React from "react";
import Swal from "sweetalert2";

const ArticleAdmin = (props) => {
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
  const editarNota = () => {
    Swal.fire({
      title: "Edita una nota",
      html: `<input type="text" id="titulo" class="swal2-input" placeholder="Titulo">
      <textarea id="texto" style="height:auto!important" cols="23" class="swal2-input" rows="8" placeholder="Contenido"></textarea>`,

      confirmButtonText: "Guardar",
      showCancelButton: true,
      cancelButtonText: "Cerrar",
      focusConfirm: false,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#ff141e",
      preConfirm: () => {
        const titulo = Swal.getPopup().querySelector("#titulo").value;
        const texto = Swal.getPopup().querySelector("#texto").value;

        if (!titulo || !texto) {
          Swal.showValidationMessage(`Llena los campos`);
        }
        return {
          titulo: titulo,
          texto: texto,
        };
      },
    }).then((result) => {
      Swal.fire(
        `
          Titulo: ${result.value.titulo}
          texto: ${result.value.texto}
        `.trim()
      );
    });
  };
  return (
    <div>
      <hr className="salto" />
      <div className="bg-white w-[100%] md:flex">
        <div className="md:w-[80%] h-auto">
          <div className="blog-contenedor w-auto h-auto bg-white ">
            <h1 className=" px-20 py-10  text-xl lg:text-4xl 2xl:text-5xl 2xl:pl-44 text-left font-bold text-black">
              {props.title}
            </h1>
            <br></br>
            <h1 className=" pb-20 2xl:text-2xl 2xl:mt-0 px-20 2xl:px-44 text-slate-800">
              {props.paragraph}
            </h1>
          </div>
          ;
        </div>
        <div className=" md:w-[20%] h-auto">
          <div className="w-[100%] h-full grid justify-center content-center text-center ">
            <div className=" w-[100%]  text-center ">
              <a onClick={()=>editarNota()} className="text-4xl lg:text-5xl cursor-pointer px-1 text-azulito">
                {" "}
                <ion-icon name="create"></ion-icon>
              </a>
              <a
                onClick={() => deleteConfirm()}
                className="text-4xl lg:text-5xl  cursor-pointer px-1 "
              >
                {" "}
                <ion-icon style={{ color: "red" }} name="trash"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleAdmin;
