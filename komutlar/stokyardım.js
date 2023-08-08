const { EmbedBuilder } = require('discord.js');
const { prefix } = require('../config.json');
const valostok = 586;
const netflixstok = 0;
const disney = 3;
const nitrogenstok = 'SINIRSIZ';
const valogenstok = 'SINIRSIZ';
exports.run = async (client, message, args) => {

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('VALORANT PAZARIM')
	.setDescription(`Valorant Hesap Stoğu: ${valostok}
	Netflix Hesap Stoğu: ${netflixstok}
	Disney Hesap Stoğu: ${disney}
	Nitro Generator Stoğu: ${nitrogenstok}
	Valorant VP Generator Stoğu: ${valogenstok}`)
	.setTimestamp()
	.setFooter({ text: 'VALORANT PAZARIM', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

message.channel.send({ embeds: [exampleEmbed] });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 'USER',
  aliases: ['sy'],
};

exports.help = {
  name: 'stok-yardım',
  description: 'Yardım Menüsünü Açar',
  usage: 'yardım',
};
