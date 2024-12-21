import {get_category} from './categoryData.js';


let selected_product_id = JSON.parse(localStorage.getItem("productID"));

export function set_selected_product_id(productID) {
    localStorage.setItem("productID", productID);
}

export function get_product() {
    let products = get_category();
    
    for (let i=0; i<=products.length; i++) {
        if (products[i].id === selected_product_id) {
            return products[i];
        }
    }
}
