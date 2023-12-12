import React from "react";
import { Link } from "react-router-dom";

const Card = ({ video }) => {
  return (
    <div className="card-jogo mb-4 zoom shadow-lg" id="card-meu">
      <div className="card-body">
        {video.linkYoutube && (
          <div>
            <iframe
              width="100%"
              height="100%"
              className="rounded-4"
              src={`https://www.youtube.com/embed/${video.linkYoutube.slice(17)}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <h5 className="card-title ">{video.nomeVideo}</h5>
        <div className="text-end">
          <Link to={`/detalhe/${video.id}`} className="btn btn-dark">
            <i className="bi bi-info-circle"></i> Detalhe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
