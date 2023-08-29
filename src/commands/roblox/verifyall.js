const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'verifyall',
    description: "Roblox verify all.",
    devOnly: true,
    options: [
        {
            name: 'role',
            description: 'unverified role',
            type: ApplicationCommandOptionType.Mentionable,
            required: true,
        },
        {
            name: 'role2',
            description: 'verified role',
            type: ApplicationCommandOptionType.Mentionable,
            required: true,
        },
    ],
    callback: async (client, interaction) => {
        const delay = async (ms) => new Promise(res => setTimeout(res, ms));
        const role = interaction.options.getRole('role');
        const role2 = interaction.options.getRole('role2');
        interaction.guild.members.cache.filter(m => !m.roles.cache.some(role => role.name === 'Member')).forEach(async member => {
            await delay(member.id);
            fetch(`https://api.blox.link/v4/public/guilds/873332835426132038/discord-to-roblox/discord-to-roblox/${member.id}`, { headers: { "Authorization": "17d4a25a-e5fd-414f-be72-6113b36df5bb" } })
	.then((response) => response.json())
	.then((data) => {
        fetch(`https://users.roblox.com/v1/users/${data.robloxID}`)
            .then((response) => response.json())
            .then(async (data2) => {
                if (data2.name === undefined) return member.roles.add(role)
                member.setNickname(`${data2.name}`)
                await delay(5000);
                member.roles.add(role2)
                await delay(50000);
            })
    });
    })
    }
}