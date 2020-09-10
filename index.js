const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "test!"

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity("https://discord.gg/hsSAX9K | V 5.0", {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });

}
)

// THIS IS THE (be!help) COMMAND

bot.on('message', async message => {
	if (message.content === "test!help" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('COMMANDS')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('**Please keep in mind that this is still under development!**')
		.addField(':tools: Moderation', '``test!help 1``', true)
		.addField(':gear: Utility', '``test!help 2``', true)
		.addField(':game_die: Fun', '``test!help 3``', true)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// Page 1

bot.on('message', async message => {
	if (message.content === "test!help 1" ) {
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
	if (message.content === "test!help 2" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('Utility commands')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.addField('Invite', '``test!invite``', true)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// Page 3

bot.on('message', async message => {
	if (message.content === "test!help 3" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('Fun commands')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setDescription('Coming soon!')
		.addField('Lol', '``test!lol``', true)
		.addField('Objection', '``test!objection``', true)
		.addField('Hold It', '``test!holdit``', true)
		.addField('Take That', '``test!takethat``', true)
		.addField('OwO', '``test!owo``', true)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/750546624694190090/JPEG_20200721_071825.jpg')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THESE ARE THE FUN COMMANDS

bot.on('message', async message => {
	if (message.content === "test!owo" ) {
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
	if (message.content === "test!lol" ) {
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
	if (message.content === "test!objection" ) {
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
	if (message.content === "test!holdit" ) {
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
	if (message.content === "test!takethat" ) {
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
	if (message.content === "test!invite" ) {
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

// THIS IS THE TOKEN HOLDER

bot.login(process.env.token);
