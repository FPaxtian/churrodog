import React from "react";
import {
  Link
} from "react-router-dom"
import "./css/one.css";
const Home = () => {
  return (
    <div className="one ">
      {/* primera sección de index */}
      <div className=" bg-white my-0">
        <div className=" h-full">
          <div className="md:flex h-full items-stretch border border-grisesito">
            <div className=" md:block md:w-1/2 h-1/2 bg-white p-10 lg:h-full lg:flex flex items-center justify-center">
              <img
                src={require("../assets/pitbull.png")}
                className="img1 "
                alt="churrodog perro feliz"
              ></img>
            </div>
            <div className=" md:block md:w-1/2  bg-white p-10 lg:h-full lg:flex flex items-center justify-center">
              <div>
                <h2 className=" text-2xl px-3 md:px-10 md:mt-0 md:text-2xl lg:text-4xl lg:mt-16 2xl:text-6xl 2xl:mt-20 text-slate-800  ">
                  <a className="underline  decoration-rojito font-bold">
                    ChurroDog
                  </a>{" "}
                  es un alimento con causa, cada compra que tú haces se refleja
                  en alimento para un perrito en situación de refugio.
                </h2>
                <div class="my-12">
                  <Link to="/productos" className="bg-rojito hover:bg-rojitoSubidito text-white font-semibold py-2 px-10 mx-2 my-5 md:px-10 md:mx-9 lg:py-4 lg:px-20 lg:mx-9 lg:my-10   rounded-full">
                    Comprar ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* segunda sección de index */}
      <hr className="salto" />
      <div className="bandera  my-0 md:h-auto h-auto p-14 lg:h-auto flex content-center justify-center">
        <div class="md:flex md:space-x-9 space-y-9  lg:space-x-9 lg:space-y-0 content-center justify-center">
          <div className="shadow-2xl font-medium shadow-black rounded-xl bg-white p-10  w-72 h-auto flex items-center justify-center lg:w-2/6">
            <p className="lg:text-xl">
              La mayoría de alimentos comerciales agregan un gran cantidad de
              vegetales a su fórmula convirtiéndolos en una dieta para animales
              omnívoros que a la larga pueden perjudicar la salud de tu lomito,
              es por esto que ChurroDog vuelve a lo natural agregando más carne
              que ningún otro alimento existente en el mercado
              <a class="underline decoration-rojito font-bold">
                {" "}
                80% proteína y 20% carbohidratos (arroz y maíz).
              </a>{" "}

            </p>
          </div>
          <div className=" shadow-2xl font-medium shadow-black rounded-xl bg-white p-10  w-72 h-auto flex items-center justify-center lg:w-2/6">
            <p className="lg:text-xl">
              Con ChurroDog{" "}
              <a class="underline decoration-rojito font-bold">
                {" "}
                ayudarás a que tu peludo fortalezca sus huesos, músculos y
                cartílagos
              </a>{" "}
              promoviendo así un nivel óptimo de energía y vitalidad,
              fortalecerá su pelaje haciéndolo mas brilloso y por su alta
              digestibilidad ayuda a que el perro produzca menos cantidad de
              excremento con heces más firmes, sólidas, bien formadas, en poca
              cantidad y con baja frecuencia.
            </p>
          </div>
        </div>
      </div>

      {/* tercera sección de index */}
      <hr className="salto" />
      <div className="two bg-white my-0 md:h-[60vh] h-[80vh] lg:h-[90vh]">
        <div className="card shadow-2xl shadow-black bg-white absolute ml-16 mt-36 h-2/5 w-3/5 md:w-2/4 lg:w-card1 lg:h-3/4 lg:mt-16 lg:ml-44 rounded-xl lg:absolute "></div>
      </div>
    </div>
  );
};

export default Home;
