import Busqueda from "./filttrandoSeries.js";

import Sliders from "./sliders.js";
import MuestraMenu from "./menu_formulario.js";
import NO_VIDEOS from "./no-found-video.js";

document.addEventListener("DOMContentLoaded",e=>{
    Sliders();
    Busqueda(".card-filter",".item");

});

