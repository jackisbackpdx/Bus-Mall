export class MallArray {
    constructor(items) {
        this.items = items.slice();
    }

    getRandomItem() {
        const randomItemIndex = Math.floor(Math.random() * this.items.length);
        return this.items[randomItemIndex];
    }
}