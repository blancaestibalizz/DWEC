
            window.addEventListener("load", inicio);

            function inicio(){
                document.getElementById("añadir").addEventListener("click", añadirSelect);
            }

            function añadirSelect(){
                var parrafo=document.createElement("option");
                var texto = document.createTextNode(document.getElementById("texto").value);
                parrafo.appendChild(texto);
                var cont=document.getElementById("aprobar");
                cont.appendChild(parrafo);
            }
            
      
