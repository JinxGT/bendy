const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "be!"

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity("discord.gg/hsSAX9K", {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });

}
)

// THIS IS THE (be!help) COMMAND

bot.on('message', async message => {
	if (message.content === "be!help" ) {
		message.delete().catch(O_o => { });
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('COMMANDS')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('**Please keep in mind that this is still under development!**')
		.addField(':tools: Moderation', '``be!mod``', false)
		.addField(':gear: Utility', '``be!util``', false)
		.addField(':game_die: Fun', '``be!fun``', false)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// Page 1

bot.on('message', async message => {
	if (message.content === "be!mod" ) {
		message.delete().catch(O_o => { });
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('Moderation commands')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.addField('Kick', '``be!kick``', false)
		.addField('Ban', '``be!ban``', false)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// Page 2

bot.on('message', async message => {
	if (message.content === "be!util" ) {
		message.delete().catch(O_o => { });
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('Utility commands')
		.setDescription('for more help please use the ``be!help`` command')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.addField('Invite', '``be!invite``', false)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// Page 3

bot.on('message', async message => {
	if (message.content === "be!fun" ) {
		message.delete().catch(O_o => { });
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('Fun commands')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('Coming soon!')
		.addField('Lol', '``be!lol``', false)
		.addField('Objection', '``be!objection``', false)
		.addField('Hold It', '``be!holdit``', false)
		.addField('Take That', '``be!takethat``', false)
		.addField('OwO', '``be!owo``', true)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THESE ARE THE FUN COMMANDS

bot.on('message', async message => {
      if (message.content.startsWith("be!coinflip")) {
	      message.delete().catch(O_o => { });
        //If the message's content starts with "coinflip" run the following:
        let outcomes = ["Heads", "Tails"];
        //An array that has the possible outcomes from flipping a coin, heads and tails
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        //This will be what index of the outcomes array should be selected (arrays start at 0)
        //Math.round() rounds the parameter inside, in this case, Math.random()
        message.channel.send(outcomes[outcomesIndex]);
        //'koolMessage' is what we decided to call the message in the 'message' event, above. It can be called whatever you'd like
        //'channel' is the text channel in which 'koolMessage' was sent
        //The send() function sends a message with the included argument (e.g. send("hello there!")). It must be sent in a channel, in this case, the channel in which the 'koolMessage' from the user was sent
        //If we would have outcomes[0], the output would be "Heads", if we would have outcomes[1] the output would be "Tails", so we randomize it, giving us either outcomes[0] or outcomes[1]
      }
    });

bot.on('message', async message => {
	if (message.content === "be!owo" ) {
		message.delete().catch(O_o => { }); 
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('OwO')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('Just why?')
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!lol" ) {
		message.delete().catch(O_o => { });
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('LOL')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('Lots of Love to you to!')
		.setThumbnail('https://media.tenor.com/images/01eeabe1dc9412e5bc8c9c23a8d5c750/tenor.gif')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!objection" ) {
		message.delete().catch(O_o => { });
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('OBJECTION')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('idk why tho...')
		.setThumbnail('https://i.imgur.com/19WEQFO.gif')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!holdit" ) {
		message.delete().catch(O_o => { });
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('HOLD IT!!!')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('please...')
		.setThumbnail('https://i.imgur.com/6kg9dtc.png')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!takethat" ) {
		message.delete().catch(O_o => { });
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('TAKE THAT')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('you are lol!!!')
		.setThumbnail('https://i.imgur.com/S45Dsnb.png')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THESE ARE UTILITY COMMANDS

bot.on('message', async message => {
	if (message.content === "be!invite" ) {
		message.delete().catch(O_o => { });
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('INVITE')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot')
		.setDescription(" [``[Click here]``](https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot)")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THESE ARE THE KICK AND BAN COMMANDS

bot.on('message', message => {
	message.delete().catch(O_o => { });
    const arguments = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = arguments.shift().toLowerCase();
if (message.content.startsWith(prefix) && commandName == "kick") {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Permissions invalid");
    const userKick = message.mentions.users.first();

    if (userKick) {
        var member = message.guild.member(userKick);

        if (member) {
            member.kick({
                reason: `This person was kicked using a bot's moderation system. We are so sorry if this caused problems.`
    }).then(() => {
        message.reply(`A user been kicked.`) 
    })
} else {
    message.reply(`User not found`);
}
    } else {
        message.reply(`Please enter a name`)
    }}})


    bot.on('message', message => {
	    message.delete().catch(O_o => { });
        const arguments = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = arguments.shift().toLowerCase();
    if (message.content.startsWith(prefix) && commandName == "ban") {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Permissions invalid");
        const userBan = message.mentions.users.first();
    
        if (userBan) {
            var member = message.guild.member(userBan);
    
            if (member) {
                member.ban({
                    reason: `This person was banned using a bot's moderation system. We are so sorry if this caused problems.`
        }).then(() => {
            message.reply(`a user has been banned!`) 
        })
    } else {
        message.reply(`User not found`);
    }
        } else {
            message.reply(`Please enter a name`)
        }}})

// THIS IS THE TOKEN HOLDER

bot.login(process.env.token);
