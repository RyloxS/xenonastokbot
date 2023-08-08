const { Client, MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  const rolId = ''; // Kendi Sahip İD'niz. Rol oluşturup yapın.
  if (!message.member.roles.cache.some((role) => role.id === rolId)) {
    return message.reply('Bu komut Owner yetkisine sahip kullanıcılar içindir!');
  }
  const codwaEspri = [
     "Stok:Stok",
     "isim:şifre"
    ];
    
    const espri = codwaEspri[Math.floor(Math.random() * codwaEspri.length)];
	message.channel.send(":hourglass_flowing_sand: Hesabınız APİ üzerinden seçiliyor.")

	setTimeout(() => {
        message.channel.send(`Hesabınız: ${espri}`);
      }, 1000);
};

exports.conf = {
  aliases: ["valoown"]
};

exports.help = {
  name: "valown"
};
