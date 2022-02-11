import React from 'react'

const Address = () => {

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
                </ul>
            </div>
        </div>
    )
}

export default Address