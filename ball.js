class ball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("polygon.png");
		this.ball=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.ball);

	}
	display()
	{
			var ballpos=this.ball.position;		
			push()
			translate(ballpos.x, ballpos.y);
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}

}