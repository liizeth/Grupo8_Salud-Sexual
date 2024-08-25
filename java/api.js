document.getElementById('botonRosa').addEventListener('click', () => {
    const userContainer = document.getElementById('usuarios');
    
    // Verificar si el contenedor está visible o no
    if (userContainer.style.display === 'none' || userContainer.style.display === '') {
        // Si está oculto, hacemos la solicitud a la API y mostramos los usuarios
        fetch("https://reqres.in/api/users")
            .then(response => response.json())
            .then(data => {
                userContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos usuarios
                data.data.forEach(user => {
                    const userDiv = document.createElement('div');
                    userDiv.innerHTML = `<p><strong>${user.first_name} ${user.last_name}</strong></p>
                                        <p>Email: ${user.email}</p>
                                        <img src="${user.avatar}" alt="${user.first_name}" style="width:50px; height:50px;">`;
                    userContainer.appendChild(userDiv);
                });
                userContainer.style.display = 'flex'; // Mostrar el contenedor con flexbox
            })
            .catch(error => {
                console.log('Error:', error);
            });
    } else {
        // Si está visible, lo ocultamos
        userContainer.style.display = 'none';
    }
});


