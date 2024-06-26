// ini module
import honeyTea from '/assets/images/honey-tea.jpeg';
import bearyTea from '/assets/images/beary-tea.jpg';
import toastAndJam from '/assets/images/toast-and-jam.jpeg';
import freshFruit from '/assets/images/fresh-fruit.jpeg';
import pancakes from '/assets/images/pancakes.jpeg';
import frenchToast from '/assets/images/french-toast.jpeg';
import bearyVeggieSandwich from '/assets/images/beary-veggie-sandwich.jpeg';
import blt from '/assets/images/blt.jpeg';
import bagelAndLox from '/assets/images/bagel-and-lox.jpg';
import honeycomb from '/assets/images/honeycomb.jpeg';
import bearyBowl from '/assets/images/beary-bowl.jpg';
import bearPorridge from '/assets/images/bear-porridge.jpg';

export function createMenuPage() {
    const divContent = document.querySelector('#content');

    // clear #content section
    divContent.replaceChildren();

    divContent.appendChild(createHeaderContentMenu());

    divContent.appendChild(createBeverages());
    menuBeverages.forEach((item) => {
        const divBeveragesContent = document.createElement('div');
        divBeveragesContent.classList.add('content');

        const h3BeveragesItemName = document.createElement('h3');
        h3BeveragesItemName.classList.add('item-name');
        h3BeveragesItemName.textContent = item.name;
        divBeveragesContent.appendChild(h3BeveragesItemName);

        const paraBeveragesItemDescription = document.createElement('p');
        paraBeveragesItemDescription.classList.add('item-description');
        paraBeveragesItemDescription.textContent = item.descr;
        divBeveragesContent.appendChild(paraBeveragesItemDescription);

        const paraBeveragesItemPrice = document.createElement('p');
        paraBeveragesItemPrice.classList.add('item-prices');
        paraBeveragesItemPrice.textContent = item.price;
        divBeveragesContent.appendChild(paraBeveragesItemPrice);


        const divBeveragesItemPict = document.createElement('div');
        divBeveragesItemPict.classList.add('item-pict');
        divBeveragesContent.appendChild(divBeveragesItemPict);

        const imgBeveragesItemPict = new Image()
        imgBeveragesItemPict.classList.add('img-item');
        imgBeveragesItemPict.alt = 'Picture of item beverages';
        imgBeveragesItemPict.src = item.img;
        divBeveragesItemPict.appendChild(imgBeveragesItemPict);

        divContent.appendChild(divBeveragesContent);
    })

    divContent.appendChild(createSides());
    menuSides.forEach((item) => {
        const divSidesContent = document.createElement('div');
        divSidesContent.classList.add('content');

        const h3SidesItemName = document.createElement('h3');
        h3SidesItemName.classList.add('item-name');
        h3SidesItemName.textContent = item.name;
        divSidesContent.appendChild(h3SidesItemName);

        const paraSidesItemDescription = document.createElement('p');
        paraSidesItemDescription.classList.add('item-description');
        paraSidesItemDescription.textContent = item.descr;
        divSidesContent.appendChild(paraSidesItemDescription);

        const paraSidesItemPrice = document.createElement('p');
        paraSidesItemPrice.classList.add('item-price');
        paraSidesItemPrice.textContent = item.price;
        divSidesContent.appendChild(paraSidesItemPrice);


        const divSidesItemPict = document.createElement('div');
        divSidesItemPict.classList.add('item-pict');
        divSidesContent.appendChild(divSidesItemPict);

        const imgSidesItemPict = new Image()
        imgSidesItemPict.classList.add('img-item');
        imgSidesItemPict.alt = 'Picture of item sides';
        imgSidesItemPict.src = item.img;
        divSidesItemPict.appendChild(imgSidesItemPict);

        divContent.appendChild(divSidesContent);
    })

    divContent.appendChild(createMainDishes());
    menuDishes.forEach((item) => {
        const divDishesContent = document.createElement('div');
        divDishesContent.classList.add('content');

        const h3DishesItemName = document.createElement('h3');
        h3DishesItemName.classList.add('item-name');
        h3DishesItemName.textContent = item.name;
        divDishesContent.appendChild(h3DishesItemName);

        const paraDishesItemDescription = document.createElement('p');
        paraDishesItemDescription.classList.add('item-description');
        paraDishesItemDescription.textContent = item.descr;
        divDishesContent.appendChild(paraDishesItemDescription);

        const paraDishesItemPrice = document.createElement('p');
        paraDishesItemPrice.classList.add('item-price');
        paraDishesItemPrice.textContent = item.price;
        divDishesContent.appendChild(paraDishesItemPrice);

        const divDishesItemPict = document.createElement('div');
        divDishesItemPict.classList.add('item-pict');
        divDishesContent.appendChild(divDishesItemPict);

        const imgDishesItemPict = new Image()
        imgDishesItemPict.classList.add('img-item');
        imgDishesItemPict.alt = 'Picture of item dishes';
        imgDishesItemPict.src = item.img;
        divDishesItemPict.appendChild(imgDishesItemPict);

        divContent.appendChild(divDishesContent);
    })
    return;
}

