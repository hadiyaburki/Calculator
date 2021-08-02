var n1,n2
var b1
var v1,v2
var s1
function setup() {
  createCanvas(400,400);
  n1 = createInput().attribute("placeholder","Enter Number 1")
  n2 = createInput().attribute("placeholder","Enter Number 2")
  n1.position(25,100)
  n2.position(200,100)
  b1 = createButton("Add")
  b1.position(20,250)
  b1.mousePressed(addition)
  s1 = createButton("Subtract")
  s1.mousePressed(subtract)
  s1.position(100,250)
}

function addition(){
console.log(v1+v2)
}

function subtract(){
console.log(v1-v2)
}

function draw() 
{
  background(30);
v1=parseInt(n1.value())
v2=parseInt(n2.value())
}




