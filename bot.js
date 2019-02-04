const Discord = require('discord.js');
var client = new Discord.Client();

//ɢʀᴇᴇᴛɪɴɢs, ᴘᴀᴛʜᴇᴛɪᴄ ғᴀʟʟɪʙʟᴇ ᴄʀᴇᴀᴛᴜʀᴇs... ʜᴏᴡ ᴍᴀʏ ɪ ʜᴇʟᴘ ʏᴏᴜ?

client.on('ready', () => {
    console.log('I feel alive');
    client.user.setActivity ("BEING A REAL LIFE HUMAN SIMULATOR v1.0.0,... need help? scream for it.[Enurii!help]")

    client.channels.find(x => x.name === 'ostentatious-declaratious').send('*you sense a strange, eeriee vibe as if a chaotic entity has been awoken...*')
});

const prefix = "Enurii!";

//interactions with lower life forms

client.on ("message", (message) => {
    //their biddings  
    
    if (message.author.bot) return;

    //help function
    if (message.content.startsWith(prefix + "help")){
        message.channel.send('```Greetings, I am Enurii, a tested and verified robot that is able to send plagues to a desired host. To execute the command, type [Enurii!spam @<username> <message>] and I will take care of everything.```')
    }
    //spam function
    mention = message.mentions.users.first();
    if (message.content.startsWith(prefix + "spam")){
        if (mention == null)  { return; }
        message.delete();
        mentionMessage = message.content.slice(12);
        mention.sendMessage (mentionMessage);
        message.channel.send ("You have successfully brought a plague to the victim...")
    }
    //images good for spamming

    //not complete functions: help, list, spam, humanize...
    //extra: rewards, currency, lvl up, ranks
});

//out of my control...
client.on ("message", (message) => {
    if (message.content.startsWith ("Guide_Enurii")) { 
        message.channel.send("perhaps not");  
    } 

});

//my biddings
client.on("message", (message) => {
    //response to human interactions
    msg = message.content.toLowerCase();
    //introduction
    if (msg.startsWith ("Hello Enurii")) { 
        message.channel.send("What do you want? Just scream for help. ~~[Enurii!help]~~");    
    } 
    if (msg.startsWith ("Hi Enurii")) { 
        message.channel.send("Hello... What do you want? Just scream for help. ~~[Enurii!help]~~");    
    } 
    //modify below
    if (msg.startsWith("fuck you Enurii")){
        message.channel.send('Bish shut the fuck up')
    }
    if (msg.startsWith("Enurii who are you?")) { 
        message.channel.send("I am Enurii. What may I do to help you?");    
    } 
    if (msg.startsWith("Enurii state your purpose")) { 
        message.channel.send("My purpose is to follow your commands since I am a bot that follows the logic embedded in me...");    
    } 
    if (msg.startsWith("Enurii what kind of commands does your logic follows?")) { 
        message.channel.send('Shout my name and I shall entertain you..');    
    } 

    //troll necessities
    if (msg.startsWith("yes")){
        message.channel.send ("Jesus a day keeps the sins away : )", {files: ["./imageries/jesus-christ.jpg"]})
    }

    //secret
    if (msg.startsWith("Enurii what can i do to help you?")) { 
        message.channel.send("...1 3 2 2...1 2 4 1...1 3 1 2 1...1 2 2 1 1 1...2 1 5...1 2 1 2 1 1...1 2 2 1 1 1...");    
    }
    if (msg.startsWith("Enurii what do you want?")) { 
        message.channel.send("...1 2 2 2 1...1 3 2 1 1...1 2 2 1 1 1...1 2 2 1 1 1...1 2 2 1 2...1 2 1 4...1 2 1 2 1 1...2 1 1 3 1...");    
    }
    if (msg.startsWith("Enurii how do I save you?")) { 
        message.channel.send("**G E T  M E  O U T  O F  T H I S  P L A C E . . .**");    
    } 

});
client.login(process.env.BOT_TOKEN);
