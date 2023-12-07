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
  const salvar = (e) => {
    e.preventDefault();

    // Extrair a parte após a última barra do link do YouTube
    const linkYoutubeID = linkYoutube.substring(linkYoutube.lastIndexOf("/") + 1);

    // Adicionar um novo objeto à lista
    const novoVideo = {
      nomeVideo: nomeVideo,
      descricao: descricao,
      duracao: duracao,
      tema: tema,
      linkYoutube: linkYoutubeID, // Usar apenas a parte após a última barra
      id: id
    };

    setLista([...Lista, novoVideo]);
    setId(id + 1); // Incrementar o contador de IDs

    // Limpar os campos do formulário
    setNomeVideo("");
    setDescricao("");
    setDuracao("");
    setTema("");
    setLinkYoutube("");

    alert(nomeVideo);
    console.log(novoVideo);
    console.log(Lista);
  };



  return (
   
  );
}
