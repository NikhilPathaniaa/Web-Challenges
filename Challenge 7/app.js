const PopPorducts = document.querySelector(".most-popular-products");

products();
async function products()
{
    const response = await fetch('./products.json')
    const products = await response.json();

    products.forEach((product)=>
    {
        const { id, name, price, images } = product;
        PopPorducts.innerHTML +=`
        <div class="product-card" data-product-id="${id}">
            <div class="product-card__container">
                <div class="product-card__btn cart" data-tooltip="add to cart"><span class="material-symbols-rounded"> shopping_bag </span></div>
                <div class="product-card__btn fav" data-tooltip="add to wishlist"><span class="material-symbols-rounded"> favorite </span></div>
                <div class="product-card__img">
                    <img src="${images[0].url}" alt="${name}" />
                </div>
            </div>
            <div class="product-card__description">
                <div class="product-card__text">${name}</div>
                <div class="product-card__price">${price}</div>
            </div>

            <div class="product-card__color">
                ${images.map((image) => {
                    const { url, color } = image;

                    return `<button class="product-card__btn-radio" data-img="${url}">
                                <span style="background-color: ${color};"></span>
                            </button>`;
                }).join("")}
                
            </div>
        </div>`;
        console.log(product);
    })
    
}
