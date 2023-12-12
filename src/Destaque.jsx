import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; 

const Destaque = () => {
  const [listaVideos, setListaVideos] = useState([]);

  useEffect(() => {
    // Obtendo a lista do armazenamento local
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    setListaVideos(listaLocalStorage);
  }, []);

  return (
    <div className="container-xl pt-4 transparente">
      <h1 className="text-start text-white">
        Destaques{" "}
        <span className="px-2 fs-4 fw-normal bg-danger text-white">
          Tema: Tanto Faz
        </span>
      </h1>

      <nav aria-label="breadcrumb   ">
        <ol className="breadcrumb">
         
          <li className="breadcrumb-item" aria-current="page">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <Link to="/registro">Registrar Vídeo</Link>
          </li>
        </ol>
      </nav>

      <h4 className="fw-bold pb-2 text-white">Todos os Vídeos</h4>

      <div className="container">
        <div className="row m-2">
          {listaVideos.map((video) => (
            <div key={video.id} className="col-md-4">
              
              <Card video={video} />
            </div>
          )).slice(-4)   } 
        </div>
      </div>

      
    </div>
  );
};

export default Destaque;
