class player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.nombre = null;
    }

    getCount() {
        var playercountRef = database.ref('playercount');
        playercountRef.on("value", (data) => {
            playercount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playercount: count
        })
    }

    update() {
        var playerIndex = 'jugadores/jugador' + this.index;
        database.ref(playerIndex).set({
            nombre: this.nombre,
            distance: this.distance
        })
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('jugadores');
        playerInfoRef.on("value", (data) => {
            jugadores = data.val();
        })
    }
}