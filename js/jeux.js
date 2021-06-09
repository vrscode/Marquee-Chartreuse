var images = []; 
var buttonGauche = document.getElementById("gauche");
var buttonDroite = document.getElementById("droite");
var i = 0;
var source = [];
var a = document.getElementById("charge");

images[0] = './img/pixel_drawer.png'; // Préparation du src pour la balise img
images[1] = './img/puissanceQuatre.png'; // Préparation du src pour la balise img
images[2] = './img/tallyClick.png';
images[3] = './img/snake.png';
images[4] = './img/jeuCesar.png';
images[5] = './img/justePrix.png';
images[6] = './img/simon.png';


source[0] = "pixeldrawer.html";
source[1] = "puissance4.html";
source[2] = "compteur.html";
source[3] = "snake.html";
source[4] = "jeucesar.html";
source[5] = "justeprix.html"
source[6] = "simon.html"

document.getElementById("changeImage").src = images[i]; // intégration des src à la balise img en fonction de i 


a.href = source[i]; // ajouter href en fonction de i

buttonDroite.addEventListener("click", function changeImage(event){ // ajout d'un ecouteur d'événement

    if (i < images.length - 1){ // si i est inférieur aux nombres d'images - 1
        i++; // Alors i = i + 1
    }else{ // sinon 
        i = 0; // i repasse à 0
    }
    a.href = source[i];
    console.log(source[i]);
    document.getElementById("changeImage").src = images[i];
});

buttonGauche.addEventListener("click", function changeImage2(e){

    if ( i > 0 ){
        i--;
    }else{
        i = images.length - 1;
    }
    a.href = source[i];
    document.getElementById("changeImage").src = images[i];
});




