var cardsData = [
  {
    isAvailable: true,
    imgUrl: 'device/item-1.jpg',
    text: 'Селфи-палка для начинающих',
    price: 200,
    isSpecial: false
  },
  {
    isAvailable: false,
    imgUrl: 'device/item-2.jpg',
    text: 'Профессиональная селфи-палка',
    price: 1500,
    isSpecial: false
  },
  {
    isAvailable: true,
    imgUrl: 'device/item-3.jpg',
    text: 'Непотопляемая селфи-палка',
    price: 2500,
    isSpecial: false
  },
  {
    isAvailable: true,
    imgUrl: 'device/item-4.jpg',
    text: 'Селфи-палка «Следуй за мной»',
    price: 4900,
    isSpecial: true,
    specialPrice: 100
  }
];

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function (product) {
  var listItem = makeElement('li', 'product');

  var title = makeElement('h2', 'product__title', product.text);
  listItem.appendChild(title);

  var picture = makeElement('img', 'product__image');
  picture.src = product.imgUrl;
  picture.alt = product.text;
  listItem.appendChild(picture);

  var price = makeElement('p', 'product__price', product.price);
  listItem.appendChild(price);

  var availabilityClass = 'product--available';
  if (!product.isAvailable) {
    availabilityClass = 'product--unavailable';
  }
  listItem.classList.add(availabilityClass);

  if (product.isSpecial) {
    listItem.classList.add('product--special');
    var specialPrice = makeElement('p', 'product__special-price', product.specialPrice);
    listItem.appendChild(specialPrice);
  }

  return listItem;
};

var cardList = document.querySelector('.products');

for (var i = 0; i < cardsData.length; i++) {
  var cardItem = createCard(cardsData[i]);
  cardList.appendChild(cardItem)
}
