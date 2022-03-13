# Projet reactjs

Présentation :

C'est un site web qui permet de rechercher des animes.

On retrouve les pages suivantes :
- accueil : http://localhost:3000/
- recherche : http://localhost:3000/search
- details d'un anime : http://localhost:3000/anime/:id

## Le code

Le code est plutôt simple, il fonctionne grace à l'api jikan moe ; https://docs.api.jikan.moe/

Concernant la recherche des animes basés sur le nom, j'utilise un fetch : https://api.jikan.moe/v4/anime?q=${search}
Pour l'affichage, j'affiche ces éléments grace à un item.map()

Concernant la récupération d'un anime, je récupère l'id de l'url en params que je passe à l'api : https://api.jikan.moe/v4/anime/${mal_id}

## Le css

Le css est simple. J'ai rencontré une seule difficulté, c'était pour afficher 4 éléments sur la page par ligne.
J'ai trouvé ma réponse avec un grid.
display: 'grid',
gridTemplateColumns: '1fr 1fr 1fr 1fr',