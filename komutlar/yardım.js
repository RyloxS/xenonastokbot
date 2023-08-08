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
	.setTimestamp()

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
