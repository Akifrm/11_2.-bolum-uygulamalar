$('#menuler1').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.fa-angle-left'),
    nextArrow: $('.fa-angle-right'),
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        }
    ]
});

$('.slick').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.slick2').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 940,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 690,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.musterilerin-yorumlari').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 881,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

let first = true;
window.addEventListener('resize', (e) => {
    $('.musterilerin-yorumlari').slick("refresh");
    $('.slick2').slick("refresh");

    if (document.body.clientWidth <= 1024) {
        const menuler = document.getElementById('menuler');
        const anasayfa = document.getElementById('anasayfa');
        const lezzet = document.getElementById("lezzet")

        anasayfa.classList.add('active-a');
        lezzet.classList.remove('active-a');
        menuler.classList.add('deactive');
        first = true;
    }
});


function menuOpen() {
    const menuler = document.getElementById('menuler');
    const anasayfa = document.getElementById('anasayfa');
    const lezzet = document.getElementById("lezzet");

    if (first) {
        menuler.classList.remove('deactive');
        anasayfa.classList.remove('active-a');
        lezzet.classList.add('active-a');
        first = false;
        $('#menuler1').slick("refresh");
    } else {
        menuler.classList.add('deactive');
        anasayfa.classList.add('active-a');
        lezzet.classList.remove('active-a');
        first = true;
        $('#menuler1').slick("refresh");
    }
}

function menu() {
    const menu = document.getElementsByClassName('menu')[0];
    const menu_button = document.getElementsByClassName('menu-button')[0];
    const menu_button_x = document.getElementsByClassName('menu-button-x')[0];

    menu_button.classList.remove('active');
    menu_button_x.classList.add('active');
    menu.classList.add('active');
}

function menuClose() {
    const menu = document.getElementsByClassName('menu')[0];
    const menu_button = document.getElementsByClassName('menu-button')[0];
    const menu_button_x = document.getElementsByClassName('menu-button-x')[0];

    menu_button.classList.add('active');
    menu_button_x.classList.remove('active');
    menu.classList.remove('active');

    const menuler = document.getElementById('menuler');
    const anasayfa = document.getElementById('anasayfa');
    const lezzet = document.getElementById("lezzet");

    menuler.classList.add('deactive');
    anasayfa.classList.add('active-a');
    lezzet.classList.remove('active-a');
    first = true;
    $('#menuler1').slick("refresh");
}

$('.slick').mouseover(() => {
    if (document.body.clientWidth + 10 < 700) return;
    $('.siparis').css('display', 'flex');
    $('.container-absolute2-yazilar').css('display', 'block');
});

$('.siparis').mouseover(() => {
    if (document.body.clientWidth + 10 < 700) return;
    $('.siparis').css('display', 'flex');
    $('.container-absolute2-yazilar').css('display', 'block');
});

$('.slick').mouseout(() => {
    $('.siparis').css('display', 'none');
    $('.container-absolute2-yazilar').css('display', 'none');
});