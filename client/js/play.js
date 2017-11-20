var background;
var redSquare;
var yellowSquare;
var greenSquare;
var blueSquare;

// var testClass = class {

       
// }

var playState = {
    
    preload: function(){
        
        this.testObject = {
            testFunction: function(){
                console.log("Test function works.")
                console.log(this)
            }.bind(this)
        },
        
        // **** Game Logic Object *** //
        
        this.gameLogic = {
            
            // Will eventually contain hexcodes for colours. Probably need to
            // change sprites to graphics drawn by phaser.
            
            colours: [
              "blue",
              "red",
              "yellow",
              "green"
            ],
            
            colourSequence: [],
            
            getRandomNumber: function(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
            },
            
            randomNum: this.gameLogic,
            
            pickRandomColour: function(){
                var randomNum = this.gameLogic.getRandomNumber(1, 4);
                this.gameLogic.colourSequence.push(this.gameLogic.colours[randomNum-1])
                for (let colour of this.gameLogic.colourSequence){
                    console.log(colour)
                }
                console.log("Array of picked colours:", this.gameLogic.colourSequence);
            }.bind(this)
        }
        
    },
    
    create: function(){
        
        // Testing Functions, Objects

        background = game.add.sprite(0, 0, 'background');
        redSquare = game.add.sprite(100, 100, 'red-square');
        blueSquare = game.add.sprite(600, 100, 'blue-square');
        greenSquare = game.add.sprite(100, 400, 'green-square');
        yellowSquare = game.add.sprite(600, 400, 'yellow-square');
        
        redSquare.inputEnabled = true;
        redSquare.events.onInputDown.add(this.clicked, this);
        
    },
    
    clicked: function(){
        this.gameLogic.pickRandomColour(1, 4);
    }
    
}