let input = document.querySelectorAll(`input[type="text"]`)
let submit = document.querySelector(`input[type="submit"]`)
let

submit.addEventListener("click",(event)=>{
    event.preventDefault()

    let nameVal = input[0].value
    console.log(nameVal);
    wordMeaning(nameVal)
})

async function wordMeaning (word)
{
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const response = await fetch(url);
    const data = await response.json(); 
    

}