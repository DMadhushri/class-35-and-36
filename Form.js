class Form{
    //defining variables in the constructor
      constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement("h2");
       }
       //once we change the game state to play the elements should hide
     hide(){
          this.greeting.hide();
          this.input.hide();
          this.button.hide();
     }
    
    
       display(){
          //different DOM elements to be displayed while displaying the form
            var title=createElement("h2");   //h2 is the highest size of heading
            title.html("THE CAR RACING GAME ");
           
            title.position(300,2);
    
            //rectangular box position
            this.input.position(400,200);
             //greetings position
             this.greeting.position(250,200);
             // button
            this.button.position(400,250);
    
    
           // button.mousePressed();  
            //this event will happen when the mouse is pressed 
            //once it is pressed we want to play the game
            //hide the form elements,updating the player count when each player logs in 
            //updating the name with agreeting display
            this.button.mousePressed(()=>{
              this.input.hide();
              this.button.hide();
              player.name = this.input.value();
              playerCount+=1;
              player.index = playerCount;
              player.update();
              player.updateCount(playerCount);
              this.greeting.html("Hello " + player.name)
              this.greeting.position(130, 100);
            });
    }
    
    }