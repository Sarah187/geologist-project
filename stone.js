class Stone{
	constructor(x,y,width,height){
		var options = {
			isStatic: false,
			restitution:0.3,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.height=height;
    this.width=width;
		this.body=Bodies.circle(x, y, width, height, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			rect(pos.x, pos.y, this.width, this.height);
			pop()
	}

}