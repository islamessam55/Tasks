

function handleImgChange(){
    var img = document.getElementById("img-1")
    if (img.src.includes("R.jpeg")) {
        img.src = "images/tropical-relaxation-travel-water-beach.jpg";
    } 
    else img.src = "images/R.jpeg"; 
}