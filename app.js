status = '';
img = '';
objetos = [];


function setup(){
    canva = createCanvas(800, 500);
    canva.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function preload(){
    img = loadImage('tv.jpg');
}

function modelLoaded(){
    console.log('Modelo Carregado');
    status = true;
    objectDetector.detect(img, gotResults);
}

function draw(){
    image(img, 0,0,800,500);
    objectDetector.detect(img, gotResults);
        for(i = 0; i < objetos.length; i++){
            document.getElementById('status').innerHTML = objetos.length +' Objetos Detectados';
            fill('white');
            porcentagem = floor(objetos[i].confidence * 100);
            text(objetos[i].label + " " + porcentagem + '%', objetos[i].x + 15, objetos[i].y + 20) 
            noFill();
            stroke('red');
            rect(objetos[i].x - (objetos[i].width / 2), objetos[i].y, objetos[i].width , objetos[i].height);
    }
}

function quarto(){
    img = loadImage('quarto.png');

}

function tv(){
    img = loadImage('tv.jpg');

}


function animais(){
    img = loadImage('animais.webp');

}

function rodovias(){
    img = loadImage('u8as.jpg');

}

function gotResults(error, results){
    console.log(results);
    if(error){
        console.log(error);
    }
    else{
        objetos = results;
    }
}