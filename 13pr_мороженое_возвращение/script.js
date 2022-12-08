var cardsData = [
    {
      inStock: true,
      imgUrl: 'gllacy/choco.jpg',
      text: 'Сливочно-кофейное с кусочками шоколада',
      price: 310,
      isHit: true,
      specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
      inStock: true,
      imgUrl: 'gllacy/lemon.jpg',
      text: 'Сливочно-лимонное с карамельной присыпкой',
      price: 125,
      isHit: true
    },
    {
      inStock: true,
      imgUrl: 'gllacy/cowberry.jpg',
      text: 'Сливочное с брусничным джемом',
      price: 170,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'gllacy/cookie.jpg',
      text: 'Сливочное с кусочками печенья',
      price: 250,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'gllacy/creme-brulee.jpg',
      text: 'Сливочное крем-брюле',
      price: 190,
      isHit: false
    }
  ];
  
  
  var createElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
      element.textContent = text
    }
    return element
  }
  
  var createCard = function (good) {
    var listItem = createElement('li', 'good');
  
    var title = createElement('h2', 'good__description', good.text);
    listItem.appendChild(title);
  
    var image = createElement('img', 'good__image');
    image.src = good.imgUrl;
    image.alt = good.text;
    listItem.appendChild(image);
  
    var price = createElement('p', 'good__price', good.price + '₽/кг');
    listItem.appendChild(price);
  
    var availablity = 'good--unavailable'
    if (good.inStock) {
      availablity = 'good--available'
    }
    listItem.classList.add(availablity);
  
    if (good.isHit) {
      listItem.classList.add('good--hit');
      var specialOffer = createElement('p', 'good__special-offer', good.specialOffer);
      listItem.appendChild(specialOffer);
    }
  
    return listItem;
  }
  
  
  
  var renderCards = function (goods) {
    var cardList = document.querySelector('.goods');
  
    for (var i = 0; i < goods.length; i++) {
      var cardItem = createCard(goods[i]);
      cardList.appendChild(cardItem)   
    }  
  }
  
  renderCards(cardsData);
  
  /* Техническое задание
  
  Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.
  
  Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:
  
  - inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
  - imgUrl — ссылка на изображение товара.
  - text — название продукта.
  - price — цена.
  - isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
  - specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.
  
  Вот пример вёрстки одной карточки в каталоге:
  
  <ul class="goods">
    <li class="good">
      <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
      <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
      <p class="good__price">110₽/кг</p>
    </li>
    ...
  </ul>
  
  Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.
  
  Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.
  
  */
  
  /* Предыдущий код
  var cardsData = [
    {
      inStock: true,
      imgUrl: 'gllacy/choco.jpg',
      text: 'Сливочно-кофейное с кусочками шоколада',
      price: 310,
      isHit: true,
      specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
      inStock: false,
      imgUrl: 'gllacy/lemon.jpg',
      text: 'Сливочно-лимонное с карамельной присыпкой',
      price: 125,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'gllacy/cowberry.jpg',
      text: 'Сливочное с брусничным джемом',
      price: 170,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'gllacy/cookie.jpg',
      text: 'Сливочное с кусочками печенья',
      price: 250,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'gllacy/creme-brulee.jpg',
      text: 'Сливочное крем-брюле',
      price: 190,
      isHit: false
    }
  ];
  
  var createElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
      element.textContent = text
    }
    return element
  }
  
  var createCard = function (good) {
    var listItem = createElement('li', 'good');
  
    var title = createElement('h2', 'good__description', good.text);
    listItem.appendChild(title);
  
    var image = createElement('img', 'good__image');
    image.src = good.imgUrl;
    image.alt = good.text;
    listItem.appendChild(image);
  
    var price = createElement('p', 'good__price', good.price + '₽/кг');
    listItem.appendChild(price);
  
    return listItem;
  }
  
  var renderCards = function (goods) {
    var cardList = document.querySelector('.goods');
  
    for (var i = 0; i < cardList.length; i++) {
      var cardItem = createCard(goods[i]);
      cardList.appendChild(cardItem)
     
    }
    
  }
  
  renderCards(cardsData);
  
  */