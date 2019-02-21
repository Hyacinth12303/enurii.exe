const Discord = require('discord.js');
var client = new Discord.Client();
var profanities = require('profanities')

//ɢʀᴇᴇᴛɪɴɢs, ᴘᴀᴛʜᴇᴛɪᴄ ғᴀʟʟɪʙʟᴇ ᴄʀᴇᴀᴛᴜʀᴇs... ʜᴏᴡ ᴍᴀʏ ɪ ʜᴇʟᴘ ʏᴏᴜ?

client.on('ready', () => {
    console.log(`you sense a strange, eeriee vibe as if an unknown entity has been awoken...`);
    client.user.setStatus('online')
    client.user.setActivity (`THE LIVES OF THE IGNORANTS v3.6.6 with ${client.guilds.size} servers and ${client.users.size} users...`)
    //client.user.setActivity ("BEING A REAL LIFE HUMAN SIMULATOR!! v1.0.0")
    client.channels.find(x => x.name === 'ostentatious-declaratious').send('Greetings @everyone ... I am Enurii. Need help? scream for it. `[Enurii!help]`')    
});

const prefix = "Enurii!";

//interactions with lower life forms

client.on ("message", (message) => {
    //their biddings  
    
    if (message.author.bot) return;

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

//help function
client.on('message', (message) => {
    //help function
    var help = new Discord.RichEmbed()
        .setTitle("Guide o Enurii: command help manual")
        .setAuthor("ᴇиυяιι", client.user.avatarURL)
        .setDescription("CRY FOR HELP? say no more to Guide o Enurii!")
        .addField("Introduction", "I am Enurii. Whenever people aren't responding or reply to your message.. Don't fret because I will help you!!")
        .addField("Purpose", "I only **__attract attention__** to a certain member, not sending them the message you wanted...")
        .addField("How to Enurii","I only respond to a certain command called `Enurii!`. It must be followed to a certain keyword.")
        .addField("Format", "`Enurii! + [command] + [metion] + [number of messages]`")
        .setColor(0x8bff84)
        .setTimestamp(new Date)
        .setThumbnail(client.user.avatarURL)
        .setFooter("lets us now start a peaceful riot : )", client.user.avatarURL)
    if (message.content.startsWith(prefix + "help")){
        message.channel.send(help)
        message.delete();
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
//modified communication
client.on('message', (message)=>{
    const hai = message.content.toLowerCase();
    //extras
    if(hai.startsWith('hewwo')) {
        message.channel.send('OwO');
    }
    if(hai.startsWith('hello')){
        message.channel.send('hi')
    }
    if (hai.startsWith("yes")){
        message.channel.send ("Jesus a day keeps the sins away : )", {files: ["./imageries/jesus-christ.jpg"]})
    }
    for (x = 0; x < profanities.length; x++){
        if (message.content.toLowerCase() == profanities[x].toLowerCase()){
            message.channel.send("**sTOP SWEARING IN THIS CHRISTIAN SERVER**", {files: ["./imageries/unhappy-jesus.jpg"]})
            message.delete()
            return;
        }
    }
});

client.login(process.env.BOT_TOKEN);
