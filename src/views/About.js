import React from "react";
import "./css/two.css";
const About = () => {
    return (
        <div className="about">
            <div className="contenedor-general  w-auto h-auto mb-20 bg-white grid  lg:flex">
                <div className="información bg-white w-full h-auto lg:w-1/2">
                    <h2 className=" underline  decoration-rojito font-bold text-2xl p-3 px-5 md:px-10 md:mt-0 md:text-4xl lg:text-6xl lg:mt-16 2xl:text-8xl 2xl:mt-20 2xl:pl-20 text-slate-800  ">
                        ChurroDog
                    </h2>
                    <h1 className="p-3 px-5 lg:text-xl lg:mt-5 2xl:text-xl 2xl:mt-10 2xl:pl-20 text-slate-800">
                        <p className="font-bold">Misión :</p>
                        <br></br>
                        Consolidar nuestra empresa como líder en la creación de alimentos
                        naturales y orgánicos para mascotas por medio de la más alta
                        calidad, respaldados por un equipo de profesionales calificados en
                        la fabricación de alimento con alta biodisponibilidad digestiva y
                        nutritiva contribuyendo así a la salud y bienestar de los mismos.
                    </h1>
                    <h1 className="p-3 px-5 lg:text-xl  2xl:text-xl 2xl:mt-5 2xl:pl-20 text-slate-800">
                        <p className="font-bold">Visión :</p>
                        <br></br>
                        Ser una empresa de clase mundial y abarcar la mayor parte del
                        mercado ofreciendo productos de alta digestibilidad sin aditivos ni
                        conservadores generando un desarrollo integral para nuestros
                        colaboradores y su entorno social.
                    </h1>
                </div>
                <div className="información bg-white w-full h-full mt-6 lg:mt-0 lg:w-1/2 flex justify-center content-end ">
                    <img
                        src={require("../assets/perrito2.png")}
                        className="img1P self-end   "
                        alt="churrodog perro feliz"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default About