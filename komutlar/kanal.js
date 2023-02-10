const discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = async(client, message, args) => {


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
      new discord.MessageEmbed()
      .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
      .setDescription("Bu Komudu Kulanmak İçin `Yönetici` Rolünüzün Olmasılazım.")
    );


    let rol = message.mentions.channels.first();    
    if (!rol) {
      return  message.channel.send(
        new discord.MessageEmbed()
        .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
        .setDescription("Bir kanal Belirtmelisin")
      )
    }
    db.set(`kkanal_${message.guild.id}`, rol.id)
    const embed2 = new discord.MessageEmbed()
    .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
    .setDescription(`Kayıt Kanalı Başarıyla Ayarlandı! : ${rol}`)
    message.channel.send(embed2)
      
    }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 3
}
exports.help = {
  name: 'kayıtkanal',
}