﻿const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "521033940593803284"; // ايدي السررفر
var channel = "528642223181529096";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login("NTI4NjE2NzYyMjAwMDMxMjM5.DwlTlA.qmF-tt8_2jj2i4saLkriqwoWdYc");
