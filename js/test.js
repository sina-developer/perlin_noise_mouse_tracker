var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");

var height = canvas.height;
var width = canvas.width;

let dx = 0;
// noise.seed(0);

let cx = width / 2;
let mouseX = width / 2;
let cy = height / 2;
let mouseY = height / 2;

window.addEventListener("mousemove" , (e)=>{    
    mouseX = e.offsetX;
    mouseY = e.offsetY;
})

function draw(){
    
    ctx.fillStyle = "#ffffff0a";
    ctx.fillRect(0,0,width , height);
    ctx.translate(cx,cy);
    // ctx.beginPath();
    // ctx.moveTo(0,0);
    // ctx.lineTo(width , 0);
    // ctx.closePath();
    // ctx.stroke();

    ctx.beginPath();
    var m_noise = noise.perlin3;
    var l_noise = noise.perlin2;


    // var spacing = 25;
    var size = 10;
    var scale = width / 2;
    var radius = 1000;
    
    let circle_size = 100 + l_noise(dx / scale / 10 , dx / scale / 10) * 200;
    for (let i = 0; i < Math.PI * 2; i+=0.1) {
        let mx = radius * Math.cos(i);
        let my = radius * Math.sin(i);
        let value = m_noise( mx / scale,my / scale , dx / scale) * size ;
        // ctx.lineTo(i * spacing , value);
        let r = circle_size + value ;
        // console.log(r);
        
        let x = (r * Math.cos(i)); 
        let y = (r * Math.sin(i));
        ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.stroke();

    ctx.translate(-cx  ,-cy  );    
    dx += 35;

    if(cx < mouseX){
        cx++;
    }else if(cx > mouseX){
        cx--;
    }

    if(cy < mouseY){
        cy++;
    }else if(cy > mouseY){
        cy--;
    }
}

// draw();
setInterval(draw, 1000 / 60);