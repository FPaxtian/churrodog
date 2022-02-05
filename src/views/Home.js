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
                </a>
            </p>
          </div>
          <div className=" shadow-2xl font-medium shadow-black rounded-xl bg-white p-10  w-72 h-auto grid content-center items-center justify-center lg:w-2/6">
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

      <div className="informacion lg:flex w-full lg:h-[80vh] xl:h-[80vh] bg-slate-900  ">
        <div className=" w-screen lg:w-3/4 h-full xl:p-20 bg-white flex content-center items-center justify-center">
          <img
            src={require("../assets/SACO 20 KILOS.jpg")}
            className="imgProducto xl:h-auto lg:w-8/12 my-10  h-96 shadow-2xl shadow-[rgb(176,176,176)] rounded-lg "
            alt="churrodog perro feliz"
          ></img>
        </div>
        <div className="w-full h-full bg-white flex content-center items-center p-10 justify-center">
          <div className="  shadow-lg  lg:w-[80%] p-10 h-auto rounded-xl border border-rojito">
            <h1 className="lg:text-2xl text-left italic">
              No te has preguntado
            </h1>
            <br></br>
            <h1 className="text-xl lg:text-4xl text-left font-bold">
              ¿Por qué en forma de churro?
            </h1>
            <br></br>
            <p className="text-left lg:text-2xl">
              La forma específica de churrito, tiene como objetivo principal
              compactar la proteína (harina de carne) con el arroz cocido en una
              mezcla homogénea que permita mezclar los componentes para que las
              mascotas en cada bocado consuman la cantidad ideal de nutrientes
              necesarios para su desenvolvimiento en su vida diaria.
            </p>
          </div>
        </div>
      </div>

      {/* cuarta  sección de index */}
      <hr className="salto" />
      <div className="contenedor ">
        <div className="w-full h-[auto] bg-white mx-auto">
          <div className="p-10">
            <h1 className="text-xl lg:text-4xl 2xl:text-5xl text-left font-bold text-black">
              Nuestos productos
              <a className="underline decoration-rojito">
                {" "}
                mejores calificados
              </a>
            </h1>
          </div>
          <div class="container mx-auto">
            <div className="contenedor-padre w-full h-auto grid grid-cols-2 lg:grid-cols-4 ">
              <div className=" contenedor-hijo relative shadow-2xl shadow-[rgb(176,176,176)] mx-3 my-3 lg:mx-10 lg:my-10 rounded-lg  w-[90%] h-[auto]  lg:w-[75%] xl:h-[45vh]  bg-white">
                <div className=" lg:transform  lg:transition lg:duration-500 lg:hover:scale-110">
                  <img
                    src={require("../assets/SACO 20 KILOS.jpg")}
                    className="imgProducto xl:h-auto lg:w-auto my-0  h-auto  rounded-lg  "
                    alt="churrodog perro feliz"
                  ></img>
                </div>

                <div class="flex justify-between items-center w-full absolute bottom-0 text-white 2xl:text-xl text-sm lg:p-4 font-bold bg-white  rounded-lg">
                <button className="bg-rojito hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-3 mx-1 my-2 md:px-10 md:mx-9 lg:py-1 lg:px-5 lg:mx-2 lg:my-0   rounded-full">
                    Ver producto
                  </button>
                  <button className="bg-white text-azulito hover:text-rojitoSubidito duration-500 font-semibold  mx-3 my-2 md:px-0 md:mx-10 lg:py-0 lg:px-5 lg:mx-0 lg:my-0   rounded-full">
                    <ion-icon style={{ fontSize: 25 }} name="cart"></ion-icon>
                  </button>
                </div>
              </div>
              <div className=" contenedor-hijo relative shadow-2xl shadow-[rgb(176,176,176)] mx-3 my-3 lg:mx-10 lg:my-10 rounded-lg  w-[90%] h-[auto]  lg:w-[75%] xl:h-[45vh]  bg-white">
                <div className=" lg:transform  lg:transition lg:duration-500 lg:hover:scale-110">
                  <img
                    src={require("../assets/SACO 20 KILOS.jpg")}
                    className="imgProducto xl:h-auto lg:w-auto my-0  h-auto  rounded-lg  "
                    alt="churrodog perro feliz"
                  ></img>
                </div>

                <div class="flex justify-between items-center w-full absolute bottom-0 text-white 2xl:text-xl text-sm lg:p-4 font-bold bg-white  rounded-lg">
                <button className="bg-rojito hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-3 mx-1 my-2 md:px-10 md:mx-9 lg:py-1 lg:px-5 lg:mx-2 lg:my-0   rounded-full">
                    Ver producto
                  </button>
                  <button className="bg-white text-azulito hover:text-rojitoSubidito duration-500 font-semibold  mx-3 my-2 md:px-0 md:mx-10 lg:py-0 lg:px-5 lg:mx-0 lg:my-0   rounded-full">
                    <ion-icon style={{ fontSize: 25 }} name="cart"></ion-icon>
                  </button>
                </div>
              </div>
              <div className=" contenedor-hijo relative shadow-2xl shadow-[rgb(176,176,176)] mx-3 my-3 lg:mx-10 lg:my-10 rounded-lg  w-[90%] h-[auto]  lg:w-[75%] xl:h-[45vh]  bg-white">
                <div className=" lg:transform  lg:transition lg:duration-500 lg:hover:scale-110">
                  <img
                    src={require("../assets/SACO 20 KILOS.jpg")}
                    className="imgProducto xl:h-auto lg:w-auto my-0  h-auto  rounded-lg  "
                    alt="churrodog perro feliz"
                  ></img>
                </div>

                <div class="flex justify-between items-center w-full absolute bottom-0 text-white  2xl:text-xl text-sm lg:p-4 font-bold bg-white  rounded-lg">
                <button className="bg-rojito hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-3 mx-1 my-2 md:px-10 md:mx-9 lg:py-1 lg:px-5 lg:mx-2 lg:my-0   rounded-full">
                    Ver producto
                  </button>
                  <button className="bg-white text-azulito hover:text-rojitoSubidito duration-500 font-semibold  mx-3 my-2 md:px-0 md:mx-10 lg:py-0 lg:px-5 lg:mx-0 lg:my-0   rounded-full">
                    <ion-icon style={{ fontSize: 25 }} name="cart"></ion-icon>
                  </button>
                </div>
              </div>
              <div className=" contenedor-hijo relative shadow-2xl shadow-[rgb(176,176,176)] mx-3 my-3 lg:mx-10 lg:my-10 rounded-lg  w-[90%] h-[auto]  lg:w-[75%] xl:h-[45vh]  bg-white">
                <div className=" lg:transform  lg:transition lg:duration-500 lg:hover:scale-110">
                  <img
                    src={require("../assets/SACO 20 KILOS.jpg")}
                    className="imgProducto xl:h-auto lg:w-auto my-0  h-auto  rounded-lg  "
                    alt="churrodog perro feliz"
                  ></img>
                </div>

                <div class="flex justify-between items-center w-full absolute bottom-0 text-white 2xl:text-xl text-sm lg:p-4 font-bold bg-white  rounded-lg">
                <button className="bg-rojito hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-3 mx-1 my-2 md:px-10 md:mx-9 lg:py-1 lg:px-5 lg:mx-2 lg:my-0   rounded-full">
                    Ver producto
                  </button>
                  <button className="bg-white text-azulito hover:text-rojitoSubidito duration-500 font-semibold  mx-3 my-2 md:px-0 md:mx-10 lg:py-0 lg:px-5 lg:mx-0 lg:my-0   rounded-full">
                    <ion-icon style={{ fontSize: 25 }} name="cart"></ion-icon>
                  </button>
                </div>
              </div>
              
          
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};
export default Home;
