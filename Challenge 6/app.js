let btn = document.querySelector("#btn")
let space = document.querySelector("#jokes")
let emoji = document.querySelector("#emoji")

async function randomJokes()
{
    const response = await fetch("./Jokes.json")
    const jokes = await response.json();
    
    emojis = ["😂", "😜", "😎", "😊", "🤣", "😆", "😍", "🤔", "😱", "🥳","😋", "😄", "🤗", "😇", "🤩", "🥺", "🤪", "🤓", "😏", "🤭"]
    
    let e = Math.floor((Math.random()) * emojis.length)
    
    let x = Math.floor((Math.random()) * jokes.length )
    console.log( emojis[e])

    const {type,setup,punchline} = jokes[x];
    
    emoji.innerHTML = `<div>${emojis[e]}</div>`
    space.innerHTML = `<p id="setup">${setup}</p>
                    <p id="punchline">${punchline}</p>`; 
}

function clearSpace(){space.innerHTML=""}