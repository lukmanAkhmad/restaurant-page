// ini module
import honeyTea from '/assets/images/honey-tea.jpeg';
import bearyTea from '/assets/images/beary-tea.jpg';
import toastAndJam from '/assets/images/toast-and-jam.jpeg';


export function createMenuPage() {
    const divContent = document.querySelector('#content');

    // clear #content section
    divContent.replaceChildren();

    divContent.appendChild(createHeaderContentMenu());

    divContent.appendChild(createBeverages());
    menuBeverages.forEach((item) => {
        const divBeveragesContent = document.createElement('div');
        divBeveragesContent.classList.add('beverages-content');

        const h3BeveragesItemName = document.createElement('h3');
        h3BeveragesItemName.classList.add('beverages-item-name');
        h3BeveragesItemName.textContent = item.name;
        divBeveragesContent.appendChild(h3BeveragesItemName);

        const paraBeveragesItemDescription = document.createElement('p');
        paraBeveragesItemDescription.classList.add('beverages-item-description');
        paraBeveragesItemDescription.textContent = item.descr;
        divBeveragesContent.appendChild(paraBeveragesItemDescription);

        const paraBeveragesItemPrice = document.createElement('p');
        paraBeveragesItemPrice.classList.add('beverages-item-prices');
        paraBeveragesItemPrice.textContent = item.price;
        divBeveragesContent.appendChild(paraBeveragesItemPrice);


        const divBeveragesItemPict = document.createElement('div');
        divBeveragesItemPict.classList.add('beverages-item-pict');
        divBeveragesContent.appendChild(divBeveragesItemPict);

        const imgBeveragesItemPict = new Image()
        imgBeveragesItemPict.classList.add('img-beverages-item');
        imgBeveragesItemPict.alt = 'Picture of item beverages';
        imgBeveragesItemPict.src = item.img;
        divBeveragesItemPict.appendChild(imgBeveragesItemPict);

        divContent.appendChild(divBeveragesContent);
    })


    divContent.appendChild(createSides());
    menuSides.forEach((item) => {
        const divSidesContent = document.createElement('div');
        divSidesContent.classList.add('sides-content');

        const h3SidesItemName = document.createElement('h3');
        h3SidesItemName.classList.add('sides-item-name');
        h3SidesItemName.textContent = item.name;
        divSidesContent.appendChild(h3SidesItemName);

        const paraSidesItemDescription = document.createElement('p');
        paraSidesItemDescription.classList.add('sides-item-description');
        paraSidesItemDescription.textContent = item.descr;
        divSidesContent.appendChild(paraSidesItemDescription);

        const paraSidesItemPrice = document.createElement('p');
        paraSidesItemPrice.classList.add('sides-item-prices');
        paraSidesItemPrice.textContent = item.price;
        divSidesContent.appendChild(paraSidesItemPrice);


        const divSidesItemPict = document.createElement('div');
        divSidesItemPict.classList.add('sides-item-pict');
        divSidesContent.appendChild(divSidesItemPict);

        const imgSidesItemPict = new Image()
        imgSidesItemPict.classList.add('img-sides-item');
        imgSidesItemPict.alt = 'Picture of honey tea';
        imgSidesItemPict.src = item.img;
        divSidesItemPict.appendChild(imgSidesItemPict);

        divContent.appendChild(divSidesContent);
    })

    divContent.appendChild(createSidesContentOne());
    divContent.appendChild(createMainDishes());



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
}

class ItemSides {
    constructor(name, descr, price, img) {
        this.name = name;
        this.descr = descr;
        this.price = price;
        this.img = img;
    }
}

let menuSides = [
    new ItemSides('Toast and Jam', 'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.',
            '$1', toastAndJam),
]

function createSidesContentOne() {
    const divSidesContent = document.createElement('div');
    divSidesContent.classList.add('sides-content');

    const h3SidesItemName = document.createElement('h3');
    h3SidesItemName.classList.add('sides-item-name');
    h3SidesItemName.textContent = 'Toast and Jam';
    divSidesContent.appendChild(h3SidesItemName);

    const paraSidesItemDescription = document.createElement('p');
    paraSidesItemDescription.classList.add('sides-item-description');
    paraSidesItemDescription.textContent = 'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.';
    divSidesContent.appendChild(paraSidesItemDescription);

    const paraSidesItemPrices = document.createElement('p');
    paraSidesItemPrices.classList.add('sides-item-price');
    paraSidesItemPrices.textContent = '$1';
    divSidesContent.appendChild(paraSidesItemPrices);

    const divSidesItemPrices = document.createElement('div');
    divSidesItemPrices.classList.add('sides-item-pict');
    divSidesItemPrices.title = 'Picture of toast and jam';
    divSidesItemPrices.style.background = honeyTea;
    divSidesItemPrices.style.backgroundSize = 'cover';
    divSidesContent.appendChild(divSidesItemPrices);

    return divSidesContent;
}

