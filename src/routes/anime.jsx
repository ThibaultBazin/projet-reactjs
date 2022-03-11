import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";

  export default function Anime() {
    const [data, setData] = useState([]);

    console.log(useParams());

  let { mal_id } = useParams();
  
    useEffect(() => {
      const options = {
        "method": "get"
      };
  
      // récupérer les données de l'api
      const getData = async () => {
        if (mal_id == null || mal_id <= 0) {
          setData([]);
        } else {
          const resp = await fetch(`https://api.jikan.moe/v3/anime/${mal_id}/`, options);
          const json = await resp.json();
          setData(json.results);
        }
      }
      
  
    }, [])
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Anime {mal_id}</h2>
      </main>
    );
  }