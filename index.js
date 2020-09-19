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
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('COMMANDS')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('**Please keep in mind that this is still under development!**')
		.addField(':tools: Moderation', '``be!help 1``', true)
		.addField(':gear: Utility', '``be!help 2``', true)
		.addField(':game_die: Fun', '``be!help 3``', true)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// Page 1

bot.on('message', async message => {
	if (message.content === "be!help 1" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('Moderation commands')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('Coming soon!')
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// Page 2

bot.on('message', async message => {
	if (message.content === "be!help 2" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('Utility commands')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.addField('Invite', '``be!invite``', true)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// Page 3

bot.on('message', async message => {
	if (message.content === "be!help 3" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('Fun commands')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('Coming soon!')
		.addField('Lol', '``be!lol``', true)
		.addField('Objection', '``be!objection``', true)
		.addField('Hold It', '``be!holdit``', true)
		.addField('Take That', '``be!takethat``', true)
		.addField('OwO', '``be!owo``', true)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THESE ARE THE FUN COMMANDS

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

bot.on('message', async message => {
	if (message.content === "be!kick") {
        	if (message.author.bot) return;
        	if (message.channel.type === "dm") return;
        	if (!message.member.hasPermission("KICK_MEMBERS"))
            return message.reply(You need "kick members" permission to use this command.);

        var member = message.mentions.members.first();
        if (!member)
            return message.reply("You need to specify a user in the server");
        if (!member.kickable)
            return message.reply("cannot kick this user");

        var reason = args.slice(2).join(' ');
        if (!reason) reason = "no reason provided";

        member.kick(reason)
            .catch(error => message.reply(sorry ${message.author} i couldn't kick, because of : ${error}));
        message.channel.send(${member.user.tag} has been kick by ${message.author.tag}, reason: ${reason});

// THIS IS THE TOKEN HOLDER

bot.login(process.env.token);
