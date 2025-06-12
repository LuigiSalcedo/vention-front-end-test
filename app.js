import FlowerCard from './components/flowerCard.js';
import { getFlowers } from './services/flowersService.js';

function displayFlowers() {
  const container = document.getElementById('flower-container');
  getFlowers().forEach(flower => {
    new FlowerCard(flower).renderInto(container);
  });
}

displayFlowers();
