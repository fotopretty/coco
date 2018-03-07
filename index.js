var linebot = require('linebot');

require('dotenv').config();

var bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSerect: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    verify: true
});

bot.on('message', function (event) {
    switch (event.message.text) {
        case 'Me':
            event.source.profile().then(function (profile) {
                return even.reply('Hello ' + profile.displayName + ' ' + profile.userId);
            });
            break;
        default:
            event.reply(event.message.text).then(function (data) {
                console.log('Success', data);
            });
            console.log('what');
            break;
    }
});

bot.listen('/webhook', process.env.PORT, function () {
    console.log('LineBot is Running');
});