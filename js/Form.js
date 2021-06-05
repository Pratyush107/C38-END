class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h1')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
   
    this.title.html("Car Racing Game");
    this.title.position(windowWidth/2-100, 0);

    this.input.position(windowWidth/2-100, 160);
    this.button.position(windowWidth/2-100, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(windowWidth/2-100, 100);
    });

  }
}
