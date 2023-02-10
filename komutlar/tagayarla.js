const discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
      new discord.MessageEmbed()
      .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
      .setDescription("Bu Komudu Kulanmak İçin `Yönetici` Rolünüzün Olmasılazım.")
    );
  
  let tag = args[0];
  if (!tag) return message.channel.send(
    new discord.MessageEmbed()
    .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
    .setDescription("Bir Rag Belirtmelisin.")
  )
  
  db.set(`tag_${message.guild.id}`, tag)
  const embed = new discord.MessageEmbed()
  .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
  .setDescription(`Tag Başarıyla Ayarlandı! : \`${tag}\``)
  message.channel.send(embed)
   
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'tag',
};