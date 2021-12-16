let valore=0;

function increment(){
valore++;
document.getElementById("val").innerHTML=valore;
}

function decrement(){

if (valore !=0) {
    valore--;
}
document.getElementById("val").innerHTML=valore;
}