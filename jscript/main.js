const griglia = document.getElementById("griglia");

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

    griglia.append(elementoCorrente);
    
}

function generaGriglia(){
    let gri= document.getElementById("griglia-principale")
    gri.classList.remove("d-none")
}

