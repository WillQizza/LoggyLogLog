import { LLLClient } from "../../LLLClient";


module.exports = (client : LLLClient) => {
    client.on("message", async message => {
        const embed = message.embeds[0];
        if (embed) {
            if (embed.title === "DaPerson#0522") {
                try {
                    await message.delete();
                } catch (_) {}
            }
        }
    });
};