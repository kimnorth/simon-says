var playState = {
    
    test: function(){
        console.log("Test works")
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
    }
    
}