function createSidesContentTwo() {
    const divSidesContent = document.createElement('div');
    divSidesContent.classList.add('sides-content');

    const h3SidesItemName = document.createElement('h3');
    h3SidesItemName.classList.add('sides-item-name');
    h3SidesItemName.textContent = 'Fresh Fruit';
    divSidesContent.appendChild(h3SidesItemName);

    const paraSidesItemDescription = document.createElement('p');
    paraSidesItemDescription.classList.add('sides-item-description');
    paraSidesItemDescription.textContent = 'A small bowl of fresh fruit, whatever we find at the market for the day.';
    divSidesContent.appendChild(paraSidesItemDescription);

    const paraSidesItemPrices = document.createElement('p');
    paraSidesItemPrices.classList.add('sides-item-price');
    paraSidesItemPrices.textContent = '$3';
    divSidesContent.appendChild(paraSidesItemPrices);

    const divSidesItemPict = document.createElement('div');
    divSidesItemPict.classList.add('sides-item-pict');
    divSidesItemPict.title = 'Picture of Fresh Fruit';
    divSidesItemPict.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/fresh-fruit.jpeg')";
    divSidesItemPict.style.backgroundSize = 'cover';
    divSidesContent.appendChild(divSidesItemPict);

    return divSidesContent;
}

function createMainDishes() {
    const divMainDishes = document.createElement('div');
    divMainDishes.classList.add('main-dishes');

    const h2MainDishes = document.createElement('h2');
    h2MainDishes.textContent = 'Main Dishes';
    divMainDishes.appendChild(h2MainDishes);

    return divMainDishes;
}

function createMainDishesContentOne() {
    const divMainDishesContent = document.createElement('div');
    divMainDishesContent.classList.add('main-dishes-content');

    const h3MainDishesItemName = document.createElement('h3');
    h3MainDishesItemName.classList.add('main-dishes-item-name');
    h3MainDishesItemName.textContent = 'Pancakes';
    divMainDishesContent.appendChild(h3MainDishesItemName);

    const paraMainDishesItemDescription = document.createElement('p');
    paraMainDishesItemDescription.classList.add('main-dishes-item-description');
    paraMainDishesItemDescription.textContent = 'A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.';
    divMainDishesContent.appendChild(paraMainDishesItemDescription);

    const paraMainDishesItemPrice = document.createElement('p');
    paraMainDishesItemPrice.classList.add('main-dishes-item-price');
    paraMainDishesItemPrice.textContent = '$4';
    divMainDishesContent.appendChild(paraMainDishesItemPrice);

    const divMainDishesItemPict = document.createElement('div');
    divMainDishesItemPict.classList.add('main-dishes-item-pict');
    divMainDishesItemPict.title = 'Picture of pancakes';
    divMainDishesItemPict.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/pancakes.jpeg')";
    divMainDishesItemPict.style.backgroundSize = 'cover';
    divMainDishesContent.appendChild(divMainDishesItemPict);

    return divMainDishesContent;
}

function createMainDishesContentTwo() {
    const divMainDishesContent = document.createElement('div');
    divMainDishesContent.classList.add('main-dishes-content');

    const h3MainDishesItemName = document.createElement('h3');
    h3MainDishesItemName.classList.add('main-dishes-item-name');
    h3MainDishesItemName.textContent = 'French Toast';
    divMainDishesContent.appendChild(h3MainDishesItemName);

    const paraMainDishesItemDescription = document.createElement('p');
    paraMainDishesItemDescription.classList.add('main-dishes-item-description');
    paraMainDishesItemDescription.textContent = 'Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.';
    divMainDishesContent.appendChild(paraMainDishesItemDescription);

    const paraMainDishesItemPrice = document.createElement('p');
    paraMainDishesItemPrice.classList.add('main-dishes-item-price');
    paraMainDishesItemPrice.textContent = '$5';
    divMainDishesContent.appendChild(paraMainDishesItemPrice);

    const divMainDishesItemPict = document.createElement('div');
    divMainDishesItemPict.classList.add('main-dishes-item-pict');
    divMainDishesItemPict.title = 'Picture of french toast';
    divMainDishesItemPict.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/french-toast.jpeg')";
    divMainDishesItemPict.style.backgroundSize = 'cover';
    divMainDishesContent.appendChild(divMainDishesItemPict);

    return divMainDishesContent;
}

