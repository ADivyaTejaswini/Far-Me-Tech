const home=document.getElementById("home");
const weather=document.getElementById("weather");
const eshop=document.getElementById("e-shop");
const help=document.getElementById("help");
const msp=document.getElementById("msp");
const login=document.getElementById("login");

weather.onclick=function(){
    location.href="weather.html";
};
home.onclick=function(){
    location.href="home.html";
};
eshop.onclick=function(){
    location.href="e-shop.html";
};
help.onclick=function(){
    location.href="contactus.html";
};

login.onclick=function(){
    location.href="login.html";
};




var val=Math.random()
val=9000000000+val*1000000000;
val=val%10000000000;
console.log(val)