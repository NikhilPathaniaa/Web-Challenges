const PopPorducts = document.querySelector(".parent-card");

products();
async function products()
{
    const response = await fetch('./products.json')
    const data = await response.json();

    data.map((i)=>
    {
        const { id, name, price, images } = i;
        PopPorducts.innerHTML +=`<div class="product-card" data-product-id="${id}">
                        <div class="product-card_img">
							<img src="${images[0].url}" alt="${name}" />
						</div>
        </div>`
        console.log(i);
    })
    
}
