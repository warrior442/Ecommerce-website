import {products} from './data/products.js';
import {set_category} from '../scripts/data/categoryData.js'

function render_index_page() {
    let slideBarHtml = `
    <button class="left_scroll">
        <i class="fa-solid fa-chevron-left fa-2xl" style="color: #000000;"></i>
    </button>
    <button class="right_scroll">
        <i class="fa-solid fa-chevron-left fa-flip-horizontal fa-2xl" style="color: #000000;"></i>
    </button>
    `;
    products.mens.forEach((product)=>{
        slideBarHtml += `
            <button class="element">
                <img src=${product.thumbnail}>
            </button>
        `;
    })
    products.womens.forEach((product)=>{
        slideBarHtml += `
            <button class="element">
                <img src=${product.thumbnail}>
            </button>
        `;
    })
    products.accessories.forEach((product)=>{
        slideBarHtml += `
            <button class="element">
                <img src=${product.thumbnail}>
            </button>
        `;
    })


    document.querySelector('.box_header_slideBar_elements').innerHTML = slideBarHtml;
    


    document.querySelector('.mens').addEventListener('click', ()=>{
        set_category("MEN'S");
    })
    document.querySelector('.womens').addEventListener('click', ()=>{
        set_category("WOMEN'S");
    })
    document.querySelector('.accessories').addEventListener('click', ()=>{
        set_category('ACCESSORIES');
    })
}

render_index_page();