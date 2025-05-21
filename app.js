fetch("data.json")
    .then(response => response.json())
    .then(data => {


        console.log(data)
        afficher(data)
    })


// je récupère les éléments du Html //


document.getElementById("header").innerHTML +=
    `
    <div>
        <img src="assets/" alt="LOGO">
        </div>
        <div>
            <h1>${data.nomEntreprise}</h1>
        </div>
        <div>
        <p>${data.slogan}</p>
        <p>${data.bouton}</p>
    </div>
  `



// je mets une fonction pour afficher les produits //


function afficher(produits) {


    produits.forEach(produits => {

          console.log(produits)

        afficher(produits)

        document.getElementById("produits").innerHTML += `
        
          <div>
                <h2>Nos produits</h2>
            </div>
            <div>
                <img src="${image-url}" alt="">
                <h3>${titre}</h3>
                <p>${présentation}</p>
            </div>
        `
    })
}