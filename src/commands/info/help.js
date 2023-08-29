const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'help',
    description: 'Get the bot\'s help menu.',

    callback: async (client, interaction) => {
        const embed = new EmbedBuilder()
        .setColor(0xef564a)
        .setTitle('Help Menu')
        .setDescription('**Required arguments: <argument>** \n**Optional arguments: [argument]** \n \n**My prefix: `/`** \n **Note for racing team commands:** We\'re still making the teams in the database.')
        .addFields(
            { name: 'Information commands', value: '/`help` - Get the bot\'s help menu.' },
            { name: 'Miscellaneous commands', value: '/`ping` - Get the bot\'s ping.' },
            { name: 'Racing Team Commands', value: '/`teaminfo` - Get info about a team, use capitals. Example: `The Reapers`'}
        )
        .setTimestamp()
        .setFooter({ text: 'Races & Car Meets'});

        interaction.reply({embeds: [embed]})
    }
};