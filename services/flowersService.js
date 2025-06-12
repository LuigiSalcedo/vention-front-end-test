class Flower {
    id = 0;
    name = '';
    price = 0;
    stars = 0;
    image = '';

    constructor(id, name, price, stars, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stars = stars;
        this.image = image;
    }

}

function getFlowers() {
    return [
        new Flower(1, 'Blue Flower', 80.00, 4, "/assets/blue-flower.png"),
        new Flower(2, 'Orange Flower', 17.60, 3, "/assets/orange-flower.png"),
        new Flower(3, 'Pink Flower', 40.00, 5, "/assets/pink-flower.png")
    ];
}

export { Flower, getFlowers };