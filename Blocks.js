class Block
{
    constructor()
    {
        var options = {
            restitution : 1,
            friction : 2,
        }

        this.body = Bodies.rectangle(this.x,this.body,this.width,this.height);
        World.add(world,this.body);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y =y;
      }

    display()
    {
        var pos = this.body.position;
        translate(pos.x,pos.y);
        push();
        rectMode(CENTER);
        rect(pos.x,pos.y,width,height);
        pull();
                                                                                                                                                                                                                                                                 
    }
}