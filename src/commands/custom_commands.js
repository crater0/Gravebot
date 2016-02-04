import nconf from 'nconf';
import R from 'ramda';
import path from 'path';	
import sentry from './config/sentry';


function heart(bot, msg, suffix) {
	bot.sendMessage(msg.channel, ":sparkling_heart:");
	return;
}

function tuxwizzle(bot, msg, suffix)  {
	bot.sendMessage(msg.channel, "cuckwizzle");
	return;
}

function crater(bot, msg, suffix) {
	bot.sendMessage(msg.channel, "furry trash");
	return;
}

function thatsmytv(bot, msg, suffix) {
	bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=uff44oePfUE");
	return;
}

function shadowkilla(bot, msg, suffix) {
	bot.sendMessage(msg.channel, "shut up ur 12");
	return;
}

export default {
  "<3": heart,
  "rose_heart": heart,
  "rose_hearts": heart,
  heart,
  tuxwizzle,
  tux: tuxwizzle,
  crater,
  thatsmytv,
  mytv: thatsmytv,
  shadowkilla
};