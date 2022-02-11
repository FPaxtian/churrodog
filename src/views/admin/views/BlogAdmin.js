import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleAdmin from "../components/_articleAdm";
import Swal from "sweetalert2";

const BlogAdmin = () => {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);



  const agregarNota = () => {
    Swal.fire({
      title: "Agrega una nota",
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
   
        if (!titulo || !texto ) {
          Swal.showValidationMessage(`Llena los campos`);
        }
        return {
            titulo: titulo,
            texto: texto
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

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      await axios
        .get(`api/v1/articles/`)
        .then((res) => {
          setArticles(res.data);
          setLoader(false);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } catch (error) {}
  };

  return (
    <div className="contenedor-padre bg-white w-auto h-auto">
      <div className="perro-cover w-auto h-[35rem] 2xl:w-[100%] bg-white "></div>
      {loader && (
        <div className="w-full flex justify-center items-center content-center">
          <img
            src={require("../../../assets/perroEsperando.gif")}
            alt="Funny image"
          />
        </div>
      )}
      <hr className="salto" />
      <a onClick={()=>agregarNota()} className="cursor-pointer">
        <div className="flex justify-center items-center text-center">
          <div className="bg-grisesitoFuertito w-[20%] h-auto text-4xl md:text-5xl rounded-lg">
            <ion-icon style={{ color: "gray" }} name="add-circle"></ion-icon>
          </div>
        </div>
      </a>

      {articles.map((data) => {
        return (
          <ArticleAdmin
            key={data._id}
            title={data.tittle}
            paragraph={data.paragraph}
          />
        );
      })}
    </div>
  );
};

export default BlogAdmin;
