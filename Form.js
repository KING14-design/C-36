class Form{
    constructor()
    {
        this.title=createElement("H2")
        this.input=createInput("Name")
       this.button=createButton("START")
      this.greeting=createElement("H2")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()

    }
    display(){
        
        this.title.html("Car racing game")
        this.title.position(130,0)
        
        this.input.position(130,150)
        
        this.button.position(200,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.Name=this.input.value()
            playerCount+=1
            player.update()
            player.updateCount(playerCount)
            
            this.greeting.html("hello"+ player.Name)
            player.index=playerCount
            this.greeting.position(130,150)
           
        })
    }
}