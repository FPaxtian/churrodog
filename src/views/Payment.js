import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTotalCartAPi } from "../api/cart";
import { Elements, CardElement, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51KSAXbFEmDqbbZ7hFFml1LrgnwQtRByQMH58rbVWkoi4K7xDjYXwdKCRtR75YIVRENAZ75fnNa8P0czF1qldqiyu001yhuf4t8');

const Payment = () => {

  const [tarjeta, setTarjeta] = useState(true);
  const [total, setTotal] = useState([])

  useEffect(() => {
    getTotal()
  }, [])
  const getTotal = async () => {
    const totalApi = await getTotalCartAPi()
    setTotal(totalApi)

  }

  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}',
  // };


  const CheckoutForm = () => {

    const handleSubmit = e => {
      e.preventDefault(); //esto previene que el form se mande.
      console.log('Form was submitted');
    };

    return <form onSubmit={handleSubmit}>
      <CardElement className="mb-10 bg-white p-6 w-full rounded-xl" />
      <button type="submit" className="bg-rojito h-auto w-full py-2 hover:bg-rojitoSubidito duration-500 text-white font-medium  rounded-full">
        Pagar
      </button>
    </form>
  }

  return (
    <div className="contenedor w-full h-auto bg-grisesitoFuertito lg:flex lg:justify-center lg:content-center lg:p-10">
      <div className=" w-full h-full lg:w-[70%] lg:flex  ">
        <div className="w-[100%] h-full lg:w-[70%] lg:h-full  ">
          <div className="contenedor-hijo-titulo w-full lg:w-[100%] h-auto bg-white ">
            <h1 className=" text-2xl lg:text-3xl 2xl:text-3xl pt-5 font-bold text-center p-3">
              Metodo de pago
            </h1>
            <div className="p-5 md:p-10 md:px-28 lg:px-10">

              <a className=" " >
                <div className="direccion bg-grisesitoFuertito h-full items-center my-2 rounded-xl p-5">
                  <ul className="text-azulito py-10">
                    <li>
                      <h1 className="text-2xl font-bold mb-10">
                        Pago con tarjeta <ion-icon style={{ fontSize: "25px" }} name="card-outline"></ion-icon>
                      </h1>
                      <h1
                        className={` ${tarjeta ? "text-2xl " : " hidden text-sm italic"
                          }`}
                      >
                        <Elements stripe={stripePromise} >
                          <CheckoutForm />
                        </Elements>
                      </h1>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-grisesitoFuertito w-[100%] h-auto lg:w-[30%] lg:h-[70vh]  ">
          <div className="productos-total p-10">
            <h1 className="font-bold text-xl mb-3">Total a pagar:</h1>
            <hr></hr>
            <div className="flex">
              <h1 className=" font-medium text-right">{'$'}{total}</h1>
            </div>
          </div>
          <div className="pedido bg-transparent w-full h-[15vh]  border-t-1 border-grisesitoFuertito flex justify-center ">
            {/* <Link to={"/payment-method"}>
              
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
