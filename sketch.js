


let slider;
let para = false;
let input;

let inputImage;
let img;
var grid;
var next;
let menuSize = 150;
var iterations = 1;
var dA = 1;
var dB = 0.5;
var feed = 0.055;
var k = 0.062;
var dT= 1;
let pause = false;
let resX =200;
let resY = 200;


let pauseButton ;
let playButton;
let pBButton;
function preload() {
  pauseButton = loadImage('pause.png');
  playButton = loadImage('play.png');
  saveButton = loadImage('save.png');
  pBButton = playButton;
  inputImage = playButton;
}

let menu = 0;

let sx;
let sy;
function styles(){
  menu = 2;
  hideButtons();
  button5.show();
  selc.hide();
  slider7.show();
  slider8.show();
  input.show();
}
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
    inputImage = img;
  } else {
    img = null;
  }

}
function setup() {

  
  mycanvas = createCanvas(windowWidth, windowHeight-200);
  slider = new Slider();
 slider.s();
      slider.u();
  width = width-menuSize;

  resX=width/10;
  resY=height/10;
  sx = width/resX;
  sy = height/resY;
  pixelDensity(1);
  grid = [];
  next = [];

  reset();
  Seed();
  menuStart(1,0.6,0.06,0.03,1,1)
 
}
function reset(){
  for (var x = 0; x < resX; x++) {
    grid[x] = [];
    next[x] = [];
    for (var y = 0; y < resY; y++) {
      grid[x][y] = {
        a: 1,
        b: 0
      };
      next[x][y] = {
        a: 1,
        b: 0
      };
    }
  }
}
function Seed(){
  for (var i = resX/2; i < resX/2+10; i++) {
    for (var j = resY/2; j < resY/2+10; j++) {
      let tx = round(i);
      let ty = round(j);
      grid[tx][ty].b = 1;
    }
  }
}
function randomize(){

  slider1.value(random(1));
  slider2.value(random(1));
  slider3.value(random(0.01, 0.09));
  slider4.value(random(0.01, 0.09));
  
  noiseSeed(random(20000))


}
function updateSliders(da,db,fe,gr,ti,st){
  slider1.value(da);
  slider2.value(db);
  slider3.value(fe);
  slider4.value(gr);
  slider5.value(ti);
  slider6.value(st);


}
function hideButtons(){
  button0.hide();
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
}
function param(){
  if(para){
    para=false
    hideSliders();
    
  }
  else{
    para=true;
    
    hideButtons();
    button5.show();
    
    selc.hide();
  slider1.show();
  slider2.show();
  slider3.show();
  slider4.show();
  slider5.show();
  slider6.show();
  }
}
function menuStart(da,db,fe,gr,ti,st){
  

  slider1 = createSlider(0, 1, da,0.01);//chemicala
  slider2 = createSlider(0, 1, db,0.01);//chemicalb
  slider3 = createSlider(0.01, 0.1, fe,0.0001);//kill
  slider4 = createSlider(0.01, 0.1, gr,0.0001);//feed
  slider5 = createSlider(0,1,ti,0.01); //reaction rate
  slider6 = createSlider(1,10,st,1); //iterations
  slider7 = createSlider(0,1,0,0.01);//noise a
  slider8 = createSlider(0,1,0,0.01);//noise b
  hideSliders();
  
  slider1.position(10, 55);
  slider2.position(10,115);
  slider3.position(10,175);
  slider4.position(10,235);
  slider5.position(10,295);
  slider6.position(10,355);
  slider7.position(10,115);
  slider8.position(10,175);
  
  slider1.style('width', '80px');
  slider2.style('width', '80px');
  slider3.style('width', '80px');
  slider4.style('width', '80px');
  slider5.style('width', '80px');
  slider6.style('width', '80px');
  slider7.style('width', '120px');
  slider8.style('width', '120px');
  button0 = createButton("PARAMETERS");
  button0.position(10,20);
  button0.style('width','130px')
  button0.mousePressed(param);
  
  button1 = createButton("RANDOMIZE");
  button1.position(10,50);
  button1.style('width','130px')
  button1.mousePressed(randomize);
  
  button2 = createButton("PLACE SEED")
  button2.position(10,80);
  button2.style('width','130px')
  button2.mousePressed(Seed);
  
  button3 = createButton("CLEAN")
  button3.position(10,110);
  button3.style('width','130px')
  button3.mousePressed(reset);
  
  button4 = createButton("COLOURS")
  button4.position(10,140);
  button4.style('width','130px')
  button4.mousePressed(colorMenu);
  
  button5 = createButton("BACK")
  button5.position(45,10);
  button5.style('width','100px')
  button5.mousePressed(back);
  button5.hide();
  
  button6 = createButton("RANDOMIZE")
  button6.position(45,40);
  button6.style('width','100px')
  button6.mousePressed(randomCol);
  button6.hide();
  
  button7 = createButton("STYLES")
  button7.position(10,170);
  button7.style('width','130px')
  button7.mousePressed(styles);

  
  selc = createSelect();
  selc.position(10,200);
  selc.option('clover')
  selc.option('cellular')
  selc.option('atomic')
  selc.option('walls')
  selc.option('diamond')
  selc.option('crystal')
  selc.option('dots')
  selc.option('snowflake')
  selc.option('flag')
  selc.option('bubbles')
  selc.option('fingerprint')
  selc.option('loop')
   selc.option('dotted')
  selc.option('wood')
  selc.option('negative bubbles')
  selc.option('repulsons')
  selc.option('sand')
  selc.option('moss')
   selc.option('strands')
  selc.option('brain')
  selc.option('pulsar')
  selc.option('fruit')
  selc.changed(mySelectEvent);
}
function mySelectEvent() {
  let item = selc.value();
  selc.selected(item);
  if(item=='clover'){
    updateSliders(1,0.6,0.06,0.03,1,1)
  }
  if(item=='cellular'){
   updateSliders(0.5,0.15,0.07,0.03,1,1)
  }
  if(item=='atomic'){
    updateSliders(0.87,0.09,0.06,0.02,1,1)
  }
  if(item=='walls'){
    updateSliders(0.77,0.04,0.09,0.05,1,1)
  }
   if(item=='diamond'){
    updateSliders(0.9,0.04,0.02,0.04,1,1)
  }
  if(item=='crystal'){
    updateSliders(0.77,0.13,0.07,0.06,1,1)
  }
  if(item=='dots'){
    updateSliders(0.94,0.13,0.09,0.08,1,1)
  }
  if(item=='snowflake'){
    updateSliders(0.61,0.02,0.05,0.03,1,1)
  }
  if(item=='flag'){
    updateSliders(0.25,0.03,0.05,0.07,1,1)
  }
  if(item=='bubbles'){
    updateSliders(0.57,0.12,0.06,0.03,1,1)
  }
  if(item=="fingerprint"){
    updateSliders(0.48,0.04,0.05,0.04,1,1)
  }
  if(item=="loop"){
    updateSliders(0.67,0.41,0.04,0.01,1,1)
  }
  if(item=="dotted"){
    updateSliders(0.86,0.03,0.07,0.01,1,1)
  }
  if(item=="wood"){
    updateSliders(0.83,0.01,0.02,0.02,1,1)
  }
  if(item=="negative bubbles"){
    updateSliders(0.96,0.17,0.05,0.02,1,1)
  }
  if(item=="repulsons"){
    updateSliders(0.96,0.17,0.05,0.01,1,1)
  }
  if(item=="sand"){
    updateSliders(0.22,0.0,0.04,0.07,1,1)
  }
  if(item=="moss"){
    updateSliders(0.38,0.03,0.05,0.02,1,1)
  }
  if(item=="strands"){
    updateSliders(0.98,0.75,0.01,0.03,1,1)
  }
  if(item=="roads"){
    updateSliders(0.98,0.75,0.01,0.02,1,1)
  }
  if(item=="brain"){
    updateSliders(0.62,0.01,0.03,0.05,1,1)
  }
  if(item=="pulsar"){
    updateSliders(0.38,0.94,0.03,0.01,1,1)
  }
  if(item=="fruit"){
    updateSliders(0.75,0.05,0.07,0.01,1,1)
  }

}
function randomCol(){

  for(i = 0; i < 3; i++){
    slider.box[i].c = color(random(255),random(255),random(255))
  }

}
function hideSliders(){
  slider1.hide();
    slider2.hide();
    slider3.hide();
    slider4.hide();
    slider5.hide();
    slider6.hide();
  slider7.hide();
  slider8.hide();
}
function back(){
  menu = 0;
  para= false;
  hideSliders();
  selc.show();
  showButtons();
  button5.hide();
  button6.hide();
  input.hide();
  
}
function showButtons(){
  button0.show();
    button1.show();
    button2.show();
    button3.show();
    button4.show();
  button5.show();
  button6.show();
    button7.show();
}
function colorMenu(){
  menu = 1;
  
    hideSliders();
    hideButtons();
    selc.hide();
  button5.show();
  button6.show();
  
}
function menuUpdate(){
  
  if(menu==0){
  dA = slider1.value();
  dB = slider2.value()
  k = slider3.value();
  feed = slider4.value();
  dT = slider5.value();
  iterations = slider6.value();

  textSize(3);


  fill(255);
  if(pause==false){
  textSize(3);

    if(para==true){
  push();
    scale((1/sy)*50)
    
  text("Chemical A", 1,10);
    
  text("Chemical B", 1,20.5);
  text("Fade Rate", 1,31);
  text("Grow Rate", 1,44);
  text("Time Rate",1,55.5)
  text("Time Step",1,67)
    
    textSize(4);
    text("- "+dA.toFixed(2),20,14.5);
    text("- "+dB.toFixed(2),20,26.5);
    text("- "+k.toFixed(2),20,38.5);
    text("- "+feed.toFixed(2),20,50.5);
    text("- "+dT.toFixed(2),20,62.5);
    text("- "+iterations.toFixed(2),20,74.5);
  pop();
    }
  }
  }
  if(menu==1){
    slider.u();

  }
  if(menu==2){
    push();
    scale((1/sy)*50)
  fill(255);
  noStroke();
  text("Noise A: " + slider7.value(), 1,20);
  text("Noise B: " + slider8.value(), 1,32); 
  
   
  pop();
  }
}
function draw() {
  if(pause==false){
  background(51);
 for(let it = 0; it < iterations; it++){
  for (var x = 1; x < resX - 1; x++) {
    for (var y = 1; y < resY - 1; y++) {
     

      
      var a = grid[x][y].a;
      var b = grid[x][y].b;
      next[x][y].a = a +
        ((dA * laplaceA(x, y)) -
        (a * b * b) +
        (feed * (1 - a)))*dT;
      next[x][y].b = b +
        ((dB * laplaceB(x, y)) +
        (a * b * b) -
        ((k + feed) * b))*dT;
      next[x][y].a*=1+(((noise(x*0.1,y*0.1,x*y)*0.1)*slider7.value()))
      next[x][y].b*=1+((noise(x*0.1,y*0.1,x*y)*slider8.value())*0.1)
      
  
      next[x][y].a = constrain(next[x][y].a, 0, 1);
      next[x][y].b = constrain(next[x][y].b, 0, 1);
      
    }
  }
   swap();
 }

  loadPixels();

  for (let x = 0; x < resX; x++) {
    for (let y = 0; y < resY; y++) {

      let a = next[x][y].a;
      let b = next[x][y].b;
      let c = 1-(a+b)
      
      let hue = slider.getColor(c);
      
  
      
          set(x+(menuSize/sx),y,hue)
        
        
      
      
    }
  }
  }
  updatePixels();
  
  
  
  img = get();
  push();
  scale(sx);
  imageMode(CORNER);
  image(img,0,0);
    pop();
  
  menuUpdate();
  if(pause==true){
    pBButton=pauseButton;
  }
  else{
    pBButton=playButton;
  }

  imageMode(CENTER);
  image(pBButton,height/30,height-height/20,height/10,height/10)
  image(saveButton,height/8.5,height-height/20,height/15,height/15)
}


