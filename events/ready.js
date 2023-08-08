const client = require("../server");
const { Collection } = require("discord.js")
const fs = require("fs")
const ayarlar = require('../config.json');


client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./komutlar/", (err, files) => {
if (err) console.error(err);
files.forEach(f => {
let props = require(`../komutlar/${f}`);
    
client.on('ready', () => {

    // Oynuyor Kısmı
    
      client.user.setPresence({ activities: [{ name: 'VALO PAZARIM' }] });
	  client.user.setPresence({ activities: [{ name: 'STOKLAR YENİLENDİ!' }] });
      
    
        console.log ('_________________________________________');
        console.log (`Kullanıcı İsmi     : ${client.user.username}`);
        console.log (`Sunucular          : ${client.guilds.cache.size}`);
        console.log (`Kullanıcılar       : ${client.users.cache.size}`);
        console.log (`Prefix             : ${ayarlar.prefix}`);
        console.log (`Toplam Komut       : ${files.length}`);
        console.log (`Durum              : Bot Çevrimiçi!`);
        console.log ('_________________________________________');
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});