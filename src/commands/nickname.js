const { Message, GuildMember } = require("discord.js");

module.exports = {
    name: "nickname",
    description: "Changes the user's nickname in the server.",
    /**
     * @param {Message} message
     * @param {string} args
     */
    async execute(message, args) {
        /** @type {string?} */
        message.member.setNickname(args).catch(e => console.log(e));
    }
}