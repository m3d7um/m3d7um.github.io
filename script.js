window.addEventListener('load', function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
        preloader.classList.add('preloader-hidden');
    }, 990);
});
