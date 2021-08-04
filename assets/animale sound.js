var audio = document.querySelector('.audio');
var animaleName = document.querySelector('.animaleName');

function animaleSound(element){
    var sound = element.getAttribute('data-sound');
    audio.src = sound;
    audio.play();

    var name = element.getAttribute('data-text');
    animaleName.innerHTML = name;

    element.style.background = '#BFC9CA';
    $(element).siblings().css('background','none');
}