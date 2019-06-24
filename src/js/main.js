$('#show-more').click(function() {
    $('#more').show();
    $('#show-more').hide();
});

var slide_left = document.getElementById('left_arrow'),
    slide_right = document.getElementById('right_arrow'),
    rew_left = document.getElementById('left_arrow_rew'),
    rew_right = document.getElementById('right_arrow_rew'),
    total_art = document.getElementsByClassName('article'),
    total_rew = document.getElementsByClassName('reviews'),
    idx = 0; // Индекс текущего слайда.

slide_right.addEventListener('click', moveLeft);
function moveLeft(){

    total_art[idx].style.display = 'none'; // Скрываем текущий слайд

    if (idx === total_art.length - 1) { idx = total_art.length - 1;}
    else {idx += 1;}

    total_art[idx].style.display = 'flex'; // показываем следующий слайд
    if (idx === total_art.length - 1) { // Убираем "правую" стрелку, если справа слайдов больше нет
        slide_right.style.display = 'none';
    } else {
        slide_right.style.display = 'inline-block';
        slide_left.style.display = 'inline-block';
    }
}

slide_left.addEventListener('click', moveRight);
function moveRight(){

    total_art[idx].style.display = 'none'; // hide current

    if (idx === 0) { idx = 0;}
    else {idx -= 1;}

    total_art[idx].style.display = 'flex'; // show next slide

    if (idx === 0) {
        slide_left.style.display = 'none';
    } else {
        slide_left.style.display = 'inline-block';
        slide_right.style.display = 'inline-block';
    }
}

rew_right.addEventListener('click', moveLeftRew);
function moveLeftRew(){

    total_rew[idx].style.display = 'none'; // Скрываем текущий слайд

    if (idx === total_rew.length - 1) { idx = total_rew.length - 1;}
    else {idx += 1;}

    total_rew[idx].style.display = 'block'; // показываем следующий слайд
    if (idx === total_rew.length - 1) { // Убираем "правую" стрелку, если справа слайдов больше нет
        rew_right.style.display = 'none';
    } else {
        rew_right.style.display = 'inline-block';
        rew_left.style.display = 'inline-block';
    }
}

rew_left.addEventListener('click', moveRightRew);
function moveRightRew(){

    total_rew[idx].style.display = 'none'; // hide current

    if (idx === 0) { idx = 0;}
    else {idx -= 1;}

    total_rew[idx].style.display = 'block'; // show next slide

    if (idx === 0) {
        rew_left.style.display = 'none';
    } else {
        rew_right.style.display = 'inline-block';
        rew_left.style.display = 'inline-block';
    }
}