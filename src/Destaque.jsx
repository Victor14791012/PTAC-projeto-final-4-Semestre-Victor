import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Detalhe from "./Detalhe";

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
          Tema: Geek e Animes
        </span>
      </h1>

      <nav aria-label="breadcrumb   ">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
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
              <div className="card-jogo mb-4 zoom shadow-lg colorful-border" id="card-meu">
                <div className="card-body">
                  <h5 className="card-title">{video.nomeVideo}</h5>

                  {video.linkYoutube && (
                    <div>
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.linkYoutube}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}

                  <Link to={`/detalhe/${video.id}`} className="btn btn-primary">
                    Detalhe
                  </Link>
                </div>
              </div>
            </div>
          ))  }  
        </div>
      </div>

      {/* Adicionando o componente Detalhe aqui para renderização */}
      <Detalhe listaVideos={listaVideos} />
    </div>
  );
};

export default Destaque;
