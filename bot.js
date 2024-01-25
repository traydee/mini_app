

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = '6532040702:AAHBObu3fxF886m2JZSGmibUTmT2UqGQb3U';
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Я бот. Как дела?');
});

// Обработка сообщений
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Получил ваше сообщение: ' + msg.text);
});

// Создание веб-сервера
const app = express();

// Рендеринг HTML страницы
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Обработка POST запроса на отправку сообщения
app.post('/sendMessage', express.json(), (req, res) => {
  const message = req.body.message;
  bot.sendMessage(chatId, message);
  res.send('Message sent successfully');
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
