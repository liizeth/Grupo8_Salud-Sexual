let datos =`[{"nro":"1","localidad":"Los Hornos", "direccion":"145 e/ 59 y 60","telefono":4509717},
{"nro":"2","localidad":"Los Hornos", "direccion":"66 y 143","telefono":4509699},
{"nro":"3","localidad":"San Carlos", "direccion":" e/ 146 y 147","telefono":4706675},
{"nro":"4","localidad":"Villa Elisa","direccion":"Centenario y Arana","telefono":4870267},
{"nro":"5","localidad":"City Bell","direccion":"12 y 19","telefono":4870267},
{"nro":"6","localidad":"Villa Elvira","direccion":"122 e/ 80 y 81","telefono":4520077},
{"nro":"7","localidad":"Villa Elvira","direccion":"7 y 82","telefono":4532585},
{"nro":"8","localidad":"La Plata","direccion":"20 y 85","telefono":4515845},
{"nro":"9","localidad":"Tolosa","direccion":"528 bis y 2 bis","telefono":4249595},
{"nro":"10","localidad":"Abasto","direccion":"203 y 516","telefono":4913345}]`;

let currentPage = window.location.pathname;

if (currentPage.includes("index.html")) {
    alert("La salud sexual es responsabilidad de todos. Infórmate y protege tu bienestar");

} else if (currentPage.includes("anticonceptivos.html")) {
    alert("¿Sabías que el uso correcto de anticonceptivos puede prevenir embarazos no deseados y proteger contra enfermedades de transmisión sexual? Infórmate y cuida tu salud.");

    } else if (currentPage.includes("ETS.html")) {
        alert("¿Sabías que muchas ETS no presentan síntomas visibles? Usar protección es la mejor manera de protegerte. Infórmate y mantente seguro.");
        
        }else if (currentPage.includes("centros-de-salud.html")) {

            localStorage.setItem("centros", datos);

            let centros = JSON.parse(localStorage.getItem("centros"));
            
            
            
            document.getElementById("mostrarFormulario").addEventListener("click", function() {
                document.getElementById("centroForm").style.display = "block";
            });
            
            //agregar el nuevo centro
            document.getElementById("centroForm").addEventListener("submit", function(event) {
                event.preventDefault();  
            
                let nue = {
                    nro: document.getElementById("nro").value,
                    localidad: document.getElementById("localidad").value,
                    direccion: document.getElementById("direccion").value,
                    telefono: document.getElementById("telefono").value
                };
            
                centros.push(nue);  // carga el nuevo centro 
                localStorage.setItem("centros", JSON.stringify(centros));  // Actualizar
            
                console.log("El centro fue agregado.");
            
                
                document.getElementById("centroForm").reset();  // Limpia
                document.getElementById("centroForm").style.display = "none";  // Oculta
                document.getElementById("mostrarFormulario").style.display = "block";  // Muestra el botón nuevamente
                alert ("El centro fue agregado");
            });
            
            
            function buscarCentro() {
            }
            
            
            //mostrar los centros
            let centrosVisible = false; 
            
            document.getElementById("imprimirCentros").addEventListener("click", function() {
                let resultadoDiv = document.getElementById("resultado");
            
                if (centrosVisible) {
                    resultadoDiv.innerHTML = "";  
                    centrosVisible = false;
                } else {
                    resultadoDiv.innerHTML = "";  
            
                    
                    let centrosActualizados = JSON.parse(localStorage.getItem("centros"));
            
                    centrosActualizados.forEach(function(centro) {
                        let centroInfo = `
                            <p><strong>Centro Nº</strong> ${centro.nro}</p>
                            <p><strong>Localidad:</strong> ${centro.localidad}</p>
                            <p><strong>Dirección:</strong> ${centro.direccion}</p>
                            <p><strong>Teléfono:</strong> ${centro.telefono}</p>
                            <hr>
                        `;
                        resultadoDiv.innerHTML += centroInfo;
                    });
            
                    centrosVisible = true;
                }
            });

        }

