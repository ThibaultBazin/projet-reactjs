import React, { useState, useEffect, useRef } from 'react';

export default function Expenses() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [synopsis, setSynopsis] = useState([]);

  useEffect(() => {
    const options = {
      "method": "get"
    };

    // récupérer les données de l'api
    const getData = async () => {
      if (search != null && search.length < 3) {
        setSearch("");
        setData([]);
      } else {
        const resp = await fetch('https://api.jikan.moe/v3/search/anime?q=' + search, options);
        const json = await resp.json();
        setData(json.results);
        setSynopsis([]);
      }
    }
    
    // timeout
    const timer = setTimeout(() => {
      getData();
    }, 500);
    // Annule le timeout si l'user écrit à nouveau avant qu'il soit exeute
    return () => clearTimeout(timer);

  }, [search])
  return (
    <main style={styles.page}>
      <div style={styles.nav}>
        <div style={{backgroundColor: "#36393f" }}>
          <input type="text" placeholder="Rechercher un anime..." onChange={search => setSearch(search.target.value)} value={search} style={styles.search}></input>
        </div>
      </div>
      <div style={styles.container}>
        {List(data)}
      </div>
    </main>
  );
}

function List(items) {
  return (
   <ul style={styles.gridContainer}>
      {items.map((item) =>
        <li key={item.mal_id} style={styles.gridChild}>
          <div style={styles.title}>
            {item.title}
          </div>
          <div styles={styles.image}>
            <img src={item.image_url} style={styles.image}></img>
          </div>
          
        </li>
      )}
   </ul>
 );
}

const styles = {
  page: {
    flex: 1,
    backgroundColor: '#101010'
  },
  container: {
    flex: 1,
  },
  nav: {
    color: '#FFFFFF',
  },
  search: {
    width: '100%',
    height: '40px',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    marginTop: 10,
    height: window.innerHeight + "px",
  },
  titleContainer: {
    height: 35,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  scoreContainer: {
    height: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  imageContainer: {
    height: '200px',
    minHeight: '200px',
    maxHeight: '200px',
  },
  image: {
    flex: 1,
    width: '200px',
  },
  imageBlock: {
    color: '#ffffff',
    backgroundColor: '#000000',
    width: 80,
    height: 35,
    position: 'absolute',
    left: 10,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorWhite: {
    color: '#fff',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: '100%'
  },
  synopsis: {
    color: '#ffffff',
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.8,
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    //gridGp: '20px',
    color: 'white',
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    textAlign: 'center',
    listStyleType: 'none'
  },
  gridChild: {

  },
  title: {
    whiteSpace: 'normal',
    textAlign: 'center'
  }

};