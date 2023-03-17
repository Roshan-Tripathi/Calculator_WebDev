let num="";
function cal_fun()
{
    display.textContent=eval(num);
    num=eval(num);
}
let display=document.getElementById("dis");
let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let b5=document.getElementById("b5");
let b6=document.getElementById("b6");
let b7=document.getElementById("b7");
let b8=document.getElementById("b8");
let b9=document.getElementById("b9");
let bz=document.getElementById("zero");

let bdot=document.getElementById("dot");
let bplus=document.getElementById("bplus");
let bminus=document.getElementById("bminus");
let bequal=document.getElementById("equal");
let bmulti=document.getElementById("bmulti");

b1.addEventListener("click",()=>{
    num=num+"1";
    display.textContent=num;
});
b2.addEventListener("click",()=>{
    num=num+"2";
    display.textContent=num;
});
b3.addEventListener("click",()=>{
    num=num+"3";
    display.textContent=num;
});
b4.addEventListener("click",()=>{
    num=num+"4";
    display.textContent=num;
});
b5.addEventListener("click",()=>{
    num=num+"5";
    display.textContent=num;
});
b6.addEventListener("click",()=>{
    num=num+"6";
    display.textContent=num;
});
b7.addEventListener("click",()=>{
    num=num+"7";
    display.textContent=num;
});
b8.addEventListener("click",()=>{
    num=num+"8";
    display.textContent=num;
});
b9.addEventListener("click",()=>{
    num=num+"9";
    display.textContent=num;
});
bz.addEventListener("click",()=>{
    num=num+"0";
    display.textContent=num;
});
clear.addEventListener("click",()=>{
    num="";
    display.textContent=num;
});


bmulti.addEventListener("click",()=>{
    num=num+"*";
    display.textContent=num;
});
bminus.addEventListener("click",()=>{
    num=num+"-";
    display.textContent=num;
});
bplus.addEventListener("click",()=>{
    num=num+"+";
    display.textContent=num;
});
bdot.addEventListener("click",()=>{
    num=num+".";
    display.textContent=num;
});
bro.addEventListener("click",()=>{
    num=num+"(";
    display.textContent=num;
});
brc.addEventListener("click",()=>{
    num=num+")";
    display.textContent=num;
});
bdiv.addEventListener("click",()=>{
    num=num+"/";
    display.textContent=num;
});
bpow.addEventListener("click",()=>{
    num=num+"**";
    display.textContent=num;
});
bequal.addEventListener("click",cal_fun);