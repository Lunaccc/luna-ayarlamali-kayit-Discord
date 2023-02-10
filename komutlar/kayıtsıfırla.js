const discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = async (client, message, args) => {


  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
      new discord.MessageEmbed()
      .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
      .setDescription("Bu Komudu Kulanmak İçin `Yönetici` Rolünüzün Olmasılazım.")
    );
  

    db.delete(`gkanal_${message.guild.id}`)
    db.delete(`kkanal_${message.guild.id}`)
    db.delete(`kayıtsız_${message.guild.id}`)
    db.delete(`erkekr_${message.guild.id}`)
    db.delete(`normalr_${message.guild.id}`)
    db.delete(`otoisim_${message.guild.id}`)
    db.delete(`kızr_${message.guild.id}`)
    db.delete(`yetkilir_${message.guild.id}`)
    db.delete(`tag_${message.guild.id}`)

  const embed = new discord.MessageEmbed()
  .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
  .setDescription("Kayıt Sistemi Başarıyla Sıfırlandı")
  message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kayıtsıfırla',
};