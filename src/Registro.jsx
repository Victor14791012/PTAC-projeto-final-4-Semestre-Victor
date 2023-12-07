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

  // Função para excluir um vídeo da lista
  const deletar = (idToDelete) => {
    const novaLista = Lista.filter((video) => video.id !== idToDelete);
    setLista(novaLista);
    
  };

  // Função para excluir todos os vídeos da lista
  const deletarTodos = () => {
    setLista([]);
    alert("items deletados");
  };

  return (
    <div>
      <div className="container" id="transparente">
        <Link to="/" className="m-2">
          Home
        </Link>
        <Link to="/destaque">Destaque</Link>
        <div className="bg-dark text-white rounded-2 p-2">
          <h1>Portal Geek</h1>
          <h6>Adicione seus vídeos favoritos do YouTube</h6>

          <form onSubmit={salvar}>
            <div className="mb-3">
              <label htmlFor="nomeVideo" className="form-label">
                Nome do Vídeo
              </label>
              <input
                type="text"
                className="form-control"
                id="nomeVideo"
                value={nomeVideo}
                onChange={(e) => setNomeVideo(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">
                Descrição
              </label>
              <input
                type="text"
                className="form-control"
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="duracao" className="form-label">
                Duração
              </label>
              <input
                type="text"
                className="form-control"
                id="duracao"
                value={duracao}
                onChange={(e) => setDuracao(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tema" className="form-label">
                Tema
              </label>
              <input
                type="text"
                className="form-control"
                id="tema"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="linkYoutube" className="form-label">
                Link do YouTube
              </label>
              <input
                type="text"
                className="form-control"
                id="linkYoutube"
                value={linkYoutube}
                onChange={(e) => setLinkYoutube(e.target.value)}
              />
            </div>
            <button className="btn btn-primary">ADD</button>
            <button className="btn btn-danger mx-2" onClick={deletarTodos}>
              DEL <i className="bi bi-trash"></i>
            </button>
          </form>
        </div>

        
      </div>
    </div>
  );
}
