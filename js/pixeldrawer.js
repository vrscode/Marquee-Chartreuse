const link = document.querySelectorAll("td"); 
const choose = document.querySelector("input");
const remove = document.querySelector("button"); 
const afficherHexa = document.querySelector("#hexa")
const afficherMouve = document.querySelector("#mouve")

for (let i = 0; i < link.length; i++ ){   // permet de compter le nombre de td 
    link[i].addEventListener("click", function(event){ // Ajouter un evenement au clic 
        console.log(event);
        if(event.target.localName === "td"){ // au clique target = td#cube et localName strictement égal à td
            event.target.style.backgroundColor = choose.value; // la couleur des td au clique est determiné par la valeur(couleurs) du input(choose)
            choose.style.backgroundColor = choose.value; // la couleur de background correspond à l'exa de la couleur choisie
            remove.style.backgroundColor = choose.value;
            var hexa = choose.value; // variable qui permet de sauvegarder l'exadécimal 
            afficherHexa.innerHTML = "Code hexa : " + hexa; // la page web affichera alors l'exadécimal à côte du input 
            afficherMouve.innerHTML = "x :" + event.clientX  + " " + "y : " + event.clientY;
        }
    });
    remove.addEventListener("click", function(event){
        // confirm("Voulez-vous vraiment tout supprimer ?");
        if(remove < link[i] ){ // si le button est inférieur aux 24 td 
            link[i].style.backgroundColor = ""; // alors tout les td passe en background-color = none; 
        }
    });
}