function flashrouge(){
    rouge.style.backgroundColor = "#ff000080";
    setTimeout(function(){rouge.style.backgroundColor = "red"; }, 900);
    

}

function flashjaune(){
    jaune.style.backgroundColor = "#ffff0080";
    setTimeout(function(){jaune.style.backgroundColor = "yellow"; }, 900);
    
}

function flashbleu(){
    bleu.style.backgroundColor = "#0000ff80";
    setTimeout(function(){bleu.style.backgroundColor = "blue"; }, 900);
    
}

function flashvert(){
    vert.style.backgroundColor = "#00800080" ;
    setTimeout(function(){vert.style.backgroundColor = "green"; }, 900);
    
}

let choix = ["rouge", "jaune",  "bleu", "vert"];

let combinaison = [];

let reponse = [];


function play(){
    combinaison.push(choix[Math.floor(Math.random()*4)]);
    console.log(combinaison);
    for (let i = 0; i < combinaison.length; i++){
        if (combinaison[i] == "rouge" ){
            flashrouge();   
        }
        else if(combinaison[i] == "jaune"){
            flashjaune();
        }
        else if(combinaison[i] == "vert"){
            flashvert();
        }
        
        else{
            flashbleu();
        }
    }
    
}