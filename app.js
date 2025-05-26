fetch("data.json")
    .then(reponse => reponse.json())
    .then(donnee => {
        afficherProduits(donnee.produits)
        afficherClients(donnee.clients)
    })


//role : afficher les produits dans #produits
//paramùetre: le tableau produits
//return : rien

function afficherProduits(tableauProduits) {
    tableauProduits.forEach(produit => {

        document.getElementById("produits").innerHTML += `

    
         <div class=" card">
                <img class="rad" src="${produit.imageurl}" alt="Image produits">
                <h3 class="font25">${produit.titre}</h3>
                <p class="font15">${produit.presentation}</p>
            </div>
    
    `
    });
}

//role : afficher les avis clients
// parametre : le tableau des avis clients
//return : rien

function afficherClients(tableauClients) {
    tableauClients.forEach(clients => {

        document.getElementById("clients").innerHTML += `

        <div class="flex textCenter cardAvis">
             <ul class="">
               <li class="font15">Sophie</li>
              <li class="font15">Coffret cadeau personnalisé</li>
               <li>Le coffret de chocolats que j'ai offert était magnifique et délicieux. Les saveurs étaient
                  variées et originales, et la présentation était très soignée. Un grand merci au Palais du
                 Chocolat pour ce cadeau parfait.</li>
              <li class="font15">Note 5/5</li>
             </ul>
        </div>
    
    `
    });
}




