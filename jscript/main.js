const griglia = document.getElementById("griglia");
console.log(griglia);

function creazioneQuadrato(num) {
    const div = document.createElement("div");
    div.classList.add("quadrato");
    div.innerHTML = `<span>${num}</span>`;
    return div;
}

for (let i = 1; i <= 100; i++) { 
    let elementoCorrente= creazioneQuadrato(i);
    console.log(elementoCorrente);

    elementoCorrente.addEventListener("click", function(){
        console.log(this);
        this.classList.toggle("active");
    })
    
}