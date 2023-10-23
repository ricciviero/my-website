function sendMail() {
    window.location.href = 'mailto:riccardociviero@outlook.com';
}

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    let menu = document.querySelector('.page-container');
    if(menu.classList.contains('mobile-hidden')) {
        menu.classList.remove('mobile-hidden');
    } else {
        menu.classList.add('mobile-hidden');
    }
});
