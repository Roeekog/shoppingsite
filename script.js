// creating elemnts as div
const productsContainer = document.getElementById('products-container');
const blackTea = document.createElement('div');
const greenTea = document.createElement('div');

// naming the new divs with text
blackTea.innerHTML = 'Black Tea';
greenTea.innerHTML = 'Green Tea';

// creating a class for the new divs
blackTea.classList.add('product');
greenTea.classList.add('product');

// appending the new divs to the product container
productsContainer.appendChild(blackTea);
productsContainer.appendChild(greenTea);