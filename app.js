fetch("data.json")
    .then(response => response.json())
    .then(data => {


        console.log(data)
        afficher(data)
    })


// je récupère les éléments du Html HERO //


document.getElementById("hero").innerHTML +=

    `
     
  `



// je mets une fonction pour afficher les produits //


function afficher(produits) {


    produits.forEach(produits => {

          console.log(produits)

        afficher(produits)

        document.getElementById("produits").innerHTML += `
        
         
          
        `
    })
}