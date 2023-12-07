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
  );
};

export default Destaque;
