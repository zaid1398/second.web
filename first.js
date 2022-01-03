/** Take three i/p from the user & show the minimum number. */

var a = prompt("I/p first num");
var b = prompt("I/p second num");
var c = prompt("I/p third numb");
if(a<=b && a<=c){
    alert("Minimum num is: "+a);
}
else if(b<=a && b<=c){
    alert("Minimum num is: "+b);
}
else{
    alert("Minimum num is: "+c)
}
