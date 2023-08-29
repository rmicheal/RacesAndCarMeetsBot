const { Client, ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const Team = require('../../models/Team');

/**
 *
 * @param {Client} client
 * @param {Message} message
 */

module.exports = {
    name: 'remove-points',
    description: 'Remove points from a team.',
    options: [
        {
            name: 'team',
            description: 'The team you want to remove the points from.',
            required: true,
            type: ApplicationCommandOptionType.String,
            choices: [
                {
                    name: 'The Reapers',
                    value: 'The Reapers',
                },
                {
                    name: 'The Jets',
                    value: 'The Jets',
                },
                {
                    name: 'Shark Racing',
                    value: 'Shark Racing',
                },
                {
                    name: 'The Volts',
                    value: 'The Volts',
                },
                {
                    name: 'Clipy Speeders',
                    value: 'Clipy Speeders',
                },
                {
                    name: 'Caprice Cult',
                    value: 'Caprice Cult',
                },
                {
                    name: 'Los Angeles Lads',
                    value: 'Los Angeles Lads',
                },
                {
                    name: 'Squid Racing',
                    value: 'Squid Racing',
                },
                {
                    name: 'Speed Demons',
                    value: 'Speed Demons',
                },
                {
                    name: 'TCB Racing',
                    value: 'TCB Racing',
                },
                {
                    name: 'Deer Racing',
                    value: 'Deer Racing',
                },
                {
                    name: 'The Lightnings',
                    value: 'The Lightnings',
                },
                {
                    name: 'The Outlaws',
                    value: 'The Outlaws',
                }
            ],
        },
        {
            name: 'points',
            description: 'The amount of points.',
            required: true,
            type: ApplicationCommandOptionType.Number,
        },
        ],
    
	callback: async (client, interaction) => {
        const pointsToGive = interaction.options.get('points').value;
        const targetTeam = interaction.options.get('team').value;
        const permRole = interaction.guild.roles.fetch('1089199129764319334').catch(console.error);
    
        const racingTeam = await Team.findOne({team: targetTeam});
        const member = interaction.user;
        await interaction.deferReply();
        
        if (!interaction.member.roles.cache.some(role => role.name === 'Developer')) {
            const embed = new EmbedBuilder()
            .setTitle('Missing Permissions')
            .setDescription('You do not have enough permissions to run this command.')
            .setFooter({text: 'Races & Car Meets'})
            .setColor(0xd70000);
            interaction.editReply({embeds: [embed]});
            return;
        }
        
        if (racingTeam) {
            racingTeam.points -= pointsToGive;
            const embed = new EmbedBuilder()
            .setTitle('Added points')
            .setDescription(`Added ${pointsToGive} points to ${racingTeam.team}, they now have ${racingTeam.points} points.`)
            .setFooter({text: 'Races & Car Meets'})
            .setColor(0xd70000);
            interaction.editReply({embeds: [embed]});
        }
        
        await racingTeam.save().catch((e) => {
            console.log(`Error when updating points: ${e}`);
            interaction.editReply(`Error when updating ${racingTeam.team} their points. \nError details: ${e}`);
            return;
        })
    },
};