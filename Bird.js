//extends - to create a child class
class Bird extends Baseclass {
    constructor(x, y) {
      //used to inherit all the properties of base class
      super(x,y,50,50);
      //load the image
      this.image = loadImage("sprites/bird.png"); 
    };

    //override the display function
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display(); //to override the display function
    }
  };
  