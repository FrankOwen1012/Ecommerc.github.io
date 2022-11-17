export default function NO_VIDEOS(clase) {
  
    let $claseARemplazar = document.querySelector(clase);

    let videos = (estados) => {
        let { url, exito, fracaso } = estados;

        let xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", e => {

            if (xhr.readyState !== 4) {
                return null;
            }
            else {
                if (xhr.status >= 200 && xhr.status < 300) {
                    let html = xhr.responseText;

                    exito(html);
                    console.log(html);
                }
                else {
                    let mensaje = xhr.statusText || "OCURRIO PROBLEMA EN CONEXION ";

                    fracaso(mensaje);
                }
            }

        })
        xhr.open("GET", url);
        xhr.setRequestHeader("Content-type", "text/html;charset=utf-8");
        xhr.send();
    }//fin videos 

    document.addEventListener("click", e => {

    

        if (e.target.matches(".Pagination .abre")) {
            e.preventDefault();
            videos({
                url: e.target.href,
                exito: (html) => {
                    $claseARemplazar.innerHTML = html;

                },
                fracaso: (mensaje) => {
                    $claseARemplazar.innerHTML = `<p>OCURRIO UN PROBLEMA ${mensaje}</p>`;
                }
            })

        }
        else{
            location.reload();
        }
            
    
      
      


    });

}