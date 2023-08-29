module.exports = {
  name: `nickname-reset`,
  description: `Reset your server nickname to your roblox username.`,
  callback: async (client, interaction) => {
  fetch(`https://api.blox.link/v4/public/guilds/873332835426132038/discord-to-roblox/${interaction.user.id}`, { headers: { "Authorization": "51889c7a-7c21-42fc-8ebf-ce9ba28adf59" } })
	.then((response) => response.json())
	.then((data) => {
    fetch(`https://users.roblox.com/v1/users/${data.robloxID}`)
    .then((response) => response.json())
    .then((data2) => {
      interaction.member.setNickname(data2.name);
      interaction.reply(`Changed your nickname to ${data2.name}`)
    })
  });
  },
};