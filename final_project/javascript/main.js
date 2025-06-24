window.onload = function () {
    addEventListener('keydown', Key)
}
function Key(e) {
    let value = document.querySelector('#text').value

    if (e.keyCode == 13 && value.length != 0) {
        window.location.href = 'https://www.google.com/search?q=' + value
    }
}
function Page(name) {
    if (name == 'Home') {
        window.location.href = '/main.html'
    }
    else if (name == 'AboutUs') {
        window.location.href = '/AboutUs/AboutUs.html'
    }
    else if (name == 'Tower') {
        window.location.href = '/Tower/Tower.php'
    }
    else if (name == 'Snake') {
        window.location.href = '/Snake/Snake.html'
    }
}