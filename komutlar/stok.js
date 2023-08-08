const { Client, MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
const stok = 86;
    const codwaEspri = [
      `Stok sayısı: ${stok}`
    ];
    
    const espri = codwaEspri[Math.floor(Math.random() * codwaEspri.length)];
    message.channel.send(`Valorant Hesap Stok sayısı: ${stok}`);

};
	
exports.conf = {
  aliases: []
};

exports.help = {
  name: "valostok"
};