function createHeaderContentMenu() {
    const divHeaderContentMenu = document.createElement('div');
    divHeaderContentMenu.classList.add('header-content-menu');

    const paraHeaderContentMenu = document.createElement('p');
    paraHeaderContentMenu.classList.add('para-header-content-menu');
    paraHeaderContentMenu.textContent = 'Menu';
    divHeaderContentMenu.appendChild(paraHeaderContentMenu)

    return divHeaderContentMenu;
}

function createBeverages() {
    const divBeverages = document.createElement('div');
    divBeverages.classList.add('beverages');

    const h2Beverages = document.createElement('h2');
    h2Beverages.textContent = 'Beverages';
    divBeverages.appendChild(h2Beverages);

    return divBeverages;
}

class ItemBeverages {
    constructor(name, descr, price, img) {
        this.name = name;
        this.descr = descr;
        this.price = price;
        this.img = img;
    }
};

let menuBeverages = [
    new ItemBeverages('Honey Tea', 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!',
        '$2', honeyTea),
    new ItemBeverages('Beary Tea', 'A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.',
        '$3', bearyTea),
];

function createSides() {
    const divSides = document.createElement('div');
    divSides.classList.add('sides');

    const h2Sides = document.createElement('h2');
    h2Sides.textContent = 'Sides';
    divSides.appendChild(h2Sides);

    return divSides;
};

class ItemSides {
    constructor(name, descr, price, img) {
        this.name = name;
        this.descr = descr;
        this.price = price;
        this.img = img;
    }
};

let menuSides = [
    new ItemSides('Toast and Jam', 'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.',
        '$1', toastAndJam),
    new ItemSides('Fresh Fruit', 'A small bowl of fresh fruit, whatever we find at the market for the day.',
        '$3', freshFruit),
];

function createMainDishes() {
    const divMainDishes = document.createElement('div');
    divMainDishes.classList.add('main-dishes');

    const h2MainDishes = document.createElement('h2');
    h2MainDishes.textContent = 'Main Dishes';
    divMainDishes.appendChild(h2MainDishes);

    return divMainDishes;
};

class ItemDishes {
    constructor(name, descr, price, img) {
        this.name = name;
        this.descr = descr;
        this.price = price;
        this.img = img;
    }
};

let menuDishes = [
    new ItemDishes('Pancakes', 'A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.',
        '$4', pancakes),
    new ItemDishes('French Toast', 'Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.',
        '$5', frenchToast),
    new ItemDishes('Beary Veggie Sandwich', 'Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.',
        '$8', bearyVeggieSandwich),
    new ItemDishes('BLT', 'Interested in the Beary Veggie Sandwich but also love bacon? Say no more.',
        '$6', blt),
    new ItemDishes('Bagel and Lox', "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
        '$8', bagelAndLox),
    new ItemDishes('Honeycomb', "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
        '$6', honeycomb),
    new ItemDishes('Beary Bowl', "Get a big ole bowl of our berries! Side of honey is $1 extra.",
        '$8', bearyBowl),
    new ItemDishes('The Beary Best Porridge', "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.",
        '$5', bearPorridge),
];