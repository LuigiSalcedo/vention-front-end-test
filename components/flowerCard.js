import Cart from '../services/cartService.js';

export default class FlowerCard {
    constructor(flower) {
        this.flower = flower;
        this.cart = Cart.getInstance();

        this.card = null;
        this.img = null;
        this.button = null;
        this.label = null;
        this.circle = null;
        this.stars = null;

        this.build();
        this.updateUI();
    }

    build() {
        this.card = document.createElement('div');
        this.card.className = 'card';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        this.img = document.createElement('img');
        this.img.src = this.flower.image;
        this.img.alt = this.flower.name;

        this.button = document.createElement('button');
        this.button.className = 'cart-button';
        this.button.addEventListener('click', () => this.toggleCart());

        this.label = document.createElement('div');
        this.label.className = 'cart-label';
        this.label.textContent = 'In Cart';

        this.circle = document.createElement('div');
        this.circle.className = 'cart-circle';

        imageContainer.append(this.img, this.button, this.label, this.circle);

        const nameEl = document.createElement('h2');
        nameEl.textContent = this.flower.name;

        const priceEl = document.createElement('p');
        priceEl.textContent = `$${this.flower.price.toFixed(2)}`;

        this.stars = document.createElement('div');
        this.stars.className = 'stars';
        this.renderStars();

        this.card.append(imageContainer, nameEl, priceEl, this.stars);
    }

    renderStars() {
        this.stars.innerHTML = '';
        const total = 5;
        const filled = this.flower.stars;
        for (let i = 0; i < total; i++) {
            const starImg = document.createElement('img');
            starImg.src = '/assets/star.svg';
            if (i >= filled) {
                starImg.classList.add('empty');
            }
            this.stars.appendChild(starImg);
        }
    }

    toggleCart() {
        if(this.cart.contains(this.flower.id)) {
            this.cart.removeItem(this.flower.id);
        }else {
            this.cart.addItem(this.flower);
        }
        this.updateUI();
    }

    updateUI() {
        const inCart = this.cart.contains(this.flower.id);
        this.card.classList.toggle('in-cart', inCart);
        this.button.textContent = inCart ? 'Remove from cart' : 'Add to cart';
        this.button.style.backgroundColor = inCart ? '#ff4d4d' : '#28a745';
        this.img.style.filter = inCart ? 'grayscale(65%)' : '';
    }

    renderInto(container) {
        container.appendChild(this.card);
    }
}
