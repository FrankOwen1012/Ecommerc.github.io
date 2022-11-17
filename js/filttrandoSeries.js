export default function Busqueda(input, selecciona) {//input que va a buscar y selecciona ...el contenido textual
    let noFound;
    document.addEventListener("keyup", e => {
        if (e.target.matches(input)) { //si coincide con la variable input
            //  console.log(e.key);
            console.log(e.target.value) ; //estpo acumula el registro ingresado
            //al ignresar esto targer.value =>hace que registre el texto qeu acumula 
            /*
             ped 
             pedro
             pedroenrique 
             etc....
            */ 
           if(e.key==="Escape"){
            e.target.value="";
           }
            document.querySelectorAll(selecciona).forEach((elementos) =>{
                if( elementos.textContent.toLowerCase().includes(e.target.value) ==true){ 
                    //entramos a textContent.=>para extraer los caracteres de este
                    //toLowerCase =>convertimos esto a minusculas
                    //includes ==>para que compruebe que si la palabra qeu ingresamos este o no dentro de los valores
                    elementos.classList.remove("filter");
                    //filter -->hace que desaparesca del html 
                    //en caso de que encuentre que remueva el filter
                }
                else{
                    elementos.classList.add("filter")
                    //si no esta dentro del texto ==>que desaparesca
 
                }
            }
        
                
                 

            );
}
    });
}