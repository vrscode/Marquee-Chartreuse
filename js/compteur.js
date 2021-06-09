
//variable global
let unite = 0; 
let dizaine = 0;
let centaine = 0;
let millier = 0;

let uniteComposant = document.getElementById("unite");
let dizaineComposant = document.getElementById("dizaine");
let centaineComposant = document.getElementById("centaine");
let millierComposant = document.getElementById("millier");


function plus(){
  // on ajoute 1  
  unite += 1;

  // si unité arrive à 10
  if (unite == 10)
  {
      // on ajoute au dizaine
      dizaine += 1
      unite = 0

      // si les decimale arrive à 10
      if(dizaine == 10)
      {
          // on ajoute au centaine
          centaine += 1
          dizaine = 0

          if(centaine == 10) {
              millier += 1
              centaine = 0

              if(millier == 10){
                millier = 0

              }
          }
      }
  }

  // mettre à jour l'affichage
  uniteComposant.innerText = unite;
  dizaineComposant.innerText = dizaine;
  centaineComposant.innerText = centaine;
  millierComposant.innerText = millier;

}


function reset(){
    unite = 0;
    dizaine = 0;
    centaine = 0;
    millier = 0;

    uniteComposant.innerText = unite;
    dizaineComposant.innerText = dizaine;
    centaineComposant.innerText = centaine;
    millierComposant.innerText = millier;
}

