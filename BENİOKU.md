Dostlar ürünü satın aldığınız için teşekkür ederim.
Şimdi kuruluma geçelim,
öncelik ile server.js dosyasından en alttaki client.login kısmını tokeniniz ile doldurun.
token oluşturmak için [TIKLA](https://discord.com/developers/applications)  bu sayfadan bot oluşturup token oluştaracaksınız, bu kısımda botunuzu
oluşturduktan sonra sol kısımda Bot sekmesine tıklayın, ardından orada **Privileged Gateway Intents** kısımlarının hepsini açın.
Şimdi komutlar klasöründe mesela 
exports.run = async (client, message, args) => {
	const allowedChannelId = ''; // Buraya kanalın ID'sini girin

  // Eğer mesajın gönderildiği kanalın ID'si izin verilen kanal ID'sine eşit değilse komut çalıştırılmaz
  if (message.channel.id !== allowedChannelId) {
    return message.reply('Bu komut sadece #pre・acc kanalında kullanılabilir!');
  }
  const rolId = ''; // Komutu kullanabilecek rol idsi girin.
  if (!message.member.roles.cache.some((role) => role.id === rolId)) {
    return message.reply('Bu komut @Server Booster yetkisine sahip kullanıcılar içindir!');
  }
  const codwaEspri = [
	"stok:stok",
        "isim:soyisim"
    ];

böyle bir kod bloğunda yapmanız gereken ilk adım, const allowedChannelId = '';  kısmını bu komutun kullanılacağı kanalın İD'sini girmek. İsterseniz bu kısmı silip komutu tüm kanallarda kullanılabilir yapabilirsiniz.
-
 if (message.channel.id !== allowedChannelId) {
    return message.reply('Bu komut sadece #pre・acc kanalında kullanılabilir!');
  }
  buradan uyarı mesajını ayarlayabilirsiniz.
  -
  const rolId = ''; // Komutu kullanabilecek rol idsi girin. 
  buradan ise komutu kullanabilecek kişinin idsini girebilirsiniz.
  isterseniz bunları uyarı mesajları ile birliktede silebilirsiniz.

  Kurulum bu kadar, events kısmından botunuzun durumunu ayarlayabilirsiniz.
