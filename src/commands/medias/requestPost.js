const { EmbedBuilder, WebhookClient, ChannelType, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: 'request-post',
  description: 'Request post approval.',
  devOnly: true,
  options: [
    {
      name: 'post',
      description: 'The post to request approval for.',
      required: true,
      type: ApplicationCommandOptionType.String,
    },
  ],
  callback: async (client, interaction) => {
    const post = interaction.options.get('post').value;
    const poster = `<@${interaction.user.id}>`;
    const webhook = new WebhookClient({id: '1116835599555498026', token: 'z6Ac74zEzUSzsLuu0_YAkYmchO5w5YKS2DMyn9oizqi-xpJI3h8tM7e9yrIUv9xU-dnE'});

    const Embed = new EmbedBuilder()
    .setTitle(`Post approval request by ${interaction.user.tag}`)
    .setDescription(post)
    .setTimestamp();

    webhook.send({
      username: interaction.user.tag,
      avatarURL: client.user.displayAvatarURL(),
      content: '<@&1116827604255780894>',
      embeds: [Embed],
    });
    interaction.reply({
      content: 'I\'ve sent your request to the management!',
      ephemeral: true,
    });
  },
}