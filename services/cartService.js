class Cart {
    static #cart = null;

    static getInstance() {
        if (!Cart.#cart) {
            Cart.#cart = new Cart();
        }
        return Cart.#cart;
    }
    constructor() {
        if(Cart.#cart) {
            throw new Error("Cart is a singleton and has already been created.");
        }
        this.items = [];
        Cart.#cart = this; 
    }
    
    addItem(item) {
        this.items.push(item);
    }
    
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }
    
    getItems() {
        return this.items;
    }
    
    clearCart() {
        this.items = [];
    }

    contains(itemId) {
        const result = this.items.some(item => item.id === itemId);
        return result;
    }
}


export default Cart;