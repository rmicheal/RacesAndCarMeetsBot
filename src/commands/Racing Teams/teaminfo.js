const { Client, EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const Team = require('../../models/Team');

module.exports = {
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
    
    callback: async (client, interaction) => {
        if (!interaction.inGuild()) {
            interaction.reply('You can only run this command inside the server.');
            return;
        }
        
        await interaction.deferReply();
        
        const targetTeam = interaction.options.get('team').value;
        
        const racingTeam = await Team.findOne({team: targetTeam});
        
        if (!racingTeam) {
            interaction.editReply(`The team "${targetTeam}" does not exist, if you think this is a mistake or the team is new contact "! Mystic Developer#0001".`);
            return;
        };
        
        let allTeams = await Team.find({enabled: true}).select(
            '-_id team points penalties wins compwins racers competition owner'
        );
        
        allTeams.sort((a, b) => {
        if (a.points === b.points) {
          return b.points - a.points;
        } else {
          return b.points - a.points;
        }
      });
        
        let currentRank = allTeams.findIndex((pts) => pts.team === targetTeam) + 1;
        
        const teamEmbed = new EmbedBuilder()
        .setTitle(`${racingTeam.team}`)
        .setDescription(`Team name: ${racingTeam.team} \nTeam owner: ${racingTeam.owner} \nTeam points: ${racingTeam.points} \nTeam penalties: ${racingTeam.penalties} \nWins: ${racingTeam.wins} \nCompetition wins: ${racingTeam.compwins} \nTeam members: ${racingTeam.racers} \n Current competition: ${racingTeam.competition}`)
        .setColor(0xd70000)
        
        
        interaction.editReply({embeds: [teamEmbed]});
        
        },
    name: 'teaminfo',
    description: 'Get information about a racing team.',
    options: [
        {
            name: 'team',
            description: 'The team you want information about.',
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
    ],
};