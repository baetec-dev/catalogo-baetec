function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
}

function showModal(){
    let dialog = document.querySelector("dialog");
    dialog.showModal();
}

function closeModal(){
    let dialog = document.querySelector("dialog");
    dialog.close();
}
