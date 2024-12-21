import { get_product } from './data/singleProductData.js';

let quantity = 1;

function render_singleProduct_page() {
    let product = get_product();

    let thumbnailHtml = `<img class="product_thumbnail" src=${product.thumbnail}>`;
    let smallImagesHtml = `<img class="small_images" src=${product.thumbnail}>`;
    product.images.forEach((image_link) => {
        smallImagesHtml += `<img class="small_images" src=${image_link}>`;
    });

    document.querySelector('.box_small_images').innerHTML = smallImagesHtml;
    document.querySelector('.box_product_thumbnail').innerHTML = thumbnailHtml;
    document.querySelector('.component_name').innerHTML = `${product.category}`;
    document.querySelector('.js-show-quantity').innerHTML = quantity;
    document.querySelector('.product_name').innerHTML = `${product.title}`;
    document.querySelector('.product_description').innerHTML = `${product.description}`;
    document.querySelector('.small_images').classList.add('small_images_clicked');
    document.querySelector('.button_cart').classList.remove('button_sold_out');

    
    if (product.stock <= 0) {
        document.querySelector('.button_cart').classList.add('button_sold_out');
        document.querySelector('.button_cart').innerText = "SOLD OUT";
    }

   
    document.querySelectorAll('.small_images').forEach((imgLink) => {
        imgLink.addEventListener('click', () => {
            document.querySelectorAll('.small_images').forEach((imgLink) => {
                imgLink.classList.remove('small_images_clicked');
            });
            imgLink.classList.add('small_images_clicked');
            document.querySelector('.product_thumbnail').src = imgLink.src;
        });
    });

   
    document.querySelector('.js-add').addEventListener('click', () => {
        if (quantity === 1000) {
            alert('Quantity should not be greater than 1000');
        } else {
            quantity++;
            document.querySelector('.js-show-quantity').innerHTML = quantity;
        }
    });

    document.querySelector('.js-subtract').addEventListener('click', () => {
        if (quantity === 1) {
            alert('Quantity should not be less than 1');
        } else {
            quantity--;
            document.querySelector('.js-show-quantity').innerHTML = quantity;
        }
    });

    
    document.querySelector('.button_cart').addEventListener('click', () => {
        if (product.stock > 0) {
            showContactForm();
        } else {
            alert("This product is sold out.");
        }
    });
}


function showContactForm() {
    const formHtml = `
        <div class="contact_form_overlay">
            <div class="contact_form">
                <h2>Contact Details</h2>
                <form id="contactForm">
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required>
                    
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required>
                    
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required>
                    
                    <label for="phone">Phone Number:</label>
                    <input type="text" id="phone" name="phone" required>
                    
                    <label for="address">Address:</label>
                    <textarea id="address" name="address" rows="3" required></textarea>
                    
                    <button type="submit">Submit</button>
                    <button type="button" id="closeForm">Cancel</button>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', formHtml);

    
    document.getElementById('closeForm').addEventListener('click', () => {
        document.querySelector('.contact_form_overlay').remove();
    });

    
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        document.querySelector('.contact_form_overlay').remove();
    });
}

render_singleProduct_page();









