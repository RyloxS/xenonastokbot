const { Client, MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
	const allowedChannelId = '1134871278537416725'; // Buraya kanalın ID'sini girin

  // Eğer mesajın gönderildiği kanalın ID'si izin verilen kanal ID'sine eşit değilse komut çalıştırılmaz
  if (message.channel.id !== allowedChannelId) {
    return message.reply('Bu komut sadece #pre・acc kanalında kullanılabilir!');
  }
  const rolId = '1135133393730928670';
  if (!message.member.roles.cache.some((role) => role.id === rolId)) {
    return message.reply('Bu komut @Server Booster yetkisine sahip kullanıcılar içindir!');
  }
  const codwaEspri = [
      "hellokitty7u7:123456789gusti",
	   "danyskrillex12:comision3",
	   "yrjbom:rico303226",
	   "harryfimbres:Luffy1993!",
	   "felicariaga:Noobmaster69",
	   "elprimoluca2753:riverplate123",
	   "sekodyt:elmasguapo2",
	   "luchossg:Nazareno-110805",
	   "gajeelkotaro:alexander2016",
	   "gosstav:290500To",
	   "diegojccl:asddas12",
	   "PIZZABETTERTHANPAELA:nus2169=)",
	   "blot333:blot333",
	   "vklgrn1234:aszx1234",
	   "camilla2601:miniuminiu23",
	   "aykany0:aykan2005",
	   "1chinskieznaczki:bountyhunter8900",
	   "snt335:snt123",
	   "mert613173:mert6161",
	   "furkanmeht:asdzxcv3261",
	   "housni93:khadija-03",
	   "koulala11:yassine123",
	   "bonang448:0101295343y",
	   "UNKNOWN:4nniin487",
	   "dash22005:fahd1912002",
	   "fahd22005:ahmed1329",
	   "ahmed13291:ahmed1329",
	   "dash22005:fahd1912",
	   "1100:BANANAPRO123",
	   "UNKNOWN:MYyV4)J\emH<$?8",
	   "shehab2839:shehab12@",
	   "kks37:rkd326654+",
	   "StormMonoSamira:26122019Gj",
	   "StormTsun:Darling26122019Gj.",
	   "WiiTartedJuan:1278Matt#1",
	   "KKnocky:Puha08110.@.",
	   "Khoii2005:Khoii@2005",
	   "UNKNOWN:eduardcaus02",
	   "NA2Jasa:LULU.2001",
	   "JASAXXX:Jasa.200124",
	   "mestesso69:gioronca",
	   "0bi0ne31:Legocity321",
	   "ducthanh180297:trangthanh2407@",
	   "joseunglee:lsjRiot@20091221",
	   "Lumcoholic:Xelavang01",
	   "MrTb1235:Uxwc6014",
	   "ramitrgamer:rami2006",
	   "murigod09ff:Murigamer3012",
	   "FerxdUwUAlv:Emilio130508",
	   "dolinengmony123:dolin123",
	   "pepiklapva:b76m78d05p09",
	   "CatBoy_2010:catocska12345678910",
	   "richlbc213:Fantasy213",
	   "beambobpop:3909800793476_FAIS",
	   "WrzucNaLuzNaLuz:P@wlO2022",
	   "priesla:NULL",
	   "Lzavo:bek2002tm",
	   "UNKNOWN:mhlbrz05",
	   "moralesmxg:Limaychocki3115",
	   "pshyco baby:Harsh@123",
	   "wolfman3000018:W2b9uk5U77LNA9U",
	   "samuraigigante:t+++23576@mes",
	   "o9__go:aLiRdA2002",
	   "Didixguin:Diego2009*",
	   "MarcoCiorumbelu:Puha08110.@.",
	   "ndevincentis89:gizmo2000",
	   "UNKNOWN:Tuaprim4de4",
	   "zzzz:030321bz",
	   "dogui120:M@ster#2023",
	   "wooksb10:berk12341",
	   "soloqicin:berk12341",
	   "korkmazzrs:korkmazzrs_61_ts",
	   "wooksz10:wooksz10",
	   "anilkazaksuz31:anil159632",
	   "netoriaintya:gwapoko123",
	   "alalga30:lagmay12345",
	   "caheonhaynhot:long19122007",
	   "fredsan333:1026565077Mmm",
	   "Eltin07:weto5306",
	   "wkdwnsghd0820:Hong1216!",
	   "ahmedhamdy43411:Go2sleepKnees2faces",
	   "iAmRicoDiamondz:NOOKIE_97",
	   "rexxdeath2010:howtoDigita105",
	   "GUSKUNG1935:G0n@z!17",
	   "mrbeast630000:mrmrbeast63000000",
	   "1410:rajat1410",
	   "jetlogkalogsupot:BARACOBOYSSSss789",
	   "Ulan amına goyayım 86 tane stoğun arasından bu mu çıktı sana hay şansını tüküreyim senin."
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
  aliases: ["pre-valorant"]
};

exports.help = {
  name: "valopre"
};
