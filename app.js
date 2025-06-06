fetch("data.json")
    .then(reponse => reponse.json())
    .then(donnee => {
        afficherProduits(donnee.produits)
        afficherClients(donnee.clients)
        afficherBenefices(donnee.benefices)
    })


//role : afficher les produits dans #produits
//parametre: le tableau produits
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
    tableauClients.forEach(client => {

        document.getElementById("clients").innerHTML += `

        <div class="flex textCenter cardAvis">
             <ul class="">
               <li class="font15">${client.nom}</li>
              <li class="font15">${client.typePrestation}</li>
               <li>${client.commentaire}</li>
              <li class="font15">${client.note}/5</li>
             </ul>
        </div>
    
    `
    });
}

//role : afficher la liste des bénéfices clients
// parametre : le tableau des bénéfices clients
//return : rien

function afficherBenefices(tableauBenefices) {
    tableauBenefices.forEach(benefice => {

        document.getElementById("benefices").innerHTML += `

       <div class="">
            <div class="flex large-6 cardBene">
                <img class="img"
                    src= ${benefice.image} alt="Photo agriculture">
                <p>${benefice.commentaire}</p>
            </div>
        </div>
    
    `
    });
}

