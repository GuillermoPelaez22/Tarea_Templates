// Pone el año actual en el pie de página al cargar la web
document.addEventListener('DOMContentLoaded', function () {
    var anyo = document.getElementById('anyo');
    if (anyo) {
        anyo.textContent = new Date().getFullYear();
    }
});