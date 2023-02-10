const Discord = require('discord.js');
const Client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const Embed = new Discord.MessageEmbed()
 .setTitle(`${ayarlar.isim} | Yardım Menüsü`)
 .setDescription(   `
 \ \`${prefix}erkekrol\` : **Erkek Rolünü Ayarlar**
 \ \`${prefix}kızrol\` : **Kız Rolünü Ayarlar**
 \ \`${prefix}normalrol\` : **Normal Rolünü Ayarlar**
 \ \`${prefix}kayıtkanal\` : **Kayıt Kanalını Ayarlar**
 \ \`${prefix}girişkanal\` : **Giriş Kanalını Ayarlar**
 \ \`${prefix}otoisim\` : **Oto İsim Ayarlar**
 \ \`${prefix}tag\` : **Tag Ayarlar**
 \ \`${prefix}yetkilirol\` : **Yetkili Rolü Ayarlar**
 \ \`${prefix}kayıtsızrol\` : **Kayıtsız Rolü Ayarlar**
 \ \`${prefix}kayıtsıfırla\` : **Kayıt Ayarlarını Sıfırlar**
 \ \`${prefix}e\` : **Erkek Kayıt Yapar**
 \ \`${prefix}k\` : **Kız Kayıt Yapar**
 \ \`${prefix}n\` : **Normal Kayıt Yapar**
 `)
 .setFooter(`${ayarlar.isim}`)
 .setTimestamp()
 .setImage("https://share.creavite.co/6zE0CNldVkaM5YC6.gif")
 message.channel.send(Embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help","y"],
  permLevel: 3
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};
