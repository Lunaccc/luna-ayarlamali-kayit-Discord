const discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = async(client, message, args) => {
  let gkanal = db.fetch(`gkanal_${message.guild.id}`)
let kanal = db.fetch(`kkanal_${message.guild.id}`)
let kayıtsız = db.fetch(`kayıtsız_${message.guild.id}`)
let kızrol = db.fetch(`kızr_${message.guild.id}`)
let yetkili = db.fetch(`yetkilir_${message.guild.id}`)
let tag = db.fetch(`tag_${message.guild.id}`)



 
if(!message.member.roles.cache.has(yetkili)) if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
  new discord.MessageEmbed()
  .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
      .setDescription(`Bu Komudu Kulanmak İçin <@${yetkili}> Rolüne İhtayacın Var`)
)
if(message.channel.id !== kanal) return message.channel.send(
  new discord.MessageEmbed()
  .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
  .setDescription(`Bu Komudu Lütfen <#${kanal}> Kanalında Dene!`)
)


let member = message.mentions.members.first();
if (!member) return message.channel.send(
  new discord.MessageEmbed()
  .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
  .setDescription(`Bir Kişi Belirtmelisin`)
)
let isim = args[1]
if (!isim) return message.channel.send(
  new discord.MessageEmbed()
  .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
  .setDescription(`Bir İsim Belirtmelisin`)
)
let yaş = args[2]
if (!yaş) return message.channel.send(
  new discord.MessageEmbed()
  .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
  .setDescription(`Bir Yaş Belirtmelisin`)
)
if(isim) member.setNickname(`${tag ? tag: ''} ${isim} | ${yaş}`);
member.roles.remove(kayıtsız)
member.roles.add(kızrol)
const kayıtolan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 

db.add(`kız+_${message.author.id}`, 1)

const embed = new discord.MessageEmbed()
.setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
.setDescription(`${member} Kullanıcının İsmi \`${tag ? tag: ''} ${isim} | ${yaş}\` Olarak Değiştirildi ve <@&${kızrol}> Rolü Verildi!`)
message.channel.send(embed)
const hg = new MessageEmbed()
 .setAuthor("Aramıza Yeni Bir Üye Katıldı!")
 .addField(`Toplam Kişi Sayımız`, `${member.guild.memberCount} Oldu!`)
 .addField(`Kayıt Eden Yetkili:`, `<@${message.author.id}>`)
 .setFooter(`${ayarlar.isim}`)
 .setColor("BLUE")
 .setThumbnail(message.author.avatarURL({dynamic:true}))    
 .setTimestamp()  
 client.channels.cache.get(gkanal).send(hg)


}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 3
}
exports.help = {
  name: 'kız',
}