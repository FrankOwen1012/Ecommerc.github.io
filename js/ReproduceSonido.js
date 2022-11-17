export default function IniciaSonido(sonido, stop) {
    let TiempoAlarma;
    //creando audio
    let audio = document.createElement("audio");
    audio.src = sonido;
window.addEventListener("DOMContentLoaded",e=>{
    audio.play();
    console.log("REPROCUCIENDO");

})
 

    document.addEventListener("click", e => {
        if (e.target.matches(stop)) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
};



/*window.onload = function () {
    Imagen.onmouseover = function (e) {

        console.log("eta encima de la Imagen");
    }
    Imagen.onmouseout =function (e){
        console.log("No esta encima del a imgane")
    }

}*/