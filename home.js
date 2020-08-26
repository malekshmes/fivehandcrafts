/*var name = prompt('what is your name?')
var hight;
var gender;
console.log('the name',name);
console.log('the hight',hight);
console.log('the gender',gender);
 
if(name=='malek')
function verifying(){
//input
  hight = prompt('what is your hight?')
  //proccess
  if(hight >= 180){
   
   document.write(' <h4> your are allowed <h4> ')
  }
  else {
    alert('you are not allowed to enter');
  }
//output 
return verifying

} 
verifying();


// function calcuArea(width, hight){

//   var area = width * hight;
//   return area;
// }

*/


// function fun(){
// }
// fun();

// var input = prompt(' what is your like to watch ? Movies or Series !');

// while(input !== 'movies' && input !=='series'){
//   // input1=prompt('try again , series');
//   input=prompt('try again');
// }
// alert('correct');

// input--> songs --> while--> false -->try again      
// input -->  cars --> while --> false-->try again 
// input --> series --> while --> true --> done ( out of the loop)
/*function forLoop(){
  var input = prompt('how many item you would like to print ?')
  for(var i=0;i<=input;i++){
  if (i===0){
    document.write('<h1> hello</h1>')
  } else if (i=== 1) {
    document.write('<h2> hello</h2>')
  } else if (i=== 2) {
    document.write('<h3> hello</h3>')
  } else if (i ===3) {
    document.write('<h4> hello</h4>')
  } else {
  console.log('nothing more ');
  }
  } // end of for 
          
  alert('DONE');*/
// end of function 

//input = 4 
// i = 0 --> con is true --> add item 
// i = 1 --> true --> add item 
// i = 2 --> true --> add item 
// i = 3 --> true --> add item 
// i = 4 --> false --> done 
// lab07
function gendertype() {
  var yourname = prompt("what is your name? ");
  var gender = prompt("what is your gender: ");
  //proccessing
  if (gender === "female") {
    //alert("your gender is: ", gender)
    document.write("<h2> your gender is: " + gender + " </h2>");
  } else {
    alert("other gender", gender)
    document.write("<h2> sorry mr. " + yourname + " </h2>");
  }
  //output
  return gender;
}/*
var hobby = prompt ("what is your hobby")
var YourHobby =function(){
while ( hobby == "skiing" && hobby == "running")
return hobby; 
} */ 
