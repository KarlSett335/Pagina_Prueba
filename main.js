// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {

    // 1. EVENTO PRINCIPAL: Botón de "Empezar Ahora"
    const btnComenzar = document.getElementById('btn-comenzar');
    const mensaje = document.getElementById('mensaje-bienvenida');

    btnComenzar.addEventListener('click', () => {
        // Cambiar texto del botón
        btnComenzar.textContent = "¡Procesando...";
        btnComenzar.classList.remove('btn-primary');
        btnComenzar.classList.add('btn-success');

        // Mostrar mensaje oculto
        mensaje.classList.remove('d-none');

        console.log("El usuario hizo click en el botón principal");

        // Simular un retraso y restaurar
        setTimeout(() => {
            btnComenzar.textContent = "¡Empezar Ahora!";
            btnComenzar.classList.add('btn-primary');
            btnComenzar.classList.remove('btn-success');
            alert("¡Bienvenido a la experiencia!");
        }, 1000);
    });

    // 2. EVENTO MÚLTIPLE: Botones de las tarjetas
    // Seleccionamos todos los botones que tengan la clase .btn-info-card
    const botonesInfo = document.querySelectorAll('.btn-info-card');

    botonesInfo.forEach((boton, index) => {
        boton.addEventListener('click', (evento) => {
            // 'evento.target' es el elemento específico que fue clickeado
            const tarjeta = evento.target.closest('.card');

            // Cambiar el color de fondo de la tarjeta seleccionada
            tarjeta.style.backgroundColor = "#f8f9fa";
            tarjeta.style.border = "2px solid #667eea";

            console.log(`Click en la tarjeta número: ${index + 1}`);
        });
    });
});