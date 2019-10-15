export class MallArray {
    constructor(items) {
        this.items = items.slice();
    }

    getItems() {
        return this.items;
    }

    removeItemById(someId) {
        this.items.forEach(item => { 
            if (someId === item.id) {
                this.item.splice(someId, 1);
            }
        });
    }

    getItemById(someId) {
        let itemMatch;
        this.items.forEach(item => {
            if (someId === item.id) {
                itemMatch = item;
            }
        });
        return itemMatch;
    }

    hasAnyItems() {
        return this.items.length;
    }

    getRandomItem() {
        const randomItemIndex = Math.floor(Math.random() * this.items.length);
        return this.items[randomItemIndex];
    }
}