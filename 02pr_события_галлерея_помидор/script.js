  /* Техническое задание
  
  Мяу! Нужно оживить галерею с фотографиями товаров.
  В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и большое изображение (класс 'full-picture').
  После клика по превью большая фотография должна поменяться. Большое изображение должно быть таким же, как и в миниатюре, только большего размера.
  Пути к полноразмерным фотографиям находятся в массиве pictures. Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.
  
  */

var pictures = [
    'gallery-tomato/tomato-red-large.jpg',
    'gallery-tomato/tomato-yellow-large.jpg',
    'gallery-tomato/tomato-strange-large.jpg'
  ];
  
  var thumbnails = document.querySelectorAll('.gallery__picture-preview');
  var fullPhoto = document.querySelector('.full-picture');
  
  var addThumbnailClickHandler = function (thumbnail, photo) {
    thumbnail.addEventListener('click', function () {
      fullPhoto.src = photo;
    })
  };
  
  for (var i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], pictures[i]);
  }
  

  