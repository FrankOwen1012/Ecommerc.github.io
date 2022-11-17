export default function MuestraMenu(botondesaparece, botonAparece) {
  let boton = document.querySelector(botondesaparece);
  let botonAparece_ = document.querySelector(botonAparece);

  document.addEventListener("click", e => {
    if (e.target.matches(botondesaparece)) {
  
      botonAparece_.classList.add("is-visible");

  
    }

    else {
   
      console.log("SALISTE DE MI ");
      botonAparece_.classList.remove("is-visible");

    }
  })

}