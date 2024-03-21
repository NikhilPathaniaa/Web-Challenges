let btn = document.querySelector("#btn")
let space= document.querySelector("#jokes");

async function randomJokes()
{
    const response = await fetch("./Jokes.json")
    const jokes = await response.json();
    let x = Math.floor((Math.random()) * jokes.length )
    
    console.log( jokes[x])
    space.innerHTML += `<p>${jokes[x].joke}</p>`;
}

function clearSpace(){space.innerHTML=""}