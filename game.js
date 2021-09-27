class Game {
    constructor() {}

    getState() {
        var gameStateRef = database.ref('gamestate');
        gameStateRef.on("value", function(data) {
            gamestate = data.val();
        })
    }

    update(state) {
        database.ref('/').update({
            gamestate: state
        })
    }

    async start() {

        if (gamestate === 0) {
            jugador = new player();
            var playercountRef = await database.ref('playercount').once("value");
            if (playercountRef.exists()) {
                playercount = playercountRef.val();
                jugador.getCount();
            }

            formulario = new form();
            formulario.display();
        }
    }
    play() {
        formulario.hide();
        textSize(30);
        text("vamos a empezar", 120, 180);
        player.getPlayerInfo();
        if (jugadores !== undefined) {
            var display_position = 130;
            for (var plr in jugadores) {
                if (plr === 'jugador' + jugador.index)
                    fill("red")
                else
                    fill("black")
                display_position += 20;
                textSize(15);
                text(jugadores[plr].nombre + ":" + jugadores[plr].distance, 120, display_position);
            }
        }
        if (keyIsDown(UP_ARROW) && jugador.index !== null) {
            jugador.distance += 50;
            jugador.update();
        }
    }
}