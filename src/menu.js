// ini module
export function createMenuPage(){
    const divContent = document.querySelector('#content');

    // clear #content section
    divContent.replaceChildren();

    divContent.appendChild(createHeaderContentMenu());
    divContent.appendChild(createBeverages());
    divContent.appendChild(createBeveragesContentOne());
    divContent.appendChild(createBeveragesContentTwo());
    divContent.appendChild(createSides());
    divContent.appendChild(createSidesContentOne());
    divContent.appendChild(createSidesContentTwo());
    divContent.appendChild(createMainDishes());
    divContent.appendChild(createMainDishesContentOne());
    divContent.appendChild(createMainDishesContentTwo());
    divContent.appendChild(createMainDishesContentThree());
    divContent.appendChild(createMainDishesContentFour());
    divContent.appendChild(createMainDishesContentFive());
    divContent.appendChild(createMainDishesContentSix());
    divContent.appendChild(createMainDishesContentSeven());
    divContent.appendChild(createMainDishesContentEight());

    // return;
}

function createHeaderContentMenu(){
    const divHeaderContentMenu = document.createElement('div');
    divHeaderContentMenu.classList.add('header-content-menu');

    const paraHeaderContentMenu = document.createElement('p');
    paraHeaderContentMenu.classList.add('para-header-content-menu');
    paraHeaderContentMenu.textContent = 'Menu';
    divHeaderContentMenu.appendChild(paraHeaderContentMenu)

    return divHeaderContentMenu;
}

function createBeverages(){
    const divBeverages = document.createElement('div');
    divBeverages.classList.add('beverages');

    const h2Beverages = document.createElement('h2');
    h2Beverages.textContent = 'Beverages';
    divBeverages.appendChild(h2Beverages);

    return divBeverages;
}

function createBeveragesContentOne(){
    const divBeveragesContent = document.createElement('div');
    divBeveragesContent.classList.add('beverages-content');

    const h3BeveragesItemName = document.createElement('h3');
    h3BeveragesItemName.classList.add('beverages-item-name');
    h3BeveragesItemName.textContent = 'Honey Tea';
    divBeveragesContent.appendChild(h3BeveragesItemName);

    const paraBeveragesItemDescription = document.createElement('p');
    paraBeveragesItemDescription.classList.add('beverages-item-description');
    paraBeveragesItemDescription.textContent = 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!';
    divBeveragesContent.appendChild(paraBeveragesItemDescription);

    const paraBeveragesItemPrice = document.createElement('p');
    paraBeveragesItemPrice.classList.add('beverages-item-prices');
    paraBeveragesItemPrice.textContent = '$2';
    divBeveragesContent.appendChild(paraBeveragesItemPrice);

    const divBeveragesItemPict = document.createElement('div');
    divBeveragesItemPict.classList.add('beverages-item-pict');
    divBeveragesItemPict.title = 'Picture of honey tea';
    divBeveragesItemPict.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/honey-tea.jpeg')";
    divBeveragesItemPict.style.backgroundSize = 'cover'; 

    divBeveragesContent.appendChild(divBeveragesItemPict);

    return divBeveragesContent;
}

function createBeveragesContentTwo(){
    const divBeveragesContent = document.createElement('div');
    divBeveragesContent.classList.add('beverages-content');

    const h3BeveragesItemName = document.createElement('h3');
    h3BeveragesItemName.classList.add('beverages-item-name');
    h3BeveragesItemName.textContent = 'Beary Tea';
    divBeveragesContent.appendChild(h3BeveragesItemName);

    const paraBeveragesItemDescription = document.createElement('p');
    paraBeveragesItemDescription.classList.add('beverages-item-description');
    paraBeveragesItemDescription.textContent = 'A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.';
    divBeveragesContent.appendChild(paraBeveragesItemDescription);

    const paraBeveragesItemPrice = document.createElement('p');
    paraBeveragesItemPrice.classList.add('beverages-item-prices');
    paraBeveragesItemPrice.textContent = '$3';
    divBeveragesContent.appendChild(paraBeveragesItemPrice);

    const divBeveragesItemPict = document.createElement('div');
    divBeveragesItemPict.classList.add('beverages-item-pict');
    divBeveragesItemPict.title = 'Picture of beary tea';
    divBeveragesItemPict.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/beary-tea.jpg')";
    divBeveragesItemPict.style.backgroundSize = 'cover'; 

    divBeveragesContent.appendChild(divBeveragesItemPict);

    return divBeveragesContent;
}

function createSides(){
    const divSides = document.createElement('div');
    divSides.classList.add('sides');

    const h2Sides = document.createElement('h2');
    h2Sides.textContent = 'Sides';
    divSides.appendChild(h2Sides);

    return divSides;
}

function createSidesContentOne(){
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
    divSidesItemPrices.style.background = "url('/home/lukmanakhmad/restaurant-page/assets/images/toast-and-jam.jpeg')";
    divSidesItemPrices.style.backgroundSize = 'cover'; 
    divSidesContent.appendChild(divSidesItemPrices);

    return divSidesContent;
}

function createSidesContentTwo(){
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

function createMainDishes(){
    const divMainDishes = document.createElement('div');
    divMainDishes.classList.add('main-dishes');

    const h2MainDishes = document.createElement('h2');
    h2MainDishes.textContent = 'Main Dishes';
    divMainDishes.appendChild(h2MainDishes);

    return divMainDishes;
}

function createMainDishesContentOne(){
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

function createMainDishesContentTwo(){
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

function createMainDishesContentThree(){
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

function createMainDishesContentFour(){
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

function createMainDishesContentFive(){
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

function createMainDishesContentSix(){
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

function createMainDishesContentSeven(){
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

function createMainDishesContentEight(){
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