const discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = async(client, message, args) => {


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
      new discord.MessageEmbed()
      .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
      .setDescription("Bu Komudu Kulanmak İçin `Yönetici` Rolünüzün Olmasılazım.")
    );


    let kanal = message.mentions.channels.first();    
    if (!kanal) {
      return  message.channel.send(
        new discord.MessageEmbed()
        .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
        .setDescription("Lütfen Bir Kanal Belirt")
      )
    }
    db.set(`gkanal_${message.guild.id}`, kanal.id)
    const embed2 = new discord.MessageEmbed()
    .setTitle(`${ayarlar.isim} Kayıt Sistemi!`) 
    .setDescription(`Giriş Kanalı Başarıyla Ayarlandı! : ${kanal}`)
    message.channel.send(embed2)
      
    }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 3
}
exports.help = {
  name: 'girişkanal',
}