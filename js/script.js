// Función para mostrar la tarjeta de login
function mostrarLogin() {
    const loginCard = document.getElementById("loginCard");
    loginCard.classList.remove('ocultar');
    loginCard.classList.add('mostrar');
    loginCard.style.display = 'block'; // Aseguramos que esté visible cuando se active la animación
}

// Función para cerrar la tarjeta de login
function cerrarLogin() {
    const loginCard = document.getElementById("loginCard");
    loginCard.classList.remove('mostrar');
    loginCard.classList.add('ocultar');
    
    // Esperamos el tiempo de la animación antes de ocultar la tarjeta completamente
    setTimeout(() => {
        loginCard.style.display = 'none'; // Ocultamos la tarjeta después de la animación
    }, 500); // 500ms es el tiempo de duración de la animación
}

// Validación de formulario
function validarFormulario() {
    let esValido = true;
    
    // Validación de usuario
    const username = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    if (username.value.trim() === '') {
        username.classList.add('error');
        usernameError.textContent = 'El campo de usuario es obligatorio.';
        esValido = false;
    } else {
        username.classList.remove('error');
        usernameError.textContent = '';
    }

    // Validación de contraseña
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (password.value.trim() === '') {
        password.classList.add('error');
        passwordError.textContent = 'El campo de contraseña es obligatorio.';
        esValido = false;
    } else {
        password.classList.remove('error');
        passwordError.textContent = '';
    }

    return esValido;
}
