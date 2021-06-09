var rond = document.querySelectorAll('td');
// var ligneUne = document.getElementById("ligneUne");
// var ligneDeux = document.getElementById("ligneDeux");
// var ligneTrois = document.getElementById("ligneTrois");
// var ligneQuatre = document.getElementById("ligneQuatre");
// var ligneCinq = document.getElementById("ligneCinq");
// var ligneSix = document.getElementById("ligneSix");
var table = document.querySelector("tbody");
var reset = document.querySelector("button");
var turn = document.getElementById("turn");
// var row = document.querySelectorAll()
// var rond = document.getElementsByClassName('rond');

var color;
var y = 1;
var win = 0;
reset.addEventListener("click", restart);

function restart(){
    document.location.reload();
};

console.log("tableau", table);

for(let i = 0 ; i < 6 ; i++){   //mettre toutes les case avec un fond blanc pour faciliter leur identification lors des conditions
    for(let b = 0; b < 7; b++){
        table.children[i].children[b].style.backgroundColor = "white";
    }
}
console.log("ligne 1", table.children[0].children[1].style.backgroundColor);




// Le jeu
for(let i = 0;  i < rond.length; i++){
    
    
    rond[i].addEventListener('click',Position);
    function Position(rond){
        // Pour voir la ligne et la colonne avec Index
        console.log("Ligne =" , rond.target.parentElement.rowIndex , " colonne " , rond.target.cellIndex);
        console.log("rond", rond);
        
    };

    rond[i].addEventListener('click', tour);
    function tour(td){
        if (win == 0){
            //Si la case n'est pas déjà coloré
            if (rond[i].style.backgroundColor != 'yellow' && rond[i].style.backgroundColor != 'red'){
                //définir la couleur
                if (y%2 == 0){
                    color = 'yellow';
                }
                else if (y%2 != 0){
                    color = 'red';
                };
                console.log("y = " + y);
                console.log("color = " + color);
            };
                // rond[i+7].style.backgroundColor = color; 
                // y++;
            if (color == "red"){            // donner le tour en fonction de la couleur obtenue avec "y"
                turn.innerHTML= "Au tour du Jaune"
                turn.style.color = "#ffea2b"
            }
            else{
                turn.innerHTML= "Au tour du Rouge"
                turn.style.color = "red"
                
            }
            // faire tomber les pions et permettre d'ajouter des pions de par la ligne du haut
            
            var column = parseInt(td.target.cellIndex);
            console.log("EHOOOO",column)
            for(let a = 5;  a > -1; a--){
                // table.children[a].children[1].style.backgroudColor
                
                
                console.log(table.children[a].children[i]);
                if (table.children[a].children[i].style.backgroundColor != "white"){
                    console.log("if", i);   
                    continue;   //pour continuer jusqu'a trouver une case non blanche
                    
                }
                else{
                    var column = parseInt(td.target.cellIndex);
                    table.children[a].children[column].style.backgroundColor = color;
                    y++;
                    console.log("else", i, "children", table.children[a].children[column]);
                    break;
                };
                // console.log(table.children[a].children[i]);
            };
            // Si une seule des conditions est vrai alors la personne gagne
            if (rowAnalyse() || columnAnalyse() || diagAnalyseRight() || diagAnalyseLeft()){
                if (color == "red"){
                    turn.innerHTML= "Victoire du Rouge!";
                    turn.style.color = "red";
                }
                else{
                    turn.innerHTML= "Victoire du Jaune!";
                    turn.style.color = "#ffea2b";
                }
                win = 1;
            };
        }
        else{
            for(let i = 0 ; i < 6 ; i++){
                for(let b = 0; b < 7; b++){
                    table.children[i].children[b].style.backgroundColor = "white";
                }
            }
            win = 0;
        }
    };
};




function colorAnalyse(one, two, three, four){ //Pour transposer et écrire simplement dans les fonctions de condition de victoire
    return (one === two && one === three && one === four && one !== 'white');
}
//analyse par 4 groupe de 4 ronds pour voir si il y à une victoire sur chaque ligne

function rowAnalyse(){
    for (let row = 0; row < table.children.length; row++){
        for (let column =0; column < 4; column++){ // 1ère ligne : rond(row) 1,2,3,4 -> 1ère ligne: rond 2,3,4,5 -> 1ère ligne: rond 3,4,5,6 -> 1ère ligne: rond 4,5,6,7
                                                    //etc etc.. pour chaque ligne 
           if (colorAnalyse(table.children[row].children[column].style.backgroundColor,table.children[row].children[column+1].style.backgroundColor, 
                                table.children[row].children[column+2].style.backgroundColor, table.children[row].children[column+3].style.backgroundColor)){
               return true; // si jamais il y a 4 rond de la même couleur collées alors la fonction est vraie
           };
        };
    };
};
function columnAnalyse(){
    for (let column = 0; column < 7; column++){
        for (let row = 0; row < 3; row++){
            if (colorAnalyse(table.children[row].children[column].style.backgroundColor, table.children[row+1].children[column].style.backgroundColor,
                                table.children[row+2].children[column].style.backgroundColor,table.children[row+3].children[column].style.backgroundColor)){
                return true;
            };
        }  ; 
    };
};
function diagAnalyseRight(){
    for(let column = 0; column < 4; column++){
        for (let row = 0; row < 3; row++){
            if (colorAnalyse(table.children[row].children[column].style.backgroundColor, table.children[row+1].children[column+1].style.backgroundColor,
                table.children[row+2].children[column+2].style.backgroundColor,table.children[row+3].children[column+3].style.backgroundColor)){
                    return true;
                };
            };
        };
};
function diagAnalyseLeft(){
    for(let column = 0; column < 4; column++){
        for (let row = 5; row > 2; row--){
            if (colorAnalyse(table.children[row].children[column].style.backgroundColor, table.children[row-1].children[column+1].style.backgroundColor,
                table.children[row-2].children[column+2].style.backgroundColor,table.children[row-3].children[column+3].style.backgroundColor)){
                    return true;
            };
        };
    };
};







///////poubelle////////


// for(let i = 0;  i < rond.length; i++){
//     rond[i].addEventListener('click', horizontal);
// }
// function horizontal(td){
//     for(let i = 0;  i < rond.length; i++){

//     }
//     var column = parseInt(td.target.cellIndex);
//     columnPlus1 = column +1;
//     columnMoins1 = column -1;
//     columnMoins2 = column -2;
//     columnMoins3 = column -3;
//     check = false
//     for(let a = 5;  a > -1; a--){
//         if((table.children[a].children[columnMoins1].style.backgroundColor == color)){
//             if(table.children[a].children[columnMoins2].style.backgroundColor == color){
//                 if(table.children[a].children[columnMoins3].style.backgroundColor == color){
//                     check = true;
//                     console.log("ARAZIOAZUHOFAUZFOLAUZOFUANZOFUAOZUFB GAGNÉ");
//                     return check;
//                 }
//                 else{
//                     break;
//                 };
//             }
//             else{
//                 break;
            
//             };
//         }
//         // else if(){}
        
//     }    
// }   









            // console.log(td.target.cellIndex)
            // for (let a = 5;  a >= 0; a--){

            //     if (rond[i].children[rond.target.parentElement.rowIndex].style.backgroundColor != 'yellow')
                //change la case de couleur



// tableau = [
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
// ]



// p1.addEventListener('click',ChangeColor);

// function ChangeColor(){
//     this.style.backgroundColor = color;
