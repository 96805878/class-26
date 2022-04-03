
class Cannonball{

    constructor(x,y){
     
        this.radius=30

        var cannonballOptions={

            isStatic:true

        }

        //this.x = x;

        this.body=Bodies.circle(x,y,this.radius,cannonballOptions)
        World.add(world,this.body)
        this.image=loadImage("assets/cannonball.png")

    }

    shoot(){
        
        var angle=cannon.angle-30;
        //C0nverting to radians
        var radAngle=angle*(3.14/180);
        var velocity=p5.Vector.fromAngle(radAngle)
        velocity.mult(0.5)
        Body.setStatic(this.body,false);
        Body.setVelocity(this.body,{
            x: velocity.x * (180/3.14),
            y: velocity.y * (180/3.14) });
    }
    
    display(){


        push();
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();


    }
        
    cannonballRemove(index){
        Body.setVelocity(this.body,{x:0,y:0});
        
        setTimeout(()=>{
           
            World.remove(world,this.body)
            delete cannonballs[index]
        },1000);

    }
    
}

/*
Arrow function - Binds the property/function to the original object & not to the immediate object that called it.
name = () => {}
() => {}

function(para1, para2){}
*/
