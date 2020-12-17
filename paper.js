class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1.3,
            friction:0,
            density:1
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world, this.body)
        this.r = r
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.r, this.r)
    }
}