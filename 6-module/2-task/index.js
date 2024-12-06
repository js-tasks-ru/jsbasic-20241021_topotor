import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {

  elem = null;

  constructor(product) {
    this.name = product.name;
    this.price = product.price.toFixed(2);
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;
    this.#render();
  }

  #template() {
    return `
    <div class="card">
       <div class="card__top">
          <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
           <span class="card__price">€${this.price}</span>
       </div>
       <div class="card__body">
            <div class="card__title">${this.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
       </div>
    </div>
   `
  }
  
  #render() {
    this.elem = createElement(this.#template() );
    this.elem.addEventListener('click', this.#onClick);
  }

  #onClick = () => {
    this.button = document.querySelector('.card__button')
    const event = new CustomEvent('product-add', {
      bubbles: true,
      detail: this.id,
    });
    
    this.button.dispatchEvent(event);
  }

}



