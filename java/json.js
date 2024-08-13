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

// Guardar los datos iniciales en localStorage
localStorage.setItem("centros", datos);

// Obtener los datos desde localStorage y convertirlos en un array de objetos
let centros = JSON.parse(localStorage.getItem("centros"));


// Mostrar el formulario cuando se hace clic en el botón
document.getElementById("mostrarFormulario").addEventListener("click", function() {
    document.getElementById("centroForm").style.display = "block";
});

// Capturar la información del formulario y agregar el nuevo centro
document.getElementById("centroForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar que el formulario se envíe automáticamente

    let nue = {
        nro: document.getElementById("nro").value,
        localidad: document.getElementById("localidad").value,
        direccion: document.getElementById("direccion").value,
        telefono: document.getElementById("telefono").value
    };

    centros.push(nue);  // Agregar el nuevo centro a la lista
    localStorage.setItem("centros", JSON.stringify(centros));  // Actualizar localStorage

    console.log("El centro fue agregado.");

    // Opcional: Ocultar el formulario después de agregar el centro
    document.getElementById("centroForm").reset();  // Limpiar el formulario
    document.getElementById("centroForm").style.display = "none";  // Ocultar el formulario
    document.getElementById("mostrarFormulario").style.display = "block";  // Mostrar el botón nuevamente
    alert ("El centro fue agregado");
});


function buscarCentro() {
}


// Funcionalidad para mostrar y ocultar los centros
let centrosVisible = false; // Variable de estado para saber si los centros están visibles

document.getElementById("imprimirCentros").addEventListener("click", function() {
    let resultadoDiv = document.getElementById("resultado");

    if (centrosVisible) {
        resultadoDiv.innerHTML = "";  // Limpiar el contenido para ocultar los centros
        centrosVisible = false;
    } else {
        resultadoDiv.innerHTML = "";  // Asegurarse de que esté vacío antes de agregar contenido

        // Volver a cargar los centros de localStorage para asegurarse de que esté actualizado
        let centrosActualizados = JSON.parse(localStorage.getItem("centros"));

        // Iterar sobre los centros y mostrarlos
        centrosActualizados.forEach(function(centro) {
            let centroInfo = `
                <p><strong>Número:</strong> ${centro.nro}</p>
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
