class form {
    constructor() {
        this.input = createInput("nombre");
        this.button = createButton('PLAY');
        this.saludo = createElement('h3');
    }

    hide() {
        this.saludo.hide();
        this.button.hide();
        this.input.hide();
    }

    display() {
        var title = createElement('h2');
        title.html("Juego de carreras de autos");
        title.position(130, 10);

        this.input.position(200, 200);
        this.button.position(200, 150);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            jugador.nombre = this.input.value();
            playercount += 1;

            jugador.index = playercount;
            jugador.update();
            jugador.updateCount(playercount);

            this.saludo.html("Bienvenido " + jugador.nombre);
            this.saludo.position(200, 100);
        })

    }
}