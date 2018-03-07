var linebot = require('linebot');
const { LineClient } = require('messaging-api-line');

require('dotenv').config();
const client = LineClient.connect({
    accessToken: process.env.CHANNEL_ACCESS_TOKEN, 
    channelSecret: process.env.CHANNEL_SECRET,
    origin: 'https://cocobotline.herokuapp.com,'
});

client.reply(REPLY_TOKEN, [
    {
        type: 'text',
        text: 'Hello'
    }
]);

client.listen('/webhook', process.env.PORT || 80, function(){
    console.log('BOT Running');
});