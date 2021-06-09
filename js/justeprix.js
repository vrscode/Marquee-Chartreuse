var input = document.querySelector("#input");
var nb = Math.floor(100*Math.random());
input.addEventListener("keypress", play);

function play(event){
    if (event.key === 'Enter'){
        if(input.value != nb && input.value != null){
            if (input.value < nb){
                document.querySelector("p").innerHTML="C'est plus ";
                document.querySelector("p").style.color = "#E05F5F";
                }
            else{
                document.querySelector("p").innerHTML="C'est moins";
                document.querySelector("p").style.color = "#E05F5F";
            }
        }
        else{
            document.querySelector("p").innerHTML="C'est gagné !!";
            document.querySelector("p").style.color = "green";
        }
    
    }
}
