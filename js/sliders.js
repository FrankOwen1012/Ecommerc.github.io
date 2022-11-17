export default function Sliders(){
    let botonSiguiente = document.querySelector(".slider-btns .next");
    let botonAnterior = document.querySelector(".slider-btns .prev");
    let slides = document.querySelectorAll(".slider-slide");

    let contador = 0;

    document.addEventListener("click", e => {
        if (e.target === botonAnterior) {
            e.preventDefault();
            slides[contador].classList.remove("active");
            contador--; 

            if (contador < 0) {
                contador = slides.length - 1;
            }
            slides[contador].classList.add("active");
        }
        if (e.target === botonSiguiente) {
            e.preventDefault();
            slides[contador].classList.remove("active");
            contador++;

            if (contador >= slides.length) {
                contador = 0;
            }
            slides[contador].classList.add("active");
        }

    });
}