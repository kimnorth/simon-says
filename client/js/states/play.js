var background;
var redSquare;
var yellowSquare;
var greenSquare;
var blueSquare;

var playState = {
    
    preload: function(){
        
        // **** Game Logic Object *** //
        
        this.gameLogic = {
            
            // Game State
            
            gameOver: false,
            score: 0,
            aiTurn: true,
            
            playerTurn: false,
            playerButtonPressed: false,
            playerPosInArray: 0,
            
            coloursPickedAI: [],
            coloursPickedPlayer: [],
            
            colourButtonsActive: false,
            
            colours: ["blue", "red", "yellow", "green"],
            
            // Game Functions
            
            getRandomNumber: function(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
            },
            
            pickRandomColour: function(coloursPicked){
                var randomNum = this.gameLogic.getRandomNumber(1, 4);
                return this.gameLogic.colours[randomNum-1]
            }.bind(this),
            
            illuminateAIColours: function(aiColours){
                console.log("AI Colours:")
                for (colour in aiColours){
                    console.log(aiColours[colour])
                }
            },
            
            lossChecker: function(aiArray, playerArray, currentPlayerPos){
                if(aiArray[currentPlayerPos] == playerArray[currentPlayerPos]){
                    console.log("This matches what the AI picked.");
                    return false;
                }
                else {
                    console.log(aiArray)
                    console.log(playerArray)
                    console.log("The colours do not match.")
                    return true;
                }
            },
            
            // MAIN LOOP
            
            startGame: function(){
                
                while(!this.gameLogic.gameOver){
                    
                    // AI Turn
                    
                    while(this.gameLogic.aiTurn){
                        this.gameLogic.coloursPickedAI.push(this.gameLogic.pickRandomColour())
                        this.gameLogic.illuminateAIColours(this.gameLogic.coloursPickedAI)
                        
                        // this.gameLogic.coloursPickedAI.push("red");
                        
                        this.gameLogic.score++;
                        console.log("Current score:", this.gameLogic.score);
                        this.gameLogic.playerTurn = true;
                        this.gameLogic.aiTurn = false;
                    }
                    
                    while(this.gameLogic.playerTurn){
                        
                        console.log("Player turn!");
                        console.log("Player current position in array:", this.gameLogic.playerPosInArray);
                        
                        // fire off loss checker - hard code with "red" for now
                        
                        // this.gameLogic.colourButtonsActive = true;
                        this.gameLogic.coloursPickedPlayer.push("red");
                        
                        console.log(this.gameLogic.lossChecker(this.gameLogic.coloursPickedAI, this.gameLogic.coloursPickedPlayer, this.gameLogic.playerPosInArray))
                        
                        // if(this.gameLogic.lossChecker(this.gameLogic.coloursPickedAI, this.gameLogic.coloursPickedPlayer, this.gameLogic.playerPosInArray)){
                        //     this.gameLogic.playerTurn = false;
                        //     this.gameLogic.gameOver = true;
                        //     console.log("Quitting main game function.");
                        // }
                        
                        this.gameLogic.playerTurn = false;
                    }
                    
                    this.gameLogic.gameOver = true;
                    
                }
                
                
                
                
                
            }.bind(this),
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
        
        // startButton.inputEnabled = true;
        // startButton.events.onInputDown.add(this.gameLogic.startGame, this);
        
        redSquare.inputEnabled = true;
        redSquare.events.onInputDown.add(this.redClicked, this);
        
        blueSquare.inputEnabled = true;
        blueSquare.events.onInputDown.add(this.blueClicked, this);
        
        this.gameLogic.startGame();
        
    },
    
    redClicked: function(){
        console.log('Red clicked');
        this.gameLogic.playerButtonPressed = true;
        // fire off loss checker
    },
    
    blueClicked: function(){
        console.log('Blue clicked');
        this.gameLogic.playerButtonPressed = true;
    },
    
    update: function(){
        // If gameOver is ever true, load the gameOver state
        
        if (this.gameLogic.gameOver){
            game.state.start('gameOverState');   
            // console.log("Game over!")
        }
        
    }
    
    // Need to change sprites to graphics drawn by Phaser. Then you can adjust
    // other properties, e.g. the fillColour (or whatever it is called!)
    
}