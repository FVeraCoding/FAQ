document.addEventListener("DOMContentLoaded", () => {

    const desplegables = document.querySelectorAll(".desplegable");
    const titulos = document.querySelectorAll(".pregunta-titulo")
    const textos = document.querySelectorAll(".pregunta-texto");

    for(let i = 0; i < desplegables.length; i++){
        desplegables[i].addEventListener("click", () => {
            if (!desplegables[i].src.endsWith("icon-minus.svg")) {
                desplegables[i].src = "/assets/images/icon-minus.svg";
                textos[i].style.display = "block";
            } else {
                desplegables[i].src = "/assets/images/icon-plus.svg";
                textos[i].style.display = "none";
            }
        });
    }

    for(let i = 0; i < titulos.length; i++){
        titulos[i].addEventListener("click", () => {
            mostrarRetirarTextos(i);
        });
    }

    for(let i = 0; i< titulos.length; i++){
        titulos[i].addEventListener("keydown", (e) => {
            if(e.key == "Enter" || e.key == " "){
                mostrarRetirarTextos(i);
            }
        })

        desplegables[i].addEventListener("keydown", (e) => {
            if(e.key == "Enter" || e.key == " "){
                mostrarRetirarTextos(i);
            }
        })
    }

    function mostrarRetirarTextos(index){
        if (textos[index].style.display == "" || textos[index].style.display == "none") {
            desplegables[index].src = "/assets/images/icon-minus.svg";
            textos[index].style.display = "block";
        } else {
            desplegables[index].src = "/assets/images/icon-plus.svg";
            textos[index].style.display = "none";
        }
    }


});
