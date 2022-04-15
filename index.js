const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"] })

client.on('ready', () =>{
console.log('FINALLYYYYYY')
})

client.on("message", msg => {
  if (msg.content === "!ip") {
    msg.reply("towermc.eu");
  }
})

client.on("message", msg => {
    if (msg.content === "!instagram") {
      msg.reply("Ecco il link: https://www.instagram.com/invites/contact/?i=12m0x191iatt0&utm_content=nc84ru6");
    }
  })

client.on("message", msg => {
    if (msg.content === "!telegram") {
      msg.reply("@TowerMcc");
    }
  })

client.on("messageCreate", message => {
    if (message.channel.type == "DM") return

    if (message.member.roles.cache.has("idRuolo1") || message.member.roles.cache.has("idRuolo2")) return

    var parolacce = ["cazzo", "merda", "porcodio", "Server di merda, troia, minchia"]
    var trovata = false;
    var testo = message.content;

    parolacce.forEach(parola => {
        if (message.content.toLowerCase().includes(parola.toLowerCase())) {
            trovata = true;
            testo = testo.replace(eval(`/${parola}/g`), "###");
        }
    })

    if (trovata) {
        message.delete();
        var embed = new Discord.MessageEmbed()
            .setTitle("Moderati!")
            .setDescription("Hai scritto un messaggio con parole bloccate\rIl tuo messaggio: " + testo)

        message.channel.send({ embeds: [embed] })
    }
})


client.login('OTU4NDAzMjg4NDUyMTg2MTQy.YkM0ng.HQLc7Vd9dKvRvIyWxsvmV6RKyiU')