function laplaceA(x, y) {
  var sumA = 0;
  sumA += grid[x][y].a * -1;
  sumA += grid[x - 1][y].a * 0.2;
  sumA += grid[x + 1][y].a * 0.2;
  sumA += grid[x][y + 1].a * 0.2;
  sumA += grid[x][y - 1].a * 0.2;
  sumA += grid[x - 1][y - 1].a * 0.05;
  sumA += grid[x + 1][y - 1].a * 0.05;
  sumA += grid[x + 1][y + 1].a * 0.05;
  sumA += grid[x - 1][y + 1].a * 0.05;
  return sumA;
}

function laplaceB(x, y) {
  var sumB = 0;
  sumB += grid[x][y].b * -1;
  sumB += grid[x - 1][y].b * 0.2;
  sumB += grid[x + 1][y].b * 0.2;
  sumB += grid[x][y + 1].b * 0.2;
  sumB += grid[x][y - 1].b * 0.2;
  sumB += grid[x - 1][y - 1].b * 0.05;
  sumB += grid[x + 1][y - 1].b * 0.05;
  sumB += grid[x + 1][y + 1].b * 0.05;
  sumB += grid[x - 1][y + 1].b * 0.05;
  return sumB;
}
function touchStarted(){
 let tx = touches[0].x;
 let ty = touches[0].y;
  if(tx<height/10&ty>height-height/10&ty<height){

    pause = toggle(pause);
  
  }
  if(tx<menuSize&tx>height/10&ty>height-height/10&ty<height){

    
     let outputImage = get(menuSize,0,width,height);
    save(outputImage,"output.png")
  
  }
  let mx = floor(tx/sx);
  let my = floor(ty/sy);
  
  if(menu ==1){
    slider.mousePressed(tx,ty);
  }
  slider.u();
}
function touchEnded(){
      
  let mx = floor(touches[0].x/sx);
  let my = floor(touches[0].y/sy);
  if(menu ==1){
    slider.mouseReleased();
  }
  slider.u();
}
function touchMoved(){
      
  let mx = floor(touches[0].x/sx);
  let my = floor(touches[0].y/sy);
  let radius = 10;
  if(menu ==1){
    slider.mouseDragged(touches[0].x,touches[0].y);
  }
  else{
  if(touches[0].x>menuSize+(radius*sx)){
  
  
  if(mx>5&mx<resX-5+menuSize/sx){
    if(my>5&my<resY-5){
      for(let i = -5; i < 5; i++){
        for(let j = -5; j < 5; j++){
          let dist = createVector(0,0).dist(createVector(i,j));
          if(dist<5){
            if(mouseButton==LEFT){
        grid[floor((touches[0].x-menuSize)/sx+i)][floor(touches[0].y/sy+j)].b = 1;
            }
            if(mouseButton==RIGHT){
        grid[floor((touches[0].x-menuSize)/sx+i)][floor(touches[0].y/sy+j)].a = 1;
            }
          }
      }
      }
    }
  }
  }
  }
  slider.u();
}

function keyPressed(){
  if(key=='p'||key=='P'){
    pause = toggle(pause);

  }
}
function toggle(bool){
  if(bool){
    bool=false;
  }
  else{
    bool=true;
  }
  return bool;
}
function swap() {
  var temp = grid;
  grid = next;
  next = temp;
}