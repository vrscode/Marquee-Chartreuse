function test(mot) {
    let reponse = document.getElementById("unphrase").value;
    let r1 = document.getElementById("reponse1");

    if(mot == reponse)
        r1.innerHTML = "Bonne réponse, vous avez compris.";

    else
        r1.innerHTML = "Mauvaise réponse, guidez de vous de l'alphabet pour réussir. Veuillez vérifier que vous avez bien commencer par une majuscule également.";


}




function test2(mot) {
    let reponse2 = document.getElementById("unphrase2")
    let r1 = document.getElementById("reponse2");

    if(mot == reponse2)
        r1.innerHTML = "Bonne réponse, vous avez compris.";

    else
        r1.innerHTML = "Mauvaise réponse, guidez de vous de l'alphabet pour réussir. Veuillez vérifier que vous avez bien commencer par une majuscule et que vous n'avez pas oublier la virgule.";


}

function test3(mot) {
    let reponse3 = document.getElementById("unphrase3").value;
    let r1 = document.getElementById("reponse3");

    if(mot == reponse3)
        r1.innerHTML = "Bonne réponse, vous avez compris.";

    else
        r1.innerHTML = "Mauvaise réponse, guidez de vous de l'alphabet pour réussir. Veuillez vérifier que vous avez bien commencer par une majuscule.";


}

// Le codeChiffre est envoyer à la fonction dans le document HTML 
// et permet de savoir si c'est un chiffrement(1) ou un déchiffrement(2)
function modifHTML(codeChiffre) { 
    
    let motNonChiffre = document.getElementById("motNonChiffre").value; // L'instruction let permet de déclarer une variable.
    let rang = parseInt(document.getElementById("rang").value);
    let target = document.getElementById("result");

    switch(codeChiffre) { //L'instruction Switch permet de vérifier le contenu d'une variable à partir de nombreuses valeurs.


        // Si Chiffrement
        case 1:     // L'instruction case va permettre de définir les différents cas possible dans une condition.
        target.innerHTML = chiffrement(motNonChiffre, rang); // Chiffrement vers la droite de l'ordre alphabétique
        break; // L'instruction break permet de terminer la boucle en cours.

        // Si Déchiffrement
        case 2:
        target.innerHTML = chiffrement(motNonChiffre, -rang);   // Déchiffrement vers la gauche de l'ordre alphabétique
        break;
    }

}

function chiffrement(motNonChiffre, rang) {

    // Tableau de caractère
    let listLettre = motNonChiffre.split("");

    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let resultat = "";

    // Boucle tournant autant de fois qu'il y a de lettres dans listLettre
    for (let x in listLettre) {

        // Gère les espaces
        if(listLettre[x] == " ") {
            resultat += " ";
            continue;
        }

        // Si rang Positif
        if (rang > 0) {

            // Si on dépasse le "z" alors on revient au "a"
            if( (alphabet.indexOf(listLettre[x]) + rang) > 25 ) {
                resultat += alphabet[alphabet.indexOf(listLettre[x]) + rang - 26];
            }

            // Si on dépasse pas le "z"
            else {
                resultat += alphabet[alphabet.indexOf(listLettre[x]) + rang];
            }
        } 

        // Si rang Négatif
        else {  

            // Si on recule avant le "a" alors on arrive au "z"
            if( (alphabet.indexOf(listLettre[x]) + rang) < 0 ) {
                resultat += alphabet[alphabet.indexOf(listLettre[x]) + rang + 26];
            }

            // Si on recule pas avant le "a"
            else {
                resultat += alphabet[alphabet.indexOf(listLettre[x]) + rang];
            }      
        }
    }
    return resultat;
}