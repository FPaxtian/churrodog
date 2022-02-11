import React, { useEffect } from "react";
import "./css/one.css";
import FourthSection from "../components/_fourth_section";
import ThirdSection from "../components/_third_section";
import SecondSection from "../components/_second_section";
import FirstSection from "../components/_first_section";
import Swal from "sweetalert2";
const Home = () => {
    const alerta = () => {
        // Swal.fire({
        //   title: "<strong><u>¿Vives cerca de coatzacoalcos?</u></strong>",
        //   icon: "info",
        //   showCloseButton: true,

        //   focusConfirm: false,
        //   confirmButtonColor: "#002360",
        //   cancelButtonColor: "#ff141e",
        //   confirmButtonText: '<a  href="/productos"> Si</a> ',
        // });
    };

    useEffect(() => {
        alerta();
    }, []);

    return (
        <div className="one ">
            {/* first section */}
            <FirstSection />

            {/* second section */}
            <hr className="salto" />
            <SecondSection />

            {/* third section */}
            <hr className="salto" />
            <ThirdSection />

            {/* fourth section */}
            {/* <hr className="salto" /> */}
            <FourthSection />
        </div>
    );
};
export default Home;
