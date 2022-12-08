// Контейнер для сообщений
var chat = document.querySelector('.chat-content');
// Создаем динамическую коллекцию из сообщений внутри контейнера сообщений
var messages = chat.children;

// Форма и поле ввода текста
var newMessageForm = document.querySelector('.chat-form');
var newMessageText = newMessageForm.querySelector('.chat-form-input');

// Шаблон для сообщения
var messageTemplate = document.querySelector('#message-template').content;
var newMessageTemplate = messageTemplate.querySelector('.chat-message')


// Удаление сообщения по крестику
var DeleteMessageHandler = function (message) {
  var delButton = message.querySelector('.chat-message-button');
  delButton.addEventListener('click', function () {
        message.remove();
  })
}


//for (var i = 0; i < messages.length; i++) {
//  DeleteMessageHandler(messages[i]);
//}

// Создание нового сообщения
newMessageForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  // Получаем текст из поля ввода
  var newText = newMessageText.value;
  // Клонируем шаблон сообщения
  var newMessage = newMessageTemplate.cloneNode(true);
  // Находим контейнер для текста и записываем туда сообщение из ввода
  var messageText = newMessage.querySelector('.chat-message-text');
  messageText.textContent = newText;
  // Добавляем обработчик удаления сообщений по крестику
  DeleteMessageHandler(newMessage);
  // Добавляем сообщение на страницу
  chat.appendChild(newMessage);
  // Чистим содержимое поля ввода
  newMessageText.value = '' 
})



/* 

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).
    
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/
