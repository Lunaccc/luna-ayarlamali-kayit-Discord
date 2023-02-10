let Discord = require("discord.js");
let db = require("quick.db")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = ayarlar.prefix

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
            .setDescription("Bu Komudu Kulanmak İçin `Yönetici` Rolünüzün Olmasılazım.")
            )
  let otoisim = args.slice(0).join(' ')
if(!otoisim) return message.channel.send(
    new Discord.MessageEmbed()
    .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
    .setDescription("Bir İsim Belirtmelisin.")
)
  
  
    if(db.has(`otoisim_${message.guild.id}`)) return message.channel.send(   
        new Discord.MessageEmbed()
    .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
    .setDescription("Zaten Kayıtlı Olan Bi İsim Var")
    )     
    if(otoisim.length > 15) return message.channel.send(
        new Discord.MessageEmbed()
        .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
        .setDescription("En Fazla 15 Karakterli Bi İsim Belirte Bilirsin")
        ) 
    db.set(`otoisim_${message.guild.id}`, otoisim) 
    message.channel.send(
        new Discord.MessageEmbed()
    .setTitle(`${ayarlar.isim} Kayıt Sistemi!`)
    .setDescription(`Artık Kullanıcı Sunucuya Katıldığı Anda İsmi ${otoisim} Olacak`) 
    )

    
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["otoisim"],
  permLevel: 3
};

module.exports.help = {
  name: 'otoisim'
};
