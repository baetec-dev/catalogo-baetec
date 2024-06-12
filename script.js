document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("modal-politicas");
    var btn = document.getElementById("abrirModal");
    var background = document.getElementById("modal-background");
    var fechar = document.getElementById("fechar-modal");

    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    background.onclick = function(){
        modal.style.display = "none";
    }

    fechar.onclick = function () {
        modal.style.display = "none"
    }
});
