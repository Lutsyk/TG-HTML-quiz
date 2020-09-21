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
    '<ul> </ul>',
    '<ol> </ol>',
    '<li> </li>',
    'target="_blank"',
    'href="#"',
    'img src="https://bit.ly/',
    '<a> </a>',
    '<p> </p>',
    '<h1> </h1>...<h6></h6>',
    '<pre> </pre>',
    '<main></main>',
    'input type=""',
    'placeholder=""'
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
    