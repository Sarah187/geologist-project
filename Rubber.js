class Rubber{
	constructor(x,y,radius){
		var options = {
			isStatic: false,
			restitution:0.3,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=radius
		this.body=Bodies.circle(x, y, radius, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

			ellipse(10, 10, this.r, this.r)

			pop()
	}

}