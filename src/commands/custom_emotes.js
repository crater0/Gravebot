import path from 'path';

export default { 
 payris: (bot, msg) => {
    bot.sendFile(msg.channel, path.join(__dirname, '../images/payris.png'));
  },
  smolpayris: (bot, msg) => {
   bot.sendFile(msg.channel, path.join(__dirname, '../images/smolpayris.png'));
  },
  blepgoat: (bot, msg) => {
   bot.sendFile(msg.channel, path.join(__dirname, '../images/blep.png'));
  }
}