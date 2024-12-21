import {products} from './products.js';

export let category = localStorage.getItem('category') || "WOMEN'S";

export function set_category(category) {
    localStorage.setItem('category', category);
}

export function get_category() {
    if (category === "MEN'S") {
        return products.mens;
    } else if (category === "WOMEN'S") {
        return products.womens;
    } else {
        return products.accessories;
    }
}