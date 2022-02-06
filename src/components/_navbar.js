import React,{ useState } from 'react'
import {
    Link
} from "react-router-dom"

const Navbar = () => {
    let [open,setOpen] = useState(false)
    return (
        <div className="App">
          <div className=" body-font border-b border-gray-200 py-3 md:px-10 px-7">
            <div className="flex sm:justify-center ">
              <img
                    src={require("../assets/CHURRO CIRCULO PNG.png")}
                className="w-32"
                alt='churro dog logo'
              ></img>
            </div>
            <div onClick={()=>{setOpen(!open)}} className="text-3x1 absolute z-[2] right-8 top-8 cursor-pointer md:hidden">
            <ion-icon style={{fontSize:35}} name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className={`md:justify-center md:space-x-16 sm:flex  justify-items-start absolute md:static bg-white pt-8 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all duration-500 ease-in ${open ? 'top-0':'top-[-100%]'}`} >
            {[
                ["Inicio", "/"],
                ["Nosotros", "/sobre-nosotros"],
                ["Blog", "/blog"],
                ["Contacto", "/contacto"],
                ["Tienda en linea", "/productos"],
                [<ion-icon style={{fontSize:35}} name="cart-outline"></ion-icon>, "/dashboard-cliente"],
                [<ion-icon style={{fontSize:35}} name="person-circle-outline"></ion-icon>, "/cuenta"],
               
              ].map(([title, url]) => (
                <li
                  className="px-3 py-2 text-lg text-azulito font-medium hover:text-rojito"
                ><Link onClick={()=>setOpen(false)} to={url}>{title}</Link>
                </li>
              ))}
    
            </ul>
           
          </div>
        </div>
      );
    }


export default Navbar