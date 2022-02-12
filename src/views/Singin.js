import "./css/one.css";

const Singin = () => {

  const _sinGin = async () => {

    alert("hola")
  }
  return (
    <div className="one  w-full h-auto flex ">
      <div className="bg-white md:w-1/2 h-full hidden lg:block text-left p-20">
        <h1 className=" ml-[20%] font-bold text-azulito lg:text-4xl 2xl:text-6xl ">
          Hola humano!
        </h1>
        <img
          src={require("../assets/beagle.png")}
          className="lg:w-[70%] 2xl:w-[50%] ml-[20%] "
          alt="churrodog perro feliz"
        ></img>
      </div>
      <div className="bg-white w-screen lg:w-1/2 h-full  ">
        <div className=" w-full h-full flex  justify-center items-center lg:inline ">
          <div className="lg:m-20 lg:mt-1   w-[90%] lg:w-[60%] 2xl:w-[50%] h-[80%] p-10   ">
            <h1 className="text-4xl font-semibold md:py-10 ">Sé un churro amigo</h1>
            <form className="mt-5 lg:mt-0">
              <label>
                <input
                  placeholder="Nombre completo"
                  type="text"
                  name="nombre"
                  className="apearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded px-4 py-3 mb-3 lg:py-4 2xl:py-6 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </label>
              <label>
                <input
                  placeholder="Telefono"
                  type="text"
                  name="telefono"
                  className="apearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded px-4 py-3 mb-3 lg:py-4 2xl:py-6 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </label>
              <label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  className="apearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded px-4 py-3 mb-3 lg:py-4 2xl:py-6 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </label>
              <label>
                <input
                  placeholder="Contraseña"
                  type="password"
                  name="password"
                  className="apearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded px-4 py-3 mb-3 lg:py-4 2xl:py-6 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </label>
              <input
                onClick={() => { _sinGin() }}
                type="button"
                value="Registrate"
                className=" block w-full lg:w-full bg-azulito text-white rounded px-4 py-3 lg:py-4 2xl:lg:py-6 lg:px-4 lg:mb-3 lg:mt-10 cursor-pointer"
              />

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Singin;
