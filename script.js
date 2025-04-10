document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carrusel img');
    let current = 0;

    // Función para cambiar la imagen visible
    function changeImage() {
        images[current].style.display = 'none'; 
        current = (current + 1) % images.length; 
        images[current].style.display = 'block'; 
    }

    images[current].style.display = 'block'; 
    setInterval(changeImage, 3000); 
});



// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    dropbtn.onclick = function() {
        document.querySelector('.dropdown-content').style.display = 'block';
    };

    // Cerrar el dropdown si se hace clic fuera de él
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.style.display === 'block') {
                    openDropdown.style.display = 'none';
                }
            }
        }
    };
});


document.addEventListener('DOMContentLoaded', function() {
    const dropBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropBtn.onclick = function() {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    };

    // Cerrar el menú si se hace clic fuera de él
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    };
});
