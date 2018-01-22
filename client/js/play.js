var background;
var redSquare;
var yellowSquare;
var greenSquare;
var blueSquare;

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
            
            coloursPicked: [],
            
            playerPositionInArray: 0,
            
            getRandomNumber: function(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
            },
            
            // randomNum: this.gameLogic,
            
            pickRandomColour: function(coloursPicked){
                var randomNum = this.gameLogic.getRandomNumber(1, 4);
                return this.gameLogic.colours[randomNum-1]
            }.bind(this),
            
            startGame: function(){
                console.log("GAME GAME GAME");
                var loss = false;
                var playerArray = [];
                
                // MAIN LOOP
                
                while(!loss){ // Currently just looping once through a turn
                    
                    // AI TURN
                    
                    var aiTurn = true;
                    var playerTurn = false;
                    
                    // AI Loop - pick colour, print out colours
                    
                    while(aiTurn){
                        this.gameLogic.coloursPicked.push(this.gameLogic.pickRandomColour());
                        
                        playerTurn = true;
                        break
                    }
                    
                    // Get length of AI array
                    
                    // var aiArrayLength = this.gameLogic.coloursPicked.length;
                    // console.log("AI length is:", aiArrayLength)
                    
                    while(playerTurn){
                        // Starting position of player
                        var currentPos = 0;
                        
                        // Randomly pick a starting colour
                        
                        playerArray.push(this.gameLogic.pickRandomColour());
                        
                        // If the currentPos of both arrays are not the same
                        
                        console.log("AI:", this.gameLogic.coloursPicked[currentPos]);
                        console.log("Player:", playerArray[currentPos]);
                        
                        if (playerArray[currentPos] != this.gameLogic.coloursPicked[currentPos]){
                            break;
                        }
                        else {
                            console.log("The same");
                            break;
                        }
                        
                        break
                    }
                    
                    break
                    
                    // PLAYER TURN
                    
                    
                
                    
                
                // Check To See If Won
                
                this.gameLogic.loseChecker(this.gameLogic.coloursPicked, playerArray);
                    
                }
                
            }.bind(this),
            
            loseChecker: function(pickedColours, playerColours){
                var arrayPos = 0;
                var pickedColoursLength = pickedColours.length;
                console.log(pickedColoursLength);
                console.log("Checking win/lose");
            }
        }
        
    },
    
    create: function(){
        
        // Testing Functions, Objects

        background = game.add.sprite(0, 0, 'background');
        redSquare = game.add.sprite(100, 100, 'red-square');
        blueSquare = game.add.sprite(600, 100, 'blue-square');
        greenSquare = game.add.sprite(100, 400, 'green-square');
        yellowSquare = game.add.sprite(600, 400, 'yellow-square');
        startButton = game.add.sprite(350, 250, 'blue-square');
        
        startButton.inputEnabled = true;
        startButton.events.onInputDown.add(this.gameLogic.startGame, this);
        
        redSquare.inputEnabled = true;
        redSquare.events.onInputDown.add(this.redClicked, this);
        
        blueSquare.inputEnabled = true;
        blueSquare.events.onInputDown.add(this.blueClicked, this);
        
    },
    
    redClicked: function(){
        console.log('Red clicked');
    },
    
    blueClicked: function(){
        console.log('Blue clicked');
    }
    
    // Need to change sprites to graphics drawn by Phaser. Then you can adjust
    // other properties, e.g. the fillColour (or whatever it is called!)
    
}