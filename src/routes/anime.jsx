import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

  export default function Anime() {
    const [data, setData] = useState([]);
    const [firstRender, setFirstRender] = useState(false);

    const { mal_id } = useParams();

    useEffect(() => {
      const options = {
        "method": "get",
      };
    
      // récupérer les données de l'api
      const getData = async () => {
        const resp = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`, options);
        const json = await resp.json();
        setData(json.data);
      }

      if (!firstRender) {
        setData();
        getData();
        setFirstRender(true);
      }
      
    }, [firstRender])

    // la vidéo youtube trailer est désactivé car il y a un probleme, ça marque Vidéo non disponible
    let trailer;
    if (data && data.trailer) {
      trailer = <ReactPlayer url={data.trailer.url} style={{textAlign: "center"}}/>
    }

    return (
      <main style={{ padding: "1rem 0" }}>
        <div>
          <h2>{data && data.title ? data.title : ""}</h2>
          <img src={data && data.images ? data.images.webp.image_url : ""}></img>
          <p>Noté {data && data.score > 0 ? data.score : "?"}/10 ★ par {data && data.members > 0 ? data.members : "?"} 👥</p>
          <p>Classé n°{data && data.popularity ? data.popularity : "?"} en popularité et n°{data && data.rank ? data.rank : "?"} en note</p>
          <p>Source : {data && data.source ? data.source : ""}</p>
        </div>
        <div>
          <p>Synopsis :</p>
          <p className="synopsis">{data && data.synopsis ? data.synopsis : ""}</p>
        </div>
      </main>
    );
  }