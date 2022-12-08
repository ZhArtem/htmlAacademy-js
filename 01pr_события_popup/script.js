var popup = document.querySelector('.popup');
var openPopupButton = document.querySelector('.button-show')
var closePopupButton = popup.querySelector('.button-hide')

openPopupButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup--open');
})

closePopupButton.addEventListener('click', function() {
  popup.classList.remove('popup--open');
})

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('popup--open');
  }
})

/* Техническое задание

Нужно запрограммировать взаимодействие с пользователем.

В разметке есть попап (класс 'popup').

Клик по кнопке «Показать подробности» (класс 'button-show') должен вызвать показ окна на странице. У попапа должен появиться класс 'popup--open'.

Клик крестику в теле попапа (класс 'button-hide') должен спрятать окно со страницы. Для этого нужно удалить класс 'popup--open' у окна.

Кроме этого, если окно на странице, а пользователь нажал клавишу ESC, попап тоже должен исчезнуть. Закрытие попапа должно срабатывать только по этой клавише, нажатие на другие клавиши не должны влиять на положение всплывающего окна.

И не забывай, что кнопка «Показать подробности» свёрстана ссылкой. Не забудь отменить переход по этой ссылке.

*/


