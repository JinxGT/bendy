const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "be!"

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity('undertale!', { 
        type: "PLAYING",
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
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('**Please keep in mind that this is still under development!**')
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
		.setColor('#383fff')
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
		.setColor('#383fff')
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
        let outcomes = ['Signs point to yes. Except that you were born an idiot, you will die an idiot, and nothing will change in-between.', 'Without a doubt. Nah, I’m just messing with you, go shoot yourself.', 'My sources say no. They also tell me they hate you and hope you burn in hell.', 'Yes, definitely. Unless it doesn’t happen. Listen it’s not my fault your father didn’t love you. Get off my back!', 'Outlook not so good. Especially since you’re so goddamn ugly.', 'All signs point to yes. But on second thought, go fuck yourself.', 'As If', 'Ask Me If I Care', 'Dumb Question Ask Another', 'Forget About It', 'Get A Clue', 'In Your Dreams',  'Not A Chance', 'Obviously', 'Oh Please', 'Sure', 'That\'s Ridiculous', 'Well Maybe', 'What Do You Think?', 'Yes... You Prick', 'Who Cares?', 'Yeah And I\'m The Fucking Pope', 'Yeah Right', 'You Wish', 'You\'ve Got To Be Kidding...'];
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
		.setColor('#383fff')
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
		.setColor('#383fff')
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
		.setColor('#383fff')
		.setTitle('Utility commands')
		.setDescription('for more help please use the ``be!help`` command')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.addField('Invite', '``be!invite``', false)
		.addField('Stats', '``be!stats``', false)
		.addField('Ping', '``be!ping``', false)
		.addField('Status', '``be!status``', false)
		.addField('Get premium', '``be!get-premium``', false)
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
		.setColor('#383fff')
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
		.setColor('#383fff')
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
		.setColor('#383fff')
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
		.setColor('#383fff')
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
		.setColor('#383fff')
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
		.setColor('#383fff')
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
		.setColor('#383fff')
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
		.setColor('#383fff')
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

// THESE ARE THE KICK AND BAN COMMANDS

bot.on('message', message => {
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
        const arguments = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = arguments.shift().toLowerCase();
    if (message.content.startsWith(prefix) && commandName == "ban") {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Permissions invalid");
        const userBan = message.mentions.users.first();
    
        if (userBan) {
            var member = message.guild.member(userBan);
    
            if (member) {
                member.ban({
                    reason: `This person was banned from the server!`
        }).then(() => {
            const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#383fff')
		.setTitle('Ban')
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
		.setColor('#383fff')
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
		.setColor('#383fff')
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
