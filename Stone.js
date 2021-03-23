class Stone{
   constructor()
   {
       var options = {
           isStatic = true
       }

       this.stoneImage = loadImage(polygon.png);

       stone.body = Bodies.rectangle(stone.x,stone.body,stone.width,stone.height);
       stone.x = x;
       stone.y = y;
       stone.width = width;
       stone.height = height;
       World.add(world,stone.body);


   }   

   display()
   {
       image(this.stoneImage,200,height/2);
       var pos = stone.body.position;
       translate(pos.x,pos.y);
       push();
       rectMode(CENTER);
       rect(pos.x,pos.y,width,height);
       pull();
   }
}