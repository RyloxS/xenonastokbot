const { Client, MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
	const allowedChannelId = ''; // Buraya kanalın ID'sini girin

  // Eğer mesajın gönderildiği kanalın ID'si izin verilen kanal ID'sine eşit değilse komut çalıştırılmaz
  if (message.channel.id !== allowedChannelId) {
    return message.reply('Bu komut sadece #free・acc kanalında kullanılabilir!');
  }
  
	const rolId = ''; // Komutu kullanacak rolün idsi
  if (!message.member.roles.cache.some((role) => role.id === rolId)) {
    return message.reply('Bu komut @FreeAcc yetkisine sahip kullanıcılar içindir!');
  }
  const codwaEspri = [
      "stok:şifre",
      "stok:stok"
    ];
    
    const espri = codwaEspri[Math.floor(Math.random() * codwaEspri.length)];
    message.channel.send(":hourglass_flowing_sand: Hesabınız DM kutusu üzerinden gönderiliyor. Lütfen beklemede kalın!")
	setTimeout(() => {
        message.author.send(`Hesabınız: ${espri}`);
      }, 1000);
	setTimeout(() => {
        message.channel.send(":white_check_mark: Hesabınız DM kutunuz üzerinden gönderildi!");
      }, 1000);
};

exports.conf = {
  aliases: ["valoacc"]
};

exports.help = {
  name: "free-valorant"
};
