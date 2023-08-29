require('dotenv').config();
const { ActivityType, setActivity} = require('discord.js')

module.exports = async (client) => {
try {
    let status = [
        {
          name: "races 🏎",
          type: ActivityType.Competing,
        },
    ];

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
} catch (error) {
    console.log(`Error while changing presence: ${error}`)
} {
}
};