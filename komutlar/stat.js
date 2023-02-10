const Discord = require(`discord.js`);
const db = require("quick.db")

exports.run = async(client, message, args) => {
    let kişi = message.mentions.users.first()
if(!args[0]) {

    let kkişi = message.mentions.users.first()


    if (!kkişi) return message.channel.send(
        new Discord.MessageEmbed()
        .setDescription("**Lütfen bir Kişi etiketleyip tekrar deneyin.**")
    )



    const erkekkayıt =  db.fetch(`erkek+_${kişi.id}.${message.guild.id}`)
    const kızkayıt =  db.fetch(`kız+_${kişi.id}.${message.guild.id}`)
    const normal =  db.fetch(`normal+_${kişi.id}.${message.guild.id}`)
    const narcoscode1 = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**${message.author} İsimli Yetkilinin Toplam Kayıtı**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **Toplam \`${erkekkayıt ? erkekkayıt : '0'}\` Erkek Üye Kayıt Yapmış.**
    **Toplam \`${kızkayıt ? kızkayıt : '0'}\` Kız Üye Kayıt Yapmış.**
    **Toplam \`${normal ? normal : '0'}\` Normal Üye Kayıt Yapmış.**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`)
    message.channel.send(narcoscode1)}
if(kişi) {




    const erkekkayıt1 =  db.fetch(`erkek+_${kişi.id}.${message.guild.id}`)
    const kızkayıt1 =  db.fetch(`kız+_${kişi.id}.${message.guild.id}`)
    const normal1 =  db.fetch(`normal+_${kişi.id}.${message.guild.id}`)
    const narcoscode = new Discord.MessageEmbed()
    .setAuthor(kişi.username, kişi.avatarURL)
    .setThumbnail(message.mentions.users.first().avatarURL())
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**Yetkilinin Bilgileri**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **Toplam \`${erkekkayıt1 ? erkekkayıt1 : '0'}\` Erkek Üye Kayıt Yapmış.**
    **Toplam \`${kızkayıt1 ? kızkayıt1 : '0'}\` Kız Üye Kayıt Yapmış.**
    **Toplam \`${normal1 ? normal1 : '0'}\` Normal Üye Kayıt Yapmış.**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`)
    message.channel.send(narcoscode)}  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
};
exports.help = {
 name: 'kayıtstats',
 description: 'Kim kaç kişi kaydetmiş görürsün',
 kategori: "kayıt"
};