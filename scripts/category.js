import {category, get_category} from './data/categoryData.js'
import {set_selected_product_id} from './data/singleProductData.js'






function render_category_page() {
    let productGridHtml = "";
    let products = get_category();
    products.forEach((product)=>{
        productGridHtml += `
            <div class="product_container">
                <div class="box_product_thumbnail">
                    <a href="singleProduct.html">
                        <img class="product_thumbnail" src=${product.thumbnail} data-product-id="${product.id}">
                    </a>
                </div>
                <div class="box_product_details">
                    <div class="box_product_name">
                        <p class="basic">New!</p>
                        <p class="product_name">${product.title}</p>
                    </div>
                    <div class="box_product_price">
                        <p class="basic">Rs. ${product.price}</p>
                    </div>
                </div>
            </div>
        `
    })
    document.querySelector('.category_name').innerHTML = `CATEGORY ${category}`;
    document.querySelector('.products_grid').innerHTML = productGridHtml;




    document.querySelectorAll('.product_thumbnail')
        .forEach((imgLink) => {
            let {productId} = imgLink.dataset;
            imgLink.addEventListener('click', () => {
                set_selected_product_id(productId);
            })
        })
}

render_category_page();