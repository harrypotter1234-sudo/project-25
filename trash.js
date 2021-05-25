class trash123
{
constructor(x,y)
{
    var options={
        restitution:0.3,
        friction:0,
        density:0, 
        isStatic:false
    }

this.image=loadImage("paper.png")        
this.y=y
this.x=x
this.body=Bodies.circle(x,y,20,options)
this.image = loadImage("paper.png")
World.add(world, this.body)
 }

display()
{
var trash1pos=this.body.position
push();
translate(trash1pos.y,trash1pos.x)
imageMode(CENTER)
image(this.image,this.y,this.x,50,50)  
//ellipseMode(CENTER)
//ellipse(this.y,this.x,20,20)
pop(); 
}
}




    

























