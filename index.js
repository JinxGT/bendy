const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "be!"

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity("discord.gg/hsSAX9K | V 7.2", {
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

// THIS IS THE KICK AND BAN COMMANDS COMMAND

// If the message content starts with "!kick"
bot.on('message', async message => {
  if (message.content.startsWith('be!kick')) {
	  if (msg.member.haspermission('KICK_MEMBER') return message.reply("You don't have permisson to use this command!")
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

// if the message content starts with "!ban"
bot.on('message', async message => {
  if (message.content.startsWith('be!ban')) {
	  if (msg.member.haspermission('BAN_MEMBER') return message.reply("You don't have permisson to use this command!")
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }
});

// THIS IS THE TOKEN HOLDER

bot.login(process.env.token);
