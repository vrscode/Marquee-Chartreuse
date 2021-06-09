var button = document.getElementById("buttonUn");
console.log(button);

button.addEventListener("click", function(e){
    console.log(e);
    addEventListener("click", function(event){
        const images = document.createElement("img");
        images.setAttribute("id", "imgAleatoire");
        images.setAttribute("src", "https://picsum.photos/200/300?random=1");
        images.style.position = "absolute"; 
        images.style.top = event.y + "px"; 
        images.style.left = event.x + "px";
        document.body.appendChild(images);
    });
});

// api.giphy.com/v1/gifs/trending