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
                console.log("AI Colours:", this.coloursPickedAI)
                // This will eventually hold logic for lighting squares
                // for (colour in aiColours){
                //     console.log(aiColours[colour])
                // }
            },
            
            startGame: function(){
                
            }.bind(this),
        }
        
    },
    
    create: function(){

        background = game.add.sprite(0, 0, 'background');
        
        redSquare = game.add.graphics()
        blueSquare = game.add.graphics()
        yellowSquare = game.add.graphics()
        greenSquare = game.add.graphics()
        
        this.setupSquareButtons();
        
        redSquare.inputEnabled = true;
        redSquare.events.onInputDown.add(this.redClicked, this);
        
        blueSquare.inputEnabled = true;
        blueSquare.events.onInputDown.add(this.blueClicked, this);
        
        greenSquare.inputEnabled = true;
        greenSquare.events.onInputDown.add(this.greenClicked, this);
        
        yellowSquare.inputEnabled = true;
        yellowSquare.events.onInputDown.add(this.yellowClicked, this);
        
    },
    
    setupSquareButtons: function(){
        redSquare.beginFill(0xAF3514, 1);
        redSquare.drawRect(20, 20, 370, 270);
        redSquare.endFill();
        
        blueSquare.beginFill(0x121EA9, 1);
        blueSquare.drawRect(410, 20, 370, 270);
        blueSquare.endFill();
        
        yellowSquare.beginFill(0xD8D815, 1);
        yellowSquare.drawRect(20, 300, 370, 280);
        yellowSquare.endFill();
        
        greenSquare.beginFill(0x12B41A, 1);
        greenSquare.drawRect(410, 300, 370, 280);
        greenSquare.endFill();
    },
    
    redClicked: function(){
        console.log('Red clicked');
        this.gameLogic.coloursPickedPlayer.push("red");
        this.increasePlayerPos();
        // console.log(redSquare)
        // redSquare.tint = '#fff'
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
                
                if(this.gameLogic.coloursPickedPlayer[this.gameLogic.playerPosInArray-1] != this.gameLogic.coloursPickedAI[this.gameLogic.playerPosInArray-1]){
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