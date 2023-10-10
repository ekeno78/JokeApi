# JokeApi
Un générateur de blague

# Comment utiliser

Ouvrez le fichier index.html.
Cliquez sur le bouton "Ajouter une blague" pour ajouter une nouvelle blague au tableau.
Pour supprimer une blague, cliquez sur le bouton "Supprimer" correspondant à la ligne de la blague.
Pour supprimer l'entièreté du tableau, cliquez sur le bouton "Tout supprimer".

# Comment ça marche
Le code utilise l'API de blagues pour récupérer une blague aléatoire en français sans contenu NSFW, religieux, politique, raciste, sexiste ou explicite. 
La fonction chercherBlague est appelée lorsqu'un bouton est cliqué et effectue la requête HTTP à l'API.
La fonction ajouterLigne est appelée lorsqu'une réponse est reçue de l'API. Cette fonction crée une nouvelle ligne dans le tableau HTML et y ajoute la blague. 


