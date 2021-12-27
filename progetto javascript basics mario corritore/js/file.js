var number=0;

let div = document.createElement('div');
div.id="container";
document.body.append(div);

let btn=document.createElement('div');
btn.id="btn";
div.appendChild(btn);

let dec= document.createElement('button');
dec.innerHTML="-";
dec.id="decrement";
dec.className="element";
btn.appendChild(dec);

let val=  document.createElement('div');
val.id="val";
val.className="element";
val.innerHTML=number;
btn.appendChild(val);

let inc= document.createElement('button');
inc.innerHTML="+";
inc.id="decrement";
inc.className="element";
btn.appendChild(inc);

inc.onclick= function increment(){
    number++;
    val.innerHTML=number;
}

dec.onclick= function decrement(){
    if (number !=0) {
        number--;
    }
    val.innerHTML=number;
    }


