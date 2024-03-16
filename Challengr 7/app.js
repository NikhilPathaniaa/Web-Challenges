const PopPorducts = document.querySelector(".parent-card");

products();
async function products()
{
    const response = await fetch('./products.json')
    const products = await response.json();

    products.forEach((product)=>
    {
        const { id, name, price, images } = product;
        PopPorducts.innerHTML +=`<div class="product-card" data-product-id="${id}">
                        <div class="product-card_img">
							<img src="${images[0].url}" alt="${name}" />
						</div>
                        <div class="product-card_description">
						    <div class="product-card_text">${name}</div>
						    <div class="product-card_price">${price}</div>
					    </div>
        </div>`
        console.log(product);
    })
    
}
