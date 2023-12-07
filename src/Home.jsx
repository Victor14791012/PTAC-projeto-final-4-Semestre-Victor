import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [listaVideos, setListaVideos] = useState([]);

  useEffect(() => {
    // Obtendo a lista do armazenamento local
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    setListaVideos(listaLocalStorage);
  }, []);

  
};

export default Home;
