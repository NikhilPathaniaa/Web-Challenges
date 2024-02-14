let inp = document.querySelector("select")
let btn=document.querySelector("#selectBtn")
let h2=document.querySelector("#h2")

btn.addEventListener("click",()=>{
    let dataValue=inp.value
    if(dataValue=='USA')
    {
        h2.innerText=`${dataValue}`
    }
    else if(dataValue=='India')
    {
        h2.innerText=`${dataValue}`
    }
    else if(dataValue=='Japan')
    {
        h2.innerText=`${dataValue}`
    }
    else if(dataValue=='Paris')
    {
        h2.innerText=`${dataValue}`
    }
    else if(dataValue=='Italy')
    {
        h2.innerText=`${dataValue}`
    }
    
})