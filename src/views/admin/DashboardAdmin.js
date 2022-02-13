import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardAdmin = () => {
  const [loader, setLoader] = useState(true);

  // funcion solo para pruebas de loader
  const loaderFuncion = () => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  useEffect(() => {
    loaderFuncion();
  }, []);

  return (
    <div className="one h-auto mb-20">
      {loader && (
        <div className="w-full flex justify-center items-center content-center">
          <img
            src={require("../../assets/perroEsperando.gif")}
            alt="Funny image"
          />
        </div>
      )}
      <div className=" w-full h-[50vh] mb-10 flex justify-center ">
        <img
          className="h-auto bg-cover"
          src="https://screenshots.codesandbox.io/2xr6wqwrnr.png"
          alt="new"
        />
      </div>
      <div className=" w-full h-[60vh] lg:h-[30vh] grid grid-cols-auto lg:grid-cols-3 ">
        <div className=" ">
          <Link to={"/blogAdmin"}>
            <div className="bg-[#F9F9F9] text-azulito text-2xl md:text-3xl  2xl:text-4xl hover:bg-azulito hover:text-white border-2 shadow-lg transition ease-in-out delay-75 animate-fade-in-down w-[90%] h-[20vh] md:h-[90%] m-auto  mt-1 lg:mt-5 rounded-lg text-center">
              <div className="grid justify-center items-center  mt-[13%]  md:mt-[10%] lg:pt-20 lg:mt-0 ">
                <ion-icon name="newspaper"></ion-icon>
              </div>
              <h1>Edita tu Blog</h1>
            </div>
          </Link>
        </div>
        <div className=" ">
          <Link to={"/productsAdmin"}>
            <div className="bg-[#F9F9F9] text-azulito text-2xl md:text-3xl  2xl:text-4xl hover:bg-azulito hover:text-white border-2 shadow-lg transition ease-in-out delay-75 animate-fade-in-down w-[90%] h-[20vh] md:h-[90%] m-auto  mt-1 lg:mt-5 rounded-lg text-center">
              <div className="grid justify-center items-center mt-[13%] md:mt-[10%] lg:pt-20 lg:mt-0">
                <ion-icon name="bag-handle"></ion-icon>
              </div>
              <h1>Edita tus productos</h1>
            </div>
          </Link>
        </div>
        <div className=" ">
          <Link to={"/pedidosAdmin"}>
            <div className="bg-[#F9F9F9] text-azulito text-2xl md:text-3xl  2xl:text-4xl hover:bg-azulito hover:text-white border-2 shadow-lg transition ease-in-out delay-75 animate-fade-in-down w-[90%] h-[20vh] md:h-[90%] m-auto  mt-1 lg:mt-5 rounded-lg text-center">
              <div className="grid justify-center items-center mt-[13%]  md:mt-[10%] lg:pt-20 lg:mt-0 ">
                <ion-icon name="file-tray"></ion-icon>
              </div>
              <h1>Administra tus pedidos</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DashboardAdmin;
