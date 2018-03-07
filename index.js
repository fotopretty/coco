var linebot = require('linebot');

require('dotenv').config();

var bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSerect: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    verify: true
});

bot.on('message', function (event) {
    event.reply(event.message.text).then(function(data){
        console.log('Success' , data);
    }).catch(function(error){
        console.log('Error', error);
    });
});

bot.listen('/webhook', process.env.PORT || 80, function () {
    console.log('LineBot is Running');
});