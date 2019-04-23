import { LLLClient } from "../../LLLClient";


module.exports = (client : LLLClient) => {
    console.log("load");
    client.on("message", async message => {
        const embed = message.embeds[0];
        if (embed) {
            console.log(embed.title);
            // if (embed.title === "DaPerson#0522") {
            //     try {
            //         await message.delete();
            //     } catch (_) {}
            // }
        }
    });
};