

const TelegramBot = require('node-telegram-bot-api');
const API_TOKEN = '6014262468:AAGOHHRy3lupw3tpTG0HuitfLBqPDkZFg04';
const BOT_USERNAME = 'goodstrangebot';


const bot = new TelegramBot(API_TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/location') {
    bot.sendLocation(chatId, 51.5074, -0.1278); // London coordinates (you can change it to any desired location)
  }

  const greeting = getGreetingBasedOnTime();
  const response = `${greeting}\n\nThank you for your message: ${messageText}`;
  bot.sendMessage(chatId, response);
});

function getGreetingBasedOnTime() {
  const currentTime = new Date().getHours();

  if (currentTime < 12) {
    return 'Good morning!';
  } else if (currentTime < 17) {
    return 'Good afternoon!';
  } else if (currentTime < 20) {
    return 'Good evening!';
  } else {
    return 'Good night!';
  }
}
