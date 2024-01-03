let first = true;
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