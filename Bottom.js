class Bottom
{
    constructor()
    {
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(this.x,this.body,this.width,this.height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;    
        World.add(world,this.body);                       
    }

    display()
    {
        var pos = this.body .position;
        translate(pos.x,pos.y);
        push();
        rectMode(CENTER);
        fill(red);
        rect(pos.x,pos.y,width,height);
        pull();                                                                                     

        

    }
}