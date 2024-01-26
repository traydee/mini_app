const { Telegraf, Markup } = require('telegraf');

// Замените 'YOUR_TOKEN' на ваш токен, полученный от BotFather
const TOKEN = '6532040702:AAHBObu3fxF886m2JZSGmibUTmT2UqGQb3U';

// Создаем экземпляр бота
const bot = new Telegraf(TOKEN);

// Обработчик команды /start
bot.start((ctx) => {
    // Создаем объект кнопки с параметром web_app
    const button = Markup.button.callback('Открыть мини-приложение', 'open_mini_app');

    // Отправляем приветственное сообщение с кнопкой
    ctx.reply('Привет! Нажми кнопку ниже, чтобы открыть мини-приложение:', Markup.inlineKeyboard([button]));
});

// Обработка нажатия кнопки "Открыть мини-приложение"
bot.action('open_mini_app', (ctx) => {
    // Ответить на запрос и открыть мини-приложение
    ctx.answerCbQuery('Открываем мини-приложение');
    // Здесь можно добавить код для открытия вашего мини-приложения
});

// Запускаем бот
bot.launch();