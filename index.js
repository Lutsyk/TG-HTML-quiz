const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1292343956:AAGgmHVfWvFxxdgL6uu-WHUZA6g-fYuKRLo'

const bot = new TelegramBot(TOKEN,{
    polling:{
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }
  
  var HTMLarray = [
    '<ul> </ul> подсказка - https://t.me/c/1447331606/5',
    '<ol> </ol> подсказка - https://t.me/c/1447331606/6',
    '<li> </li> подсказка - https://t.me/c/1447331606/4',
    'target="_blank" подсказка - https://t.me/c/1447331606/9',
    'href="#" подсказка - https://t.me/c/1447331606/12',
    'img src="https://bit.ly/ подсказка - https://t.me/c/1447331606/14',
    '<a> </a> подсказка - https://t.me/c/1447331606/16',
    '<p> </p> подсказка - https://t.me/c/1447331606/18',
    '<h1> </h1>...<h6></h6> подсказка - https://t.me/c/1447331606/20',
    '<pre> </pre> подсказка - https://t.me/c/1447331606/22',
    '<main></main> подсказка - https://t.me/c/1447331606/24',
    'input type="" подсказка - https://t.me/c/1447331606/26',
    'placeholder="" подсказка - https://t.me/c/1447331606/30'
];
  
var chooser = randomNoRepeats(HTMLarray);

bot.onText(/\/quiz/, msg => {
    const { id } = msg.chat

    bot.sendMessage(id, chooser() + '\n\nНу шо це? Отвечает - ' + msg.from.first_name)
})

bot.onText(/\/star/, msg => {
    const { id } = msg.chat

    bot.sendMessage(id,'Давай начнем - ' + msg.from.first_name)
})

bot.onText(/\/help/, msg => {
    const { id } = msg.chat

    bot.sendMessage(id,'Тебе сюда - https://t.me/joinchat/AAAAAFZEhxY1q5GrH1IO8A')
})
    