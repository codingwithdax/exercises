
let itemArray = [];

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

class ItemManager {

    static updateTotal() {
        const totalsElement = document.getElementById("total_id");

        while (totalsElement.firstChild) {
            totalsElement.removeChild(totalsElement.firstChild);
        }

        let total = 0;
        console.log("itemArray", itemArray);

        for (let currentItem of itemArray) {
            console.log("currentItem", currentItem);
            const count = currentItem.getCount();
            const price = currentItem.getPrice();
            const amount = count * price;
            total += amount;
        }

        const totalInfoElement = document.createElement("label");

        const totalString = formatter.format(total);
        const totalText = document.createTextNode(`Total: ${totalString}`);
        totalInfoElement.appendChild(totalText);

        totalsElement.appendChild(totalInfoElement);

    }
}


class Item {
    constructor(product, price) {
        this.product = product;
        this.price = price;
        this.count = 0;
        this.countElement = null;
    }

    getProduct() {
        return this.product;
    }

    getPrice() {
        return this.price;
    }

    getCount() {
        return this.count;
    }

    addOne() {
        console.log("in addOne. this", this);
        this.count++;

        this.countElement.removeChild(this.countElement.firstChild);
        const countTextNode = document.createTextNode(`${this.count}`);
        this.countElement.appendChild(countTextNode);
        ItemManager.updateTotal();
    }

    subtractOne() {
        if (this.count > 0) {
            this.count--;
        }

        this.countElement.removeChild(this.countElement.firstChild);
        const countTextNode = document.createTextNode(`${this.count}`);
        this.countElement.appendChild(countTextNode);
        ItemManager.updateTotal();
    }

    getRootElement() {
        const itemElement = document.createElement("div");
        itemElement.setAttribute("style", "display: flex");
        itemElement.setAttribute("class", "item-label");

        const priceString = formatter.format(this.price);
        const labelText = document.createTextNode(`${this.product}:  ${priceString}`);
        itemElement.appendChild(labelText);

        const plusButtonElement = document.createElement("button");
        plusButtonElement.setAttribute("class", "item-button");
        const plusText = document.createTextNode("+");
        plusButtonElement.appendChild(plusText);
        const addOneFunc = this.addOne;
        plusButtonElement.addEventListener("click", this.addOne.bind(this));
        itemElement.appendChild(plusButtonElement);

        this.countElement = document.createElement("label");
        this.countElement.setAttribute("class", "item-count");
        const countTextNode = document.createTextNode(`${this.count}`);
        this.countElement.appendChild(countTextNode);
        itemElement.appendChild(this.countElement);

        const minusButtonElement = document.createElement("button");
        plusButtonElement.setAttribute("class", "item-button");
        const minusText = document.createTextNode("-");
        minusButtonElement.appendChild(minusText);
        minusButtonElement.addEventListener("click", this.subtractOne.bind(this));
        itemElement.appendChild(minusButtonElement);

        return itemElement;
    }
}


function addItemCallback() {

    const itemsParentElement = document.getElementById("items_id");

    const product = document.getElementById("product_id").value;
    const price = document.getElementById("price_id").value;

    const item = new Item(product, price);
    itemArray.push(item);

    while (itemsParentElement.firstChild) {
        itemsParentElement.removeChild(itemsParentElement.firstChild);
    }

    itemArray.forEach(currentItem => {
        const itemRootElement = currentItem.getRootElement();
        itemsParentElement.appendChild(itemRootElement);
    });

}