function createMainDishesContentThree() {
    const divMainDishesContent = document.createElement('div');
    divMainDishesContent.classList.add('main-dishes-content');

    const h3MainDishesItemName = document.createElement('h3');
    h3MainDishesItemName.classList.add('main-dishes-item-name');
    h3MainDishesItemName.textContent = 'Beary Veggie Sandwich';
    divMainDishesContent.appendChild(h3MainDishesItemName);

    const paraMainDishesItemDescription = document.createElement('p');
    paraMainDishesItemDescription.classList.add('main-dishes-item-description');
    paraMainDishesItemDescription.textContent = 'Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.';
    divMainDishesContent.appendChild(paraMainDishesItemDescription);

    const paraMainDishesItemPrice = document.createElement('p');
    paraMainDishesItemPrice.classList.add('main-dishes-item-price');
    paraMainDishesItemPrice.textContent = '$8';
    divMainDishesContent.appendChild(paraMainDishesItemPrice);

    const divMainDishesItemPict = document.createElement('div');
    divMainDishesItemPict.classList.add('main-dishes-item-pict');
    divMainDishesItemPict.title = 'Picture of beary veggie sandwich';
    divMainDishesItemPict.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/beary-veggie-sandwich.jpeg')";
    divMainDishesItemPict.style.backgroundSize = 'cover';
    divMainDishesContent.appendChild(divMainDishesItemPict);

    return divMainDishesContent;
}

function createMainDishesContentFour() {
    const divMainDishesContent = document.createElement('div');
    divMainDishesContent.classList.add('main-dishes-content');

    const h3MainDishesItemName = document.createElement('h3');
    h3MainDishesItemName.classList.add('main-dishes-item-name');
    h3MainDishesItemName.textContent = 'BLT';
    divMainDishesContent.appendChild(h3MainDishesItemName);

    const paraMainDishesItemDescription = document.createElement('p');
    paraMainDishesItemDescription.classList.add('main-dishes-item-description');
    paraMainDishesItemDescription.textContent = 'Interested in the Beary Veggie Sandwich but also love bacon? Say no more.';
    divMainDishesContent.appendChild(paraMainDishesItemDescription);

    const paraMainDishesItemPrice = document.createElement('p');
    paraMainDishesItemPrice.classList.add('main-dishes-item-price');
    paraMainDishesItemPrice.textContent = '$6';
    divMainDishesContent.appendChild(paraMainDishesItemPrice);

    const divMainDishesItemPict = document.createElement('div');
    divMainDishesItemPict.classList.add('main-dishes-item-pict');
    divMainDishesItemPict.title = 'Picture of BLT';
    divMainDishesItemPict.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/blt.jpeg')";
    divMainDishesItemPict.style.backgroundSize = 'cover';
    divMainDishesContent.appendChild(divMainDishesItemPict);

    return divMainDishesContent;
}

function createMainDishesContentFive() {
    const divMainDishesContent = document.createElement('div');
    divMainDishesContent.classList.add('main-dishes-content');

    const h3MainDishesItemName = document.createElement('h3');
    h3MainDishesItemName.classList.add('main-dishes-item-name');
    h3MainDishesItemName.textContent = 'Bagel and Lox';
    divMainDishesContent.appendChild(h3MainDishesItemName);

    const paraMainDishesItemDescription = document.createElement('p');
    paraMainDishesItemDescription.classList.add('main-dishes-item-description');
    paraMainDishesItemDescription.textContent = "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.";
    divMainDishesContent.appendChild(paraMainDishesItemDescription);

    const paraMainDishesItemPrice = document.createElement('p');
    paraMainDishesItemPrice.classList.add('main-dishes-item-price');
    paraMainDishesItemPrice.textContent = '$8';
    divMainDishesContent.appendChild(paraMainDishesItemPrice);

    const divMainDishesItemPict = document.createElement('div');
    divMainDishesItemPict.classList.add('main-dishes-item-pict');
    divMainDishesItemPict.title = 'Picture of bagel and lox';
    divMainDishesItemPict.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/bagel-and-lox.jpg')";
    divMainDishesItemPict.style.backgroundSize = 'cover';
    divMainDishesContent.appendChild(divMainDishesItemPict);

    return divMainDishesContent;
}

