var gamestate = 0; //FALTA EL 0
var database;
var playercount;

var formulario;
var game;
var jugador;
var jugadores;
var distance = 0;

function setup() {
    createCanvas(500, 500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    background("white");
    if (playercount === 4) {
        game.update(1);
    }

    if (gamestate === 1) {
        clear();
        game.play();
    }
}