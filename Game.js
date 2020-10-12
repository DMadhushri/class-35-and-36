class Game{
  constructor(){  
  }
//reads the game state from the database
getState(){
  
      var gameStateRef=database.ref('gameState');  // refers to database and with gamestate value
      gameStateRef.on("value",function(data){      //listens to the changes in the value
          gameState=data.val();
      })
}

//this will update the database,it refers to main database inside which gamestate has been created
update(state){
database.ref('/').update({
    gameState:state
})
}

// start the game and display the form and playercount on the screen
async start(){
        if(gameState===0){
            player=new Player();
            var playercountRef=await database.ref('playerCount').once ("value");
            if(playercountRef.exists()){
              playerCount=playercountRef.val();
              player.getCount();
            }
            
            form=new Form();
            form.display();
}
}

play(){
form.hide();//hiding the form .calling hide function
//dissplay message on the screen that the game starts
textSize(30);
text("Game Start",120,100);

//Get all the players data and display them on the screen.
//this is a static function so class name while calling the function
Player.getPlayerInfo();

//if we get all the players , display name of all players 

if(allPlayers!==undefined){
  var display_position=130;//

  for(var plr in allPlayers){
    display_position+=20;
    textSize(15);
    text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,display_position);
  }

}
if(keyIsDown(UP_ARROW) && player.index !==null){
player.distance+=50;
player.update();
}
}
}
