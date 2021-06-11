class Slider {
  constructor(){
    this.box = [];  // selector boxes in slider
    this.bL = 3;  // number of selector boxes
    this.pos = []; //temp array for boxes

    this.w = 400;
    this.h = 100;

    this.sx = 0;
    this.sy = 0;
    this.bool = false;
    this.colorPicker = [];  //array of color picker boxes
}
setupSlider(){
  
  for(let i = 0; i < this.bL; i++){                   //create array
    this.colorPicker[i] = createColorPicker(color(random(255),random(255),random(255)));//randomize picker colours
    
    this.colorPicker[i].position(((width/2)/(this.bL-1))*i, height + 5);              //move color picker
    this.colorPicker[i].input(this.changeCol);          //run changecol on color picker selection
    
    this.box[i] = new Box(i);                                                    //create new selector box 

    this.pos[i] = [];                                                            //initialize temp array;

    
  }
  this.changeCol();
}
s(){
  
  this.setupSlider(); //function to create slider
  
  this.u();
  

  
  for(let i = 0; i < this.bL; i++){
  this.box[i].d();
    
  }
  

  

  

  
}

changeCol(){//update selector box colors from color picker colors
  print("changed")
  for(let i = 0; i < 3; i++){
     
    slider.box[i].c= slider.colorPicker[i].color();
    
  }
}
u(){

  for(let i = 0; i < this.bL; i++){ //setup temp boxes ( the array uses the location as its first dimension to sort the
  this.pos[i][0] = this.box[i].y         //                  color indexes)
  this.pos[i][1] = this.box[i].index     // index is used to properly interpolate between the sliders
  this.pos[i][2] = this.box[i].selected; 
  this.pos[i][3] = this.box[i].c;

    }
  
  this.pos.sort(this.sortFunction);//sorts first dimension of temporary array

  for(let i = 0; i < this.bL; i++){  //copys temporary array variables to selected box;
    this.box[i].selected = this.pos[i][2];
    this.box[i].c = this.pos[i][3];

  }
  
  this.d();
  
  for(let i = 0; i < this.bL; i++){
  this.box[i].d();
  
  }
  
} 
getColor(value){
    
   let k = value*2;
 
  let c = this.box[0].c;
   
      
     for(let i = 0; i < 2; i++){
        if(k*height>this.box[i].y&&k*height<this.box[i+1].y){
          let m = map(k*height*2,this.box[i].y,this.box[i+1].y,0,1);
          c = lerpColor(this.box[i].c,this.box[i+1].c,m);

          
       }
       
    }
  if(k*height>this.box[1].y){

    let m = map(k*height,this.box[1].y,this.box[2].y,0,1);
    c = lerpColor(this.box[1].c,this.box[2].c,m);
  }
  
    return c;

    
    
}
d(){

  for(let i = 1 ; i < this.bL-1; i++){
     
    for(let j = 0; j < height; j++){
      
        let k;

      let col = this.box[0].c;
      
          if(j<this.box[0].y){ //exception for box 0. this box needs the 0 location of the slider as its first variable
             k = map(j,0,this.box[0].y,0,1);     //map the location from 0 -> Box.x to 0 -> 1 
            
            col = lerpColor(this.box[0].c,this.box[1].c,k)  //interpolate color
          }

       
          else{  // interpolate between current box and next box
          k = map(j,this.box[i].y,this.box[i+1].y,0,1); //map the location from box.x -> nextBox.x to 0 -> 1 

            col = lerpColor(this.box[i].c,this.box[i+1].c,k)  //interpolate color
          }

        
        
        stroke(col); //the gradient is drawn using an array of lines across the screen.
        noFill();    // each line is only 1 pixel wide so stroke() is used instead of fill
        line(0,j,menuSize/sx,j); // draw lines from top left to bottom right of slider
        
    }
  }
}
sortFunction(a, b) { 

    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
  
}

  
  mousePressed(MX,MY){
     
  for(let i = 0; i < this.bL; i++){
    if(MY>=this.box[i].y-this.box[i].s&&MY<=this.box[i].y+this.box[i].s){   // check if mouse is inside box
      this.box[i].selected = true;  //set box to selected
    }
  }
}


  mouseDragged(MX,MY){
    let c = 0;
  for(let i = 0; i < this.bL; i++){
    if(this.box[i].selected){
      c++;
      if(c<=1){
      this.box[i].y = MY;  //move slider to mouseY
      if(this.box[i].y>height){  // constrain selector box to slider
        this.box[i].y= height;
      }
      if(this.box[i].y<0){
        this.box[i].y= 0;
      }
      }
      
    }
    this.pos[i][0] = this.box[i].y;  // set temp box x and index to current selected box
    this.pos[i][1] = this.box[i].index;
  }
  this.u();  // update boxes
}
 mouseReleased(){
  for(let i = 0; i < this.bL; i++){ // unselect boxes

      this.box[i].selected = false;

    }
  this.u();
   
}
}
class Box{ //selector box class
  constructor(i){
    
    this.index = i;  

    this.y = ((height)/(slider.bL-1))*i // location is equal to width divided by the number of boxes -1

    this.c = color(255)    // box color
    this.s = 25;  //slider box size
    this.selected = false;  //boolean if box is selected
    
  }
  d(){

    fill(this.c);
    
    if(this.selected == true){ // if box is selected, draw a white border around it
      stroke(255);
    }
    else{
      stroke(0);
    }
    
    rect(menuSize/sy/2,this.y,this.s,this.s);

  }
}
