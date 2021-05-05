class Game{
    constructor()
    {}
    getState(){
        var gameref=database.ref("gameState")
        gameref.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerref=await database.ref("playerCount").once("value")
            if(playerref.exists()){
                playerCount=playerref.val()
                player.getCount()
            }
            
            form=new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        text("gameStart",100,100)
        Player.getplayerinfo()
        if(allPlayers!==undefined){
            var position=130
            for(var plr in allPlayers){
                text(allPlayers[plr].Name + ":"+allPlayers[plr].distance,100,position)
                position+=40
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
player.distance += 15
player.update()
        }
    }
}