function createMainDishesContentSix() {
    const divMainDishesContent = document.createElement('div');
    divMainDishesContent.classList.add('main-dishes-content');

    const h3MainDishesItemName = document.createElement('h3');
    h3MainDishesItemName.classList.add('main-dishes-item-name');
    h3MainDishesItemName.textContent = 'Honeycomb';
    divMainDishesContent.appendChild(h3MainDishesItemName);

    const paraMainDishesItemDescription = document.createElement('p');
    paraMainDishesItemDescription.classList.add('main-dishes-item-description');
    paraMainDishesItemDescription.textContent = "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.";
    divMainDishesContent.appendChild(paraMainDishesItemDescription);

    const paraMainDishesItemPrice = document.createElement('p');
    paraMainDishesItemPrice.classList.add('main-dishes-item-price');
    paraMainDishesItemPrice.textContent = '$6';
    divMainDishesContent.appendChild(paraMainDishesItemPrice);

    const divMainDishesItemPict = document.createElement('div');
    divMainDishesItemPict.classList.add('main-dishes-item-pict');
    divMainDishesItemPict.title = 'Picture of honeycomb';
    divMainDishesItemPict.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/honeycomb.jpeg')";
    divMainDishesItemPict.style.backgroundSize = 'cover';
    divMainDishesContent.appendChild(divMainDishesItemPict);

    return divMainDishesContent;
}

function createMainDishesContentSeven() {
    const divMainDishesContent = document.createElement('div');
    divMainDishesContent.classList.add('main-dishes-content');

    const h3MainDishesItemName = document.createElement('h3');
    h3MainDishesItemName.classList.add('main-dishes-item-name');
    h3MainDishesItemName.textContent = 'Beary Bowl';
    divMainDishesContent.appendChild(h3MainDishesItemName);

    const paraMainDishesItemDescription = document.createElement('p');
    paraMainDishesItemDescription.classList.add('main-dishes-item-description');
    paraMainDishesItemDescription.textContent = "Get a big ole bowl of our berries! Side of honey is $1 extra.";
    divMainDishesContent.appendChild(paraMainDishesItemDescription);

    const paraMainDishesItemPrice = document.createElement('p');
    paraMainDishesItemPrice.classList.add('main-dishes-item-price');
    paraMainDishesItemPrice.textContent = '$7';
    divMainDishesContent.appendChild(paraMainDishesItemPrice);

    const divMainDishesItemPict = document.createElement('div');
    divMainDishesItemPict.classList.add('main-dishes-item-pict');
    divMainDishesItemPict.title = 'Picture of beary bowl';
    divMainDishesItemPict.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/beary-bowl.jpg')";
    divMainDishesItemPict.style.backgroundSize = 'cover';
    divMainDishesContent.appendChild(divMainDishesItemPict);

    return divMainDishesContent;
}

function createMainDishesContentEight() {
    const divMainDishesContent = document.createElement('div');
    divMainDishesContent.classList.add('main-dishes-content');

    const h3MainDishesItemName = document.createElement('h3');
    h3MainDishesItemName.classList.add('main-dishes-item-name');
    h3MainDishesItemName.textContent = 'The Beary Best Porridge';
    divMainDishesContent.appendChild(h3MainDishesItemName);

    const paraMainDishesItemDescription = document.createElement('p');
    paraMainDishesItemDescription.classList.add('main-dishes-item-description');
    paraMainDishesItemDescription.textContent = "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.";
    divMainDishesContent.appendChild(paraMainDishesItemDescription);

    const paraMainDishesItemPrice = document.createElement('p');
    paraMainDishesItemPrice.classList.add('main-dishes-item-price');
    paraMainDishesItemPrice.textContent = '$5';
    divMainDishesContent.appendChild(paraMainDishesItemPrice);

    const divMainDishesItemPict = document.createElement('div');
    divMainDishesItemPict.classList.add('main-dishes-item-pict');
    divMainDishesItemPict.title = 'The Beary Best Porridge';
    divMainDishesItemPict.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/bear-porridge.jpg')";
    divMainDishesItemPict.style.backgroundSize = 'cover';
    divMainDishesContent.appendChild(divMainDishesItemPict);

    return divMainDishesContent;
}