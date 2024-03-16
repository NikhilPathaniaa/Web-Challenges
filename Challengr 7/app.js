
products();
async function products()
{
    const response = await fetch('./products.json')
    const data = await response.json();

    const value = data.map((i)=>
    {
        let value1=[];
        value1=data[0+i-1]
        return value1;
    })
    console.log(value);
    
}
