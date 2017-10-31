var loadState = {
    
    preload: function(){
        game.load.image('background', '../img/wood.jpg');
    },
    
    create: function(){
        game.state.start('menu')
    }
    
}