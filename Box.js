class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
           restitution:0.08,
          friction:4.0,
            density:2.0
        }
        this.tt=255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        

        World.add(world, this.body);
       
      }
      display(){

        
        if(this.body.speed<4){
         
           

    
      
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke(0);
        rect(0, 0, this.width, this.height);
        pop();}
      
          else{
            World.remove(world,this.body);
           push();  
            this.tt=this.tt-10
            tint(0, this.tt)
            //rect(this.body.position.x,this.body.position.y,this.width,this.height)
           pop ();
          
          }
       
      
}


}

/*display(){
if(this.body.speed<3){
  Box.display();
}
else{
  World.remove(world,this.body);
 push();  
  this.tt=this.tt-10
  tint(0, this.tt)
  rect(this.body.position.x,this.body.position.y,this.width,this.height)
 pop ();
}}}*/

