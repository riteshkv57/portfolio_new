function avg(a, b) {
    return (a + b) / 2;
}

c1 = avg(4, 6);
c2 = avg(c1, 10);
// console.log(c1,c2);

/*
var age=6;
if(age >8){
    console.log('You are not a kid');
}
else if(age>32){
    console.log('You are not a kid');
}
else
console.log('You are a kid');
*/

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]+1);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// const ac=0;
// ac++;


/*
var j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}


let myarr=["fan","camera",34,null,true];
// array methods
console.log(myarr);
// myarr.push('ritesh');
// myarr.pop();
// myarr.shift();
const newlen = myarr.unshift("Harry");
console.log(myarr);
*/

// string method in javascript
let mystring="Harry is a good boy good good good";
// console.log(mystring.length);
// console.log(mystring.lastIndexOf("good"));
// console.log(mystring.slice(3,10 ));

// replace method
d=mystring.replace("Harry","Rohan");
d=d.replace("good","bad");
// console.log(d,mystring);

let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getMinutes());

// DOM manipulation

// let elem = docuent.getElementsById('click');
// console.log(elem);

// let elemClass=document.getElementsByClassName("container");
// console.log(elemClass);

// DOM manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass =document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn=document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('p');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2,createdElement);
// //  removeChild(element);  -----> removes an element

// // selecting using query
// sel =document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

// function clicked(){
//     console.log('The button was clicked');
// }
// window.onload = function(){
//     console.log('The document was loaded');
// }

// event in javascript
// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML ="<b> We have clicked</b>"
//     console.log("click hua");
// })

// firstcontainer.addEventListener('mouseover', function(){
//     console.log("mouse on container");
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log("mouse out of container");
// })
 
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML =prevHTML;

//     console.log("mouse up when clicked on container");
// })

// firstcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML ="<b> We have clicked</b>"
//     console.log("mouse down when clicked on container");
// })

// arrow function
// function summ(a,b){
//     return a+b;
// }
summ =(a,b)=>{
    return a+b;
}

logkaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML ="<b> set interval fired</b>"
    console.log("I am your log");
}
// setTimeout and setinterval
// setTimeout(logkaro,6000);
// setInterval(logkaro,6000);

// local storage
// localStorage.setItem('name','harry')
// localStorage
// localStorage.getItem('name')

// json
// obj = {name: "harry",length:1}
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso);
// parsed = JSON.parse('{"name":"harry","length":1}')
// console.log(parsed);
