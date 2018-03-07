var linebot = require('linebot');

var bot  = linebot({
    channelId: 1566677420,
    channelSerect: '86e5925c1a49a69f7fe195933325ed8e',
    channelAccessToken: 'wt4Q0Nwi/M97LhdJyiw2KhAmjiJwlcgRE1SB2Q6lyyuxbb3cefWQNTe8vMCyrjt4bQyoI6Oqf8+gQrWLWOCKVjuN1svUQUzmPRN5gNJOrOWgakCV4P0/35O5fMs1m3hAzcDLs8ToZ4K7jQk6o8UVywdB04t89/1O/w1cDnyilFU='

});

bot.on('message', function(event){
    event.reply(event.message.text).then(function(data){
        console.log('Success', data);
    }).catch(function(error){
        console.log('Error', error);
    });
});

bot.listen('/webhook', 3000);