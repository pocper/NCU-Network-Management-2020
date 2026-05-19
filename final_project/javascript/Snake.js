let ax = ay = 10
let sx = sy = 15
let vx = vy = 0
let trail = []
let score = 0
let lengthSnake = 3
let overlap = 1;
const winWidth = winHeight = 400
const grid = 20

window.onload = function () {
    c = document.getElementById('gc')
    ctx = c.getContext('2d')
    document.addEventListener("keydown", control)
    setInterval(game, 1000 / 15)
}

function game() {

    sx += vx
    sy += vy
    if (sx > 20) {
        sx = 0
    }
    if (sx < 0) {
        sx = 20
    }
    if (sy > 20) {
        sy = 0
    }
    if (sy < 0) {
        sy = 20
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, winWidth, winHeight);

    ctx.fillStyle = "lime";
    for (let i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * grid, trail[i].y * grid, grid - 2, grid - 2);
        if (trail[i].x == sx && trail[i].y == sy) {
            lengthSnake = 3
        }
    }

    ctx.fillStyle = "red";
    ctx.fillRect(ax * grid, ay * grid, grid - 2, grid - 2);

    trail.push({ x: sx, y: sy })

    while (trail.length > lengthSnake) {
        trail.shift()
    }

    if (sx == ax && sy == ay) {
        lengthSnake++
        ax = Math.floor(Math.random() * grid)
        ay = Math.floor(Math.random() * grid)
        while (overlap) {
            for (let i = 0; i < trail.length; i++) {
                if (trail[i].x == ax && trail[i].y == ay) {
                    ax = Math.floor(Math.random() * grid)
                    ay = Math.floor(Math.random() * grid)
                    break;
                }
                if (i == trail.length - 1) {
                    overlap = 0;
                }
            }
        }
        score += 1
        overlap = 1;
    }
}
function control(e) {
    switch (e.keyCode) {
        case 37:
            vx = -1
            vy = 0
            break
        case 38:
            vx = 0
            vy = -1
            break
        case 39:
            vx = 1
            vy = 0
            break
        case 40:
            vx = 0
            vy = 1
            break
    }
}

function Page(name) {
    if (name == 'Home') {
        window.location.href = './index.html'
    }
    else if (name == 'AboutUs') {
        window.location.href = './AboutUs/AboutUs.html'
    }
    else if (name == 'Tower') {
        window.location.href = './Tower/Tower.html'
    }
    else if (name == 'Snake') {
        window.location.href = './Snake/Snake.html'
    }
}