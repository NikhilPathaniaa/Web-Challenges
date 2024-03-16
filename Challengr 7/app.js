let btn = document.querySelector("#btn");

function getInputValue(){
    let inputVal = document.getElementById("myInput").value;
    romun(inputVal);
}

async function romun(x)
{
    console.log(x);
    
    const response = await fetch('num.json')
    const name = await response.json();

    if(name == x) {console.log(`<h1>${name} is ${x}</h1>`);     }  
}
