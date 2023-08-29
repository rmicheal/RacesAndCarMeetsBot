const { EmbedBuilder } = require('discord.js');

module.exports = async (client, message) => {
    if (message.content === '<@1084859606897012807>') {
        const embed = new EmbedBuilder()
        .setColor(0xef564a)
        .setTitle('<:Help:1105428563936677918> Help Menu')
        .setDescription('**Required arguments: <argument>** \n**Optional arguments: [argument]** \n \n**My prefix: `/`**')
        .addFields(
            { name: 'Information commands', value: '/`help` - Get the bot\'s help menu.' },
            { name: 'Miscellaneous commands', value: '/`ping` - Get the bot\'s ping.' },
            { name: 'Levelling commands', value: '/`level` - View your or someone else\'s level.'},
            { name: 'Racing Team Commands', value: '/`teaminfo` - Get info about a team, use capitals. Example: `The Reapers`'}
        )
        .setTimestamp()
        .setFooter({ text: `${client.user.name}`});

    await message.reply({embeds: [embed]})
    };
    
    if (!message.content === '<@1104449717758345297>') return;
};