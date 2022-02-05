import React from "react";
import Article from '../components/_article'
const Blog = () => {
  return (
    <div className="contenedor-padre bg-white w-auto h-[100vh]">
      <div className="perro-cover w-auto h-[35rem] 2xl:w-[100%] bg-white "></div>

      <Article title="Articulo 1" paragraph="Parrafo uno" />
      <Article />
      <Article />

    </div>
  );
};

export default Blog;
