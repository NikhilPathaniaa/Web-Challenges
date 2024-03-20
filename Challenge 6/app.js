let btn = document.querySelector("#btn")
const space= document.querySelector("#jokes");

async function randomJokes()
{
    const response = await fetch("./Jokes.json")
    const jokes = await response.json();

    jokes.forEach(jokes => {
        const {type,setup,punchline} = jokes;
        space.innerHtml = `<div >${punchline}</div>`
    });
}