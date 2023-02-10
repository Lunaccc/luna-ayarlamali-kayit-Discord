const discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = async(client, message, args) => {


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(   
      new discord.MessageEmbed()
    .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
    .setDescription("Bu Komudu Kulanmak İçin `Yönetici` Rolünüzün Olmasılazım.")
    );


    let rol = message.mentions.roles.first()  || message.guild.roles.cache.get(args[0])  
    if (!rol) {
      return  message.channel.send(
        new discord.MessageEmbed()
        .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
        .setDescription("Bir Rol Belirtmelisin.")
      )
    }
    db.set(`kızr_${message.guild.id}`, rol.id)
    const embed2 = new discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))  
    .setColor("#f1ebeb")
    .setDescription(`Kız Rol Başarıyla Ayarlandı! : ${rol}`)
    message.channel.send(embed2)
      
    }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 3
}
exports.help = {
  name: 'kızrol',
}