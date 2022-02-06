import React, { useEffect, useState } from "react";
import Article from '../components/_article'
import axios from 'axios'

const Blog = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    getStudents()
  }, [])

  const getStudents = async () => {
    try {
      await axios
        .get(`api/v1/articles/`)
        .then(res => {
          setArticles(res.data)
        })
        .catch(error => {
          console.log('Error: ', error)
        });
    } catch (error) {
    }
  }

  return (
    <div className="contenedor-padre bg-white w-auto h-[100vh]">
      <div className="perro-cover w-auto h-[35rem] 2xl:w-[100%] bg-white "></div>

      {
        articles.map((data) => {
          return (
            <Article key={data._id} title={data.tittle} paragraph={data.paragraph} />
          )
        })
      }

    </div>
  );
};

export default Blog;
