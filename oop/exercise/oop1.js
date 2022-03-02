
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
// // const NumberFormatObj = Intl.NumberFormat('en-US', {
// const formatter = new NumberFormatObj();


class Item {
    constructor(product, price) {
        this.product = product;
        this.price = price;
        this.count = 0;
        this.countElement = null;
    }

    addToCount() {
        this.count++;

        this.countElement.removeChild(this.countElement.firstChild);
        const newCountTextNode = document.createTextNode(`${this.count}`);
        this.countElement.appendChild(newCountTextNode);
    }

    createItemUserInterface() {
        const priceString = formatter.format(this.price);

        const itemElement = document.createElement("div");
        itemElement.setAttribute("style", "display: flex");
        itemElement.setAttribute("class", "item-label");

        const labelText = document.createTextNode(`${this.product}:  ${priceString}`);
        itemElement.appendChild(labelText);

        const plusButtonElement = document.createElement("button");
        plusButtonElement.setAttribute("class", "item-button");
        const plusText = document.createTextNode("+");
        plusButtonElement.appendChild(plusText);
        plusButtonElement.addEventListener("click", this.addToCount.bind(this));
        itemElement.appendChild(plusButtonElement);

        this.countElement = document.createElement("label");
        this.countElement.setAttribute("class", "item-count");

        const countTextNode = document.createTextNode(`${this.count}`)
        this.countElement.appendChild(countTextNode);
        itemElement.appendChild(this.countElement);

        const minusButtonElement = document.createElement("button");
        plusButtonElement.setAttribute("class", "item-button");
        const minusText = document.createTextNode("-");
        minusButtonElement.appendChild(minusText);
        itemElement.appendChild(minusButtonElement);

        return itemElement;
    }
}

function addProduct() {

    const itemsParentElement = document.getElementById("items_id");

    const product = document.getElementById("product_id").value;
    const price = document.getElementById("price_id").value;

    const itemObj = new Item(product, price);
    console.log("item obj", itemObj);

    const itemElement = itemObj.createItemUserInterface();
    itemsParentElement.appendChild(itemElement);
}
