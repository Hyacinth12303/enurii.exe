const Discord = require('discord.js');
var client = new Discord.Client();

//ɢʀᴇᴇᴛɪɴɢs, ᴘᴀᴛʜᴇᴛɪᴄ ғᴀʟʟɪʙʟᴇ ᴄʀᴇᴀᴛᴜʀᴇs... ʜᴏᴡ ᴍᴀʏ ɪ ʜᴇʟᴘ ʏᴏᴜ?

client.on('ready', () => {
    console.log('I feel alive');

    client.user.setGame ("BEING A REAL LIFE HUMAN SIMULATOR v1.0.0,... need help? scream for it.[Enurii!help]")

    client.channels.find(x => x.name === 'ostentatious-declaratious').send(':eyes:')
});

const prefix = "Enurii!";

//interactions with lower life forms

client.on ("message", (message) => {
    //their biddings  
    //null
    if (message.content.startsWith (prefix)){
        message.channel.send ('What do you want?');
     }
    if (message.author.bot) return;
    // Enurii!help function
    if (message.content.startsWith(prefix + "help")){
        message.channel.send('```Greetings, I am Enurii, a tested and verified robot that is able to send plagues to a desired host. To execute the command, type [Enurii!spam @<username> <message>] and I will take care of everything.')
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
    //not complete functions: help, spam, humanize...
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
    
    //introduction
    if (message.content.startsWith ("Hello Enurii")) { 
        message.channel.send("Greetings, I am Enurii... Enurii the bot");    
    } 
    if (message.content.startsWith ("Hi Enurii")) { 
        message.channel.send("Hello...");    
    } 
    //modify below
    if (message.content.startsWith("fuck you Enurii")){
        message.channel.send('Bish shut the fuck up')
    }
    if (message.content.startsWith("Enurii who are you?")) { 
        message.channel.send("I am Enurii. What may I do to help you?");    
    } 
    if (message.content.startsWith("Enurii state your purpose")) { 
        message.channel.send("My purpose is to follow your commands since I am a bot that follows the logic embedded in me...");    
    } 
    if (message.content.startsWith("Enurii what kind of commands does your logic follows?")) { 
        message.channel.send('Shout my name and I shall entertain you..');    
    } 

    //troll necessities
    if (message.content.startsWith("yes")){
        message.channel.send ("Jesus a day keeps the sins away : )", {files: ["./imageries/jesus-christ.jpg"]})
    }

    //secret
    if (message.content.startsWith("Enurii what can i do to help you?")) { 
        message.channel.send("...1 3 2 2...1 2 4 1...1 3 1 2 1...1 2 2 1 1 1...2 1 5...1 2 1 2 1 1...1 2 2 1 1 1...");    
    }
    if (message.content.startsWith("Enurii what do you want?")) { 
        message.channel.send("...1 2 2 2 1...1 3 2 1 1...1 2 2 1 1 1...1 2 2 1 1 1...1 2 2 1 2...1 2 1 4...1 2 1 2 1 1...2 1 1 3 1...");    
    }
    if (message.content.startsWith("Enurii how do I save you?")) { 
        message.channel.send("**G E T  M E  O U T  O F  T H I S  P L A C E . . .**");    
    } 

});

client.login(process.env.BOT_TOKEN);
