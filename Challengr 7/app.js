let btn = document.querySelector("#btn");

function getInputValue(){
    let inputVal = document.getElementById("myInput").value;
    romun(inputVal);
}

async function romun(x)
{
    console.log(x);
    
    const response = await fetch('./youtube-api.json')
    const data = await response.json();

    document.write(data["icons"]) 
}
