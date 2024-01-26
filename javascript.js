const gridValue = document.querySelector('.grid-size');
const canvas = document.querySelector('.drawing.area');
const ctx = canvas.getContext('2d');
const toolbar = document.querySelector('.toolbar');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;


let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if (e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }
    if (e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
})

const draw = (e) => {
    if(!isPainting) {
        return;
    } 
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
})

canvas.addEventListener('mousemove', draw);








