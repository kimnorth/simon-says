var gameOverState = {
    
    create: function(){
        console.log("Game over screen loaded.")
        background = game.add.sprite(0, 0, 'background');
        replayButton = game.add.button(350, 250, 'blue-square', this.reloadGame, this);
    },
    
    reloadGame: function(){
        game.state.start('play');
    }
    
}