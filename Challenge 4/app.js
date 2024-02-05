// let a=document.querySelectorAll("div")
// window.addEventListener("keypress",check)
// window.addEventListener("keyup",check1)

window.addEventListener('keydown',(e)=>{
    let a=`${e.key}`
    document.querySelector(`#${a}`).style.border = "2px solid red";
    console.log(a);
}, false);

window.addEventListener('keyup',(e)=>{
    let a=`${e.key}`
    document.querySelector(`#${a}`).style.border = "2px solid black";
    console.log(a);
}, false);



// function check()
// {
//     if(event.key=="a")
//         document.querySelector("#a").style.border = "2px solid red";
//     else if(event.key=="s")
//         document.querySelector("#s").style.border = "2px solid red";
//     else if(event.key=="d")
//         document.querySelector("#d").style.border = "2px solid red";
//     else if(event.key=="f")
//         document.querySelector("#f").style.border = "2px solid red";
//     else if(event.key=="g")
//         document.querySelector("#g").style.border = "2px solid red";
//     else if(event.key=="h")
//         document.querySelector("#h").style.border = "2px solid red";
//     else if(event.key=="j")
//         document.querySelector("#j").style.border = "2px solid red";
//     else if(event.key=="k")
//         document.querySelector("#k").style.border = "2px solid red";
//     else if(event.key=="l")
//         document.querySelector("#l").style.border = "2px solid red";
// }
// function check1()
// {
//     if(event.key=="a")
//         document.querySelector("#a").style.border = "2px solid black";
//     else if(event.key=="s")
//         document.querySelector("#s").style.border = "2px solid black";
//     else if(event.key=="d")
//         document.querySelector("#d").style.border = "2px solid black";
//     else if(event.key=="f")
//         document.querySelector("#f").style.border = "2px solid black";
//     else if(event.key=="g")
//         document.querySelector("#g").style.border = "2px solid black";
//     else if(event.key=="h")
//         document.querySelector("#h").style.border = "2px solid black";
//     else if(event.key=="j")
//         document.querySelector("#j").style.border = "2px solid black";
//     else if(event.key=="k")
//         document.querySelector("#k").style.border = "2px solid black";
//     else if(event.key=="l")
//         document.querySelector("#l").style.border = "2px solid black";
// }