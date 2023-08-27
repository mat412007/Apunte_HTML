function esconderFrutas(){
    let x = document.getElementById("frutas");
    for(let i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
}