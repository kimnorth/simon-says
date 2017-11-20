var playState = {
    
    test: function(){
        console.log("Test function works")
    },
    
    preload: function(){
        
        this.testObject = {
            testFunction: function(){
                console.log("Test function works.")
            }
        };
        
    },
    
    create: function(){
        this.test();
        this.testObject.testFunction();
        game.add.sprite(0, 0, 'background');
        game.add.sprite(100, 100, 'red-square');
        game.add.sprite(600, 100, 'blue-square');
        game.add.sprite(100, 400, 'green-square');
        game.add.sprite(600, 400, 'yellow-square');
    }
    
}

var testClass = class {

       
}