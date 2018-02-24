var loadState = {
    
    preload: function(){
        
        try {
            console.log('Loading assets.');
            
            game.load.image('background', '../img/wood.jpg');
            // game.load.image('red-square', '../img/red_square.png');
            // game.load.image('blue-square', '../img/blue_square.png');
            // game.load.image('green-square', '../img/green_square.png');
            // game.load.image('yellow-square', '../img/yellow_square.png');

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


// 1.) Drawing a rectangle
// see also: https://sprite-storm.com/tutorial/phaser-tutorial/drawing-graphics-phaser/

// var drawnObject;
// var width = 100 // example;
// var height = 100 // example;
// var bmd = game.add.bitmapData(width, height);
 
// bmd.ctx.beginPath();
// bmd.ctx.rect(0, 0, width, height);
// bmd.ctx.fillStyle = '#ffffff';
// bmd.ctx.fill();
// drawnObject = game.add.sprite(game.world.centerX, game.world.centerY, bmd);
// drawnObject.anchor.setTo(0.5, 0.5);

// Can also tint the colour of sprites:

// https://phaser.io/examples/v2/sprites/sprite-tint

// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

// function preload() {

//     game.load.atlas('atlas', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');

// }

// var sprite;

// function create() {

//     sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'atlas', 'greenJellyfish0000');
//     sprite.anchor.set(0.5);

//     sprite.tint = Math.random() * 0xffffff;

//     game.input.onDown.add(changeTint, this);

// }

// function changeTint() {

//     sprite.tint = Math.random() * 0xffffff;

// }

// function update() {

//     sprite.rotation += 0.02;

// }