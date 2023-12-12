import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detalhe = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    
    
    const videoEncontrado = listaLocalStorage.find((v) => v.id === parseInt(id));

    setVideo(videoEncontrado);
  }, [id]);

  if (!video) {
    return <div>Vídeo não encontrado</div>;
  }

  return (
    <div className="container-xl pt-4 transparente text-white" >
     
      <h1 className="text-start text-white">
      Detalhes do Vídeo  {" "}
        <span className="px-2 fs-4 fw-normal bg-danger text-white">
          Tema: Geek e Animes
        </span>
      </h1>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
             <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <Link to="/destaque">Em Destaque</Link>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <Link to="/registro">Registrar Vídeo</Link>
          </li>
        </ol>
      </nav>

      <div>
        <h5>Nome: {video.nomeVideo}</h5>
        <p>Descrição: {video.descricao}</p>
        <p>Duração: {video.duracao}</p>
        <p>Tema: {video.tema}</p>
        {video.linkYoutube && (
          <div>
            <p>Vídeo:</p>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.linkYoutube.slice(17)}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detalhe;
