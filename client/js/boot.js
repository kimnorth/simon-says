var bootState = {
    
    bootUp: function(){
        
        console.log('Booting...');
        
        try {
            game.state.start('load');
        }
        catch(err) {
            console.log(err.message);
        }
    },
    
    create: function(){
        this.bootUp();
    }
}