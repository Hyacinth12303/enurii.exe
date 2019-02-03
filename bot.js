const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!spam";

client.on('ready', () => {
    console.log('I feel alive');

    //client.channels.find(x => x.name === 'ostentatious-declaration').send('ɢʀᴇᴇᴛɪɴɢs, ᴘᴀᴛʜᴇᴛɪᴄ ғᴀʟʟɪʙʟᴇ ᴄʀᴇᴀᴛᴜʀᴇs... ʜᴏᴡ ᴍᴀʏ ɪ ʜᴇʟᴘ ʏᴏᴜ?')
});

client.on('message', (msg) => {
    if (msg.content === 'Hello Enurii') { 
        msg.channel.send('Greetings... {0.author.mention}');    
    }
});

client.on ("message", (msg) => {
    msg = message.content.toLowerCase();
    if (message.author.bot) return;
    mention = message.content.users.first();
    if (msg.startsWith (prefix + "send")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.SendMessage (mentionMessage);
        message.channel.send ("you have successfully brought the plague to a victim...");

client.on('message', async (bots, message, args) => {
    let target = message.metions.user.first() || message.author
    
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
