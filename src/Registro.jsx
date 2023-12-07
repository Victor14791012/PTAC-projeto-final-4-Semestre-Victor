import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Registro() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
  const [nomeVideo, setNomeVideo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duracao, setDuracao] = useState("");
  const [tema, setTema] = useState("");
  const [linkYoutube, setLinkYoutube] = useState("");
  const [Lista, setLista] = useState(listaLocalStorage || []);
  const [id, setId] = useState(1);

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(Lista));
  }, [Lista]);

  // Função para adicionar uma atividade



  return (
   
  );
}
