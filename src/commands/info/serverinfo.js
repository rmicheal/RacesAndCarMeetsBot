const { EmbedBuilder, Embed } = require('discord.js'); 

module.exports = {
    name: 'serverinfo',
    description: 'Get info about this server.',

    callback: async (client, interaction) => {
        const guild = interaction.guild;
        const User = guild.members.cache.filter((member) => !member.user.bot).size;
        const Bots = guild.members.cache.filter((member) => member.user.bot).size;
        const Text = guild.channels.cache.filter(
          (channel) => channel.type === "GUILD_TEXT"
        ).size;
        const Voice = guild.channels.cache.filter(
          (channel) => channel.type === "GUILD_VOICE"
        ).size;
        const Category = guild.channels.cache.filter(
          (channel) => channel.type === "GUILD_CATEGORY"
        ).size;
        const Stage = guild.channels.cache.filter(
          (channel) => channel.type === "GUILD_STAGE_VOICE"
        ).size;
        const Channel = Text + Voice + Category + Stage;
        const Emoji = guild.emojis.cache.size;
        const Roles = guild.roles.cache.size;
        const time = guild.createdTimestamp.toString().slice(0, -3);
    
        const embed = new EmbedBuilder()
          .setTitle('Server Info')
          .setAuthor({ name: guild.name, iconURL: guild.iconURL() })
          .setColor(0xef564a)
          .setDescription(
            `
          **Name** : ${guild.name}
          **Server ID** : ${guild.id}
          **Owner** : ${await guild.fetchOwner().then((m) => m.user.tag)}
          **Total Members** : ${guild.memberCount} [${User} Users | ${Bots} Bots]
          **Total Emojis** : ${Emoji}
          **Total Roles** : ${Roles}
          **Server Creation Date** : <t:${time}:R>
          `
          )
          .setThumbnail(guild.iconURL())
          .setFooter({text: 'Races & Car Meets'});
        
        interaction.reply({embeds: [embed]})
      },
    };