var loadState = {
    
    preload: function(){
        
        try {
            console.log('Loading assets.');
            
            game.load.image('background', '../img/wood.jpg');
            game.load.image('red-square', '../img/red_square.png');
            game.load.image('blue-square', '../img/blue_square.png');
            game.load.image('green-square', '../img/green_square.png');
            game.load.image('yellow-square', '../img/yellow_square.png');

            console.log('Assets loaded.');
        }
        catch(err){
            console.log(err);
        }
        
    },
    
    create: function(){
        game.state.start('menu')
    }
    
}