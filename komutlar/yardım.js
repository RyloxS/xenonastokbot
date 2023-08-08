const { EmbedBuilder } = require('discord.js');
const { prefix } = require('../config.json');
exports.run = async (client, message, args) => {

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('VALORANT PAZARIM')
	.setDescription(`${prefix}yardım
	${prefix}stok-yardım
	${prefix}valopre
	${prefix}free-valo`)
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

message.channel.send({ embeds: [exampleEmbed] });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 'USER',
  aliases: ['help'],
};

exports.help = {
  name: 'yardıms',
  description: 'Yardım Menüsünü Açar',
  usage: 'yardım',
};
