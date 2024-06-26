import {
  Client,
  GatewayIntentBits,
  Collection,
  Partials,
  IntentsBitField,
  PermissionFlagsBits,
} from "discord.js";
import * as dotenv from "dotenv";
import { readdirSync } from "fs";
import { join } from "path";
import { SlashCommand } from "./types";

dotenv.config();

//définitions des droits
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
  ],
  partials: [Partials.GuildMember, Partials.User],
});
client.slashCommands = new Collection<string, SlashCommand>();
const handlersDirs = join(__dirname, "./handlers");

readdirSync(handlersDirs).forEach((file) => {
  require(`${handlersDirs}/${file}`)(client); //injecte le client dans tous les fichiers du répertoire handlers
});
client.login(process.env.TOKEN);

if (!Array.prototype.sample) {
  Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
  };
}

if (!Array.prototype.divide) {
  Array.prototype.divide = function (size: number) {
    return Array.from({ length: Math.ceil(this.length / size) }, (_, index) =>
      this.slice(index * size, (index + 1) * size)
    );
  };
}

export { client };
