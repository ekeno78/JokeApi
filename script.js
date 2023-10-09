// Url a appelé
const url = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit"






var button = document.getElementById("btAjouter");
var tableBody = document.getElementById("jokeTable");

function ajouterLigne(jokeTable) {
    console.log(jokeTable.setup)
    // newRow = insertion d'une colonne
    var newRow = tableBody.insertRow(0);

    // on ajoute une cellule à la colonne que l'on vient de créer
    var newCell = newRow.insertCell(0)

    // On crée un noeud de texte
    var newText = document.createTextNode(jokeTable.id);

    // on lit le noeud de texte à la cellule
    newCell.appendChild(newText);



    newCell = newRow.insertCell(1)

    newText = document.createTextNode(jokeTable.setup + " " + jokeTable.delivery);

    newCell.appendChild(newText);



// ajout d'un bouton de suppression pour chaque ligne
    var deleteButton = document.createElement("button");
    // texte supprimer dans le bouton
    deleteButton.innerHTML = "Supprimer";
    // lorsque l'on clique une fonction commence
    deleteButton.onclick = function () {
        // fonction qui supprime la ligne entiere de la ligne qui vient d'apparaître 
        tableBody.deleteRow(newRow.rowIndex);
    };
    newCell = newRow.insertCell(2)
    //newText = document.createTextNode();

    newCell.appendChild(deleteButton);

}

// fonction qui va chercher la blague
function chercherBlague() {
    //lancement de l'appel
    fetch(url)
        .then(response => response.json())

        .then(
            // syntaxe avec une fonction fléchée
            data => {
                //  affichage du résultat de la transfo en JSON
                ajouterLigne(data)

            }
        )
}

button.addEventListener("click", (event) => {
    chercherBlague();

})




