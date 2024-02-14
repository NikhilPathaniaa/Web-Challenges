const apiKey ="72e82f29c6694eb0bcf91512241402";
const apiUrl ="http://api.weatherapi.com/v1/current.json?key=72e82f29c6694eb0bcf91512241402&q=bangalore&aqi=no";

async function checkWeather()
{
    const response = await fetch(apiUrl + ` &appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector("#h2").innerHTML=data.location.name;
    document.getElementById("temp").innerHTML=data.current.temp_c+ "°C" ; 
}

checkWeather();
// let inp = document.querySelector("select")   
// let btn=document.querySelector("#selectBtn")
// let h2=document.querySelector("#h2")

// btn.addEventListener("click",()=>{
//     let dataValue=inp.value
//     if(dataValue=='USA')
//     {
//         h2.innerText=`${dataValue}`
//     }
//     else if(dataValue=='India')
//     {
//         h2.innerText=`${dataValue}`
//     }
//     else if(dataValue=='Japan')
//     {
//         h2.innerText=`${dataValue}`
//     }
//     else if(dataValue=='Paris')
//     {
//         h2.innerText=`${dataValue}`
//     }
//     else if(dataValue=='Italy')
//     {
//         h2.innerText=`${dataValue}`
//     }
    
// })