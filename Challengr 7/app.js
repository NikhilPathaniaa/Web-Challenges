

async function products()
{
    const response = await fetch('./products.json')
    const data = await response.json();

    document.write(data["icons"]) 
}
