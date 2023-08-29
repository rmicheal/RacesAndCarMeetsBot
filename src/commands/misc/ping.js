const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'ping',
    description: 'Replies with the bot ping!',
  
    callback: async (client, interaction) => {
      await interaction.deferReply();
  
      const reply = await interaction.fetchReply();
  
      const ping = reply.createdTimestamp - interaction.createdTimestamp;
      
      const embed = new EmbedBuilder()
      .setTitle('<:Online:1005406223908225064> | Bot Ping')
      .setDescription(`Pong! \n \nClient ping: \`${ping}\` miliseconds. \nWebsocket ping: \`${client.ws.ping}\` miliseconds.`)
      .setTimestamp()
      .setFooter({text: 'Races & Car Meets'})
      .setColor(0xef564a);
  
      interaction.editReply(
        {embeds: [embed]}
      );
    },
  };