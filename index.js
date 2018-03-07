var linebot = require('linebot');

require('dotenv').config();

var bot  = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSerect: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    verify: true
});

bot.on('message', function(event){
    return event.reply(event.message.text).then(function(data){
        console.log('Success', data)
    }).catch(function(error){
        console.log('Error', error);
    });
});

bot.listen('/webhook', process.env.PORT, function(){
    console.log('LineBot is Running');
});