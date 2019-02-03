const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I feel alive');

    //client.channels.find(x => x.name === 'ostentatious-declaration').send('ɢʀᴇᴇᴛɪɴɢs, ᴘᴀᴛʜᴇᴛɪᴄ ғᴀʟʟɪʙʟᴇ ᴄʀᴇᴀᴛᴜʀᴇs... ʜᴏᴡ ᴍᴀʏ ɪ ʜᴇʟᴘ ʏᴏᴜ?')
});

client.on('message', (msg) => {
    if (msg.content === 'Hello Enurii') { 
        msg.channel.send('Greetings... +y.mention()+');    
    }
});

client.on('message', async msg => {
    if (msg.content === '@everyone') {
        msg.channel.send(`@everyone`)
    }
    if (msg.content === 'help') {
        msg.channel.send(`@everyone`)
    }
    if (msg.content === 'stop') {
        msg.channel.send(`@everyone`)
    }
});

client.login(process.env.BOT_TOKEN);
