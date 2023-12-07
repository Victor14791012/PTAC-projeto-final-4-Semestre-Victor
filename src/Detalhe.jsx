// Detalhe.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detalhe = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    // Obtendo a lista do armazenamento local
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    
    // Encontrando o vídeo com base no ID
    const videoEncontrado = listaLocalStorage.find((v) => v.id === parseInt(id));

    setVideo(videoEncontrado);
  }, [id]);

  if (!video) {
    return <div>Vídeo não encontrado</div>;
  }

  return (
    <div className="container-xl pt-4 transparente text-white">
      <h1 className="text-start text-white">
        Detalhes do Vídeo{" "}
        <span className="px-2 fs-4 fw-normal bg-danger text-white">
          Tema: Geek e Animes
        </span>
      </h1>

      {/* Adicione as demais informações do vídeo aqui... */}
    </div>
  );
};

export default Detalhe;
