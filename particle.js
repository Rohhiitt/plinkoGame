class particle{
    constructor(x,y) {
      var options =  {
          restitution : 1,
          friction : 0,

      } 
      this.r = 10;
      this.body = Bodis.circle(x,y, this.r,options);
      this.color=color(random(0,225), random(0,225), random(o, 255));
      World.add(world, this.body);
    }
    display(){
        //fill(this.color);
    }
}