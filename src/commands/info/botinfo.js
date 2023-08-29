const { Client, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'botinfo',
    description: 'Get information about this bot.',
    
    callback: async (client, interaction, guild) => {
        const embedReply = new EmbedBuilder().setTitle('Bot Info').setDescription('**Bot Developer:** <@976538165273845830> \n**Project Supervisor:** <@460163858128961537> \n**Coding Language:** discord.js V14 \n**Node:** V18.9.4 \nCreation date: <t:1678658400:F> \n**Command Prefix:** `/` (Slash commands) ').setColor(0xd70000).setFooter({text: 'Races & Car Meets'})
        
        interaction.reply({embeds: [embedReply]});
    },
};