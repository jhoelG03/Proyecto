document.getElementById('modoOscuro').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Resalta la sección activa en la barra de navegación
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelectorAll("nav ul li a").forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });

});
function pausarVideo(id) {
    document.getElementById(id).pause();
}
function adelantarVideo(id, segundos) {
    let video = document.getElementById(id);
    video.currentTime += segundos;
}

