
const products = [
  {
    id: 1,
    title: 'Product 1',
    image: 'https://picsum.photos/200/300',
    price: 19.99,
    description: 'This is a test product'
  },
  {
    id: 2,
    title: 'Product 2',
    image: 'https://picsum.photos/200/301',
    price: 29.99,
    description: 'This is another test product'
  },

];


function renderProductList() {
  const productListContainer = document.getElementById('product-list');
  productListContainer.innerHTML = '';

  products.forEach((product) => {
    const productHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>Price: $${product.price}</p>
        <p>${product.description}</p>
        <button>Add to Cart</button>
      </div>
    `;
    productListContainer.insertAdjacentHTML
