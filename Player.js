class Player{
    constructor(){
        //defining variables inside constructor
        this.index=null;
        this.name=null;
        this.distance=0;
    }

    //reading the value  count of the player from the database
getCount(){

    var playerCountRef=database.ref('playerCount');
    playerCountRef.on("value",function(data){
        playerCount=data.val();
    })
}

//updates the count in database
updateCount(count){
    database.ref('/').update({
        playerCount: count
    });

}
// we need to change the reference to the database as all the players now are going to be inside
//"players" in the database. We will use the property 'index' of the player to update that particular
//player's values in the database.
//so deleting name
//and we will create two variables

update(){
var playerIndex= "players/player" + this.index; //concatenating the playercount with player text
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
});

}

//get the values from the players folder to get the player1.... and so on uptill 4 
static getPlayerInfo(){
    var playerInfoRef=database.ref('players');
    playerInfoRef.on("value",(data =>{      //arrow function is used to make the function more dynamic
        allPlayers=data.val();          //Arrow function ensures that 'this' remains bound to the form object
    }))
}

}