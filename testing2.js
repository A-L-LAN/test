// Sample JavaScript for handling product listing and displaying

document.getElementById('sell-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').files[0];

    // Here, you would typically send this data to the server for processing and storage in the database
    // For a real website, you'd use AJAX or fetch() to make a server request

    // For now, we'll just create a visual product listing on the page
    createProductListing(productName, productPrice, productImage);

    // Clear the form
    document.getElementById('sell-form').reset();
});

function createProductListing(name, price, image) {
    const productsContainer = document.getElementById('products');
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    const imgElement = document.createElement('img');
    imgElement.src = URL.createObjectURL(image);
    imgElement.alt = name;
    
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;
    
    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: $${price}`;
    
    productDiv.appendChild(imgElement);
    productDiv.appendChild(nameElement);
    productDiv.appendChild(priceElement);
    
    productsContainer.appendChild(productDiv);
}