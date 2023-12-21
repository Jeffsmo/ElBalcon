document.addEventListener('DOMContentLoaded', function() {
    fetch('ruta/backend?parametrosdeconsulta=x')
        .then(response => response.json())
        .then(response => {
            ruta_img = response.src;
            img = document.getElementById('img-03');
            img.src = ruta_img; 
        });
});