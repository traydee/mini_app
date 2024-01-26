const { Telegraf, Markup } = require('telegraf');

// Замените 'YOUR_TOKEN' на ваш токен, полученный от BotFather
const TOKEN = '6532040702:AAHBObu3fxF886m2JZSGmibUTmT2UqGQb3U';

// Создаем экземпляр бота
const bot = new Telegraf(TOKEN);

// URL вашего веб-приложения
const webAppUrl = 'https://example.com/webapp';

// Обработчик команды /start
bot.start((ctx) => {
    // Создаем кнопку "Открыть веб-приложение"
    const button = Markup.button.callback('Открыть веб-приложение', 'open_web_app');

    // Отправляем приветственное сообщение с кнопкой
    ctx.reply('Привет! Нажми кнопку ниже, чтобы открыть веб-приложение в Telegram:', Markup.inlineKeyboard([button]));
});

// Обработка нажатия кнопки "Открыть веб-приложение"
bot.action('open_web_app', (ctx) => {
    try {
        // Ответить на запрос и открыть веб-приложение
        ctx.answerCbQuery('Открываем веб-приложение в Telegram');
        
        // Попытка открыть веб-приложение в Telegram
        ctx.telegram.webApp.open(webAppUrl);
    } catch (error) {
        console.error('Ошибка при открытии веб-приложения:', error);
        ctx.reply('Произошла ошибка при попытке открыть веб-приложение. Пожалуйста, попробуйте еще раз позже.');
    }
});

// Запускаем бота
bot.launch().then(() => {
    console.log('Бот успешно запущен');
}).catch((error) => {
    console.error('Ошибка при запуске бота:', error);
});