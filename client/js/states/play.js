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
            
            // aiTurn: true,
            // playerTurn: false,
            
            currentTurn: 0,
            
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
    
                
                // this.gameLogic.gameOver = true;
                
                
                
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
        // startButton = game.add.sprite(350, 250, 'blue-square');
        
        // startButton.inputEnabled = true;
        // startButton.events.onInputDown.add(this.gameLogic.startGame, this);
        
        redSquare.inputEnabled = true;
        redSquare.events.onInputDown.add(this.redClicked, this);
        
        blueSquare.inputEnabled = true;
        blueSquare.events.onInputDown.add(this.blueClicked, this);
        
        greenSquare.inputEnabled = true;
        greenSquare.events.onInputDown.add(this.greenClicked, this);
        
        yellowSquare.inputEnabled = true;
        yellowSquare.events.onInputDown.add(this.yellowClicked, this);
        // this.gameLogic.startGame();
        
    },
    
    redClicked: function(){
        console.log('Red clicked');
        this.gameLogic.coloursPickedPlayer.push("red");
        this.increasePlayerPos();
    },
    
    blueClicked: function(){
        console.log('Blue clicked');
        this.gameLogic.coloursPickedPlayer.push("blue");
        this.increasePlayerPos();
    },
    
    yellowClicked: function(){
        console.log('Yellow clicked');
        this.gameLogic.coloursPickedPlayer.push("yellow");
        this.increasePlayerPos();
    },
    
    greenClicked: function(){
        console.log('Green clicked');
        this.gameLogic.coloursPickedPlayer.push("green");
        this.increasePlayerPos();
    },
    
    update: function(){
        // If gameOver is ever true, load the gameOver state
        
        if (this.gameLogic.gameOver){
            game.state.start('gameOverState');
        }
        
        if(this.gameLogic.currentTurn == 0){
            this.aiTurn();
        }
        
        else if(this.gameLogic.currentTurn == 1){
            
            // If the player's array length is 0, ignore it
            
            // If the array lengths are the same, switch it to AI turn, because
            // player has made it through round
            
            if(this.gameLogic.coloursPickedAI.length == this.gameLogic.coloursPickedPlayer.length){
                this.gameLogic.currentTurn = 0;
            }
            
            if(this.gameLogic.coloursPickedPlayer.length == 0){
                // console.log("Nothing in array")
                // Probably don't need this clause at all... useful for dev
            }
            
            else if(this.gameLogic.coloursPickedPlayer.length > 0){
                // If the player's array length is > 0, then compare
                // the player's position in both arrays
                
                console.log("AI colours:", this.gameLogic.coloursPickedAI)
                
                if(this.gameLogic.coloursPickedPlayer[this.gameLogic.playerPosInArray-1] == this.gameLogic.coloursPickedAI[this.gameLogic.playerPosInArray-1]){
                    console.log("Correct")
                }
                else if(this.gameLogic.coloursPickedPlayer[this.gameLogic.playerPosInArray-1] != this.gameLogic.coloursPickedAI[this.gameLogic.playerPosInArray-1]){
                    this.gameLogic.gameOver = true;
                }
                
                // Pressing the squares will increase player position
                // Disabling the squares will stop player from increasing when
                // not their turn
                
            }
            
        }
        
    },
    
    aiTurn: function(){
        this.gameLogic.coloursPickedAI.push(this.gameLogic.pickRandomColour());
        this.gameLogic.illuminateAIColours(this.gameLogic.coloursPickedAI);
        this.gameLogic.currentTurn = 1;
        // Reset the player array and player position after player turn
        this.gameLogic.playerPosInArray = 0;
        this.gameLogic.coloursPickedPlayer = [];
    },
    
    increasePlayerPos: function(){
        this.gameLogic.playerPosInArray++;
    }
    
    // Need to change sprites to graphics drawn by Phaser. Then you can adjust
    // other properties, e.g. the fillColour (or whatever it is called!)
    
}


// Could try disabling/greying out the squares when it's the AI turn





// Let's try this:

// Use the update function to see what turn it is

// If it's the AI's turn, call the function that picks a colour and illuminates
// the buttons
// Within the above stage, there is a function that updates to the player's turn

// On player's turn call a function that checks to see if the game has ended

// When the player clicks on a square, it triggers a function that adds that
// colour to the array and then checks to see if it matches what the AI had in
// their hand at that position. 
// If it does, then nothing happens.
// If it doesn't then gameOver is set to true and the update function
// triggers gameOver load state.
// When the length of the player's hand matches the length of the AI's hand, as
// gameOver hasn't been triggered, it changes to the AI's turn