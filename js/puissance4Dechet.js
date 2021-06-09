var rond = document.querySelectorAll('td');
var ligneUne = document.getElementById("ligneUne");
var ligneDeux = document.getElementById("ligneDeux");
var ligneTrois = document.getElementById("ligneTrois");
var ligneQuatre = document.getElementById("ligneQuatre");
var ligneCinq = document.getElementById("ligneCinq");
var ligneSix = document.getElementById("ligneSix");
var table = document.querySelector("tbody")

// var row = document.querySelectorAll()
// var rond = document.getElementsByClassName('rond');

var color;
var y = 1;


console.log("tableau", table);
console.log("ligne 1", table.children[0].children[1].style.backgroudColor);
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

            // rond[i+7].style.backgroundColor = color; 
            // y++;

            var save = 0;
            var save2 = 7;
            for(let a = 0;  a < 6; a++){
                
                if((rond[i+save2].style.backgroundColor != 'yellow' && rond[i+save2].style.backgroundColor != 'red') && a < 4){
                    console.log("save", save , "a" , a, "i", i);
                    save += 7 ;
                    save2 += 7 ;
                    
                }
                else if(a == 4 && (rond[i+save2].style.backgroundColor != 'yellow' && rond[i+save2].style.backgroundColor != 'red')){
                    save = save2

                }
                else{
                    rond[i+save].style.backgroundColor = color;
                    y++;
                    console.log("done");
                    break; 
                };
            };
        };

    };
};










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







// for(let c = 0; c < 7; c++){
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
