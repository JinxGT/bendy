const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "be!"

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity('undertale | be!help', { 
        type: "PLAYING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });

}
)

// THIS IS THE (be!help) COMMAND

bot.on('message', async message => {
	if (message.content === "be!help" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('COMMANDS')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('**Please keep in mind that this is still under development. If you need support please use ``be!support``!**')
		.addField(':tools: Moderation', '``be!mod``', false)
		.addField(':gear: Utility', '``be!util``', false)
		.addField(':game_die: Fun', '``be!fun``', false)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!stats" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('STATS')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('To invite this bot to your server use the ``be!invite`` command!')
		.addField("⏳ ping", `${Math.round(bot.ws.ping)}ms`, false)
		.addField(":yellow_circle: Status", `Possible downtime and latency!`, false)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!ping" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('PONG!')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.addField("⏳ Your ping is:", `${Math.round(bot.ws.ping)}ms`, false)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
      if (message.content.startsWith("be!8ball")) {
        let outcomes = ['Signs point to yes.', 'Without a doubt.', 'My sources say no.', 'Yes, definitely.', 'Outlook not so good.', 'All signs point to yes.', 'Sure'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        message.channel.send(outcomes[outcomesIndex]);

      	}
    });

bot.on('message', async message => {
      if (message.content.startsWith("be!sarcasticball")) {
        let outcomes = ['This is a premium feature, use the ``be!get-premium`` command to get premium!'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        message.channel.send(outcomes[outcomesIndex]);

      	}
    });

bot.on('message', async message => {
      if (message.content.startsWith("be!dance")) {
        let outcomes = ['This is a premium feature, use the ``be!get-premium`` command to get premium!'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        message.channel.send(outcomes[outcomesIndex]);

      	}
    });

bot.on('message', async message => {
      if (message.content.startsWith("be!server")) {
        let outcomes = ['This is a premium feature, use the ``be!get-premium`` command to get premium!'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        message.channel.send(outcomes[outcomesIndex]);

      	}
    });

bot.on('message', async message => {
      if (message.content.startsWith("be!coinflip")) {
        let outcomes = ['HEADS', 'TAILS'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        message.channel.send(outcomes[outcomesIndex]);

      	}
    });

bot.on('message', async message => {
	if (message.content === "be!status" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('STATUS')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription(':yellow_circle:: Possible downtime and latency!')
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// Page 1

bot.on('message', async message => {
	if (message.content === "be!mod" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('Moderation commands')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('for more help please use the ``be!help`` command')
		.addField('Kick', '``be!kick``', false)
		.addField('Ban', '``be!ban``', false)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// Page 2

bot.on('message', async message => {
	if (message.content === "be!util" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('Utility commands')
		.setDescription('for more help please use the ``be!help`` command')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.addField('Invite', '``be!invite``', false)
		.addField('Stats', '``be!stats``', false)
		.addField('Ping', '``be!ping``', false)
		.addField('Status', '``be!status``', false)
		.addField('Get premium', '``be!get-premium``', false)
		.addField('Premium', '``be!premium``', false)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// Page 3

bot.on('message', async message => {
	if (message.content === "be!fun" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('Fun commands')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('for more help please use the ``be!help`` command')
		.addField('Lol', '``be!lol``', false)
		.addField('Objection', '``be!objection``', false)
		.addField('Hold It', '``be!holdit``', false)
		.addField('Take That', '``be!takethat``', false)
		.addField('OwO', '``be!owo``', false)
		.addField('Coin Flip', '``be!coinflip``', false)
		.addField('8Ball', '``be!8ball``', false)
		.addField('Sarcastic 8Ball', '``be!sarcasticball``', false)
		.addField('Random Cat Image', '``be!cat``', false)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THESE ARE THE FUN COMMANDS

bot.on('message', async message => {
	if (message.content === "be!owo" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('OwO')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('Just why?')
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!lol" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('LOL')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('Lots of Love to you to!')
		.setThumbnail('https://media.tenor.com/images/01eeabe1dc9412e5bc8c9c23a8d5c750/tenor.gif')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!objection" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('OBJECTION')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('idk why tho...')
		.setThumbnail('https://i.imgur.com/19WEQFO.gif')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!holdit" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('HOLD IT!!!')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('please...')
		.setThumbnail('https://i.imgur.com/6kg9dtc.png')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!takethat" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('TAKE THAT')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('you are lol!!!')
		.setThumbnail('https://i.imgur.com/S45Dsnb.png')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THESE ARE UTILITY COMMANDS

bot.on('message', async message => {
	if (message.content === "be!get-premium" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('GET PREMIUM')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription(" [``[Click here]``](https://www.patreon.com/discordbendy)")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!invite" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('INVITE')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription(" [``[Click here]``](https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot)")
		.addField('Get premium', '``be!get-premium``', false)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!support" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('Support')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription(" [``[Click here]``](https://discord.gg/wstKjrX)")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "be!premium" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('Premium Features')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription("To get premium use the command ``be!get-premium``. We are also adding lots more commands daily!")
		.addField('Sarcastic 8BALL', '``b2!sarcasticball``', false)
		.addField('Dance', '``b2!dance``', false)
		.addField('Server Info', '``b2!server``', false)
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THESE ARE THE KICK AND BAN COMMANDS

bot.on('message', message => {
    const arguments = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = arguments.shift().toLowerCase();
if (message.content.startsWith(prefix) && commandName == "kick") {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have the permission to do that!");
    const userKick = message.mentions.users.first();

    if (userKick) {
        var member = message.guild.member(userKick);

        if (member) {
            member.kick({
                reason: `This person was kicked using a bot's moderation system. We are so sorry if this caused problems.`
    }).then(() => {
        const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('Kicked')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot')
		.setDescription("That user was kicked!")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
    })
} else {
    const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('ERROR')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot')
		.setDescription("Uknown user!")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
}
    } else {
        const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('ERROR')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot')
		.setDescription("Please mention a user!")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
    }}})


    bot.on('message', message => {
        const arguments = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = arguments.shift().toLowerCase();
    if (message.content.startsWith(prefix) && commandName == "ban") {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have the permission to do that!");
        const userBan = message.mentions.users.first();
    
        if (userBan) {
            var member = message.guild.member(userBan);
    
            if (member) {
                member.ban({
                    reason: `This person was banned from the server!`
        }).then(() => {
            const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('Banned')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot')
		.setDescription("That user was banned!")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
        })
    } else {
        const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('ERROR')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot')
		.setDescription("Uknown user!")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
    }
        } else {
            const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('ERROR')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot')
		.setDescription("Please mention a user!")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
        }}})

// THIS IS THE TOKEN HOLDER

bot.login(process.env.token);
