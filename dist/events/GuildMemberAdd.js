"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const event = {
    name: discord_js_1.Events.GuildMemberAdd,
    once: false,
    execute(member, client) {
        return __awaiter(this, void 0, void 0, function* () {
            yield client.guilds.cache.get(process.env.GUILD_ID).members.fetch(); //on recharge le cache
            var tc = member.guild.channels.cache.get("764019300230758411");
            tc.send(`on souhaite le bienvenue a ${member.user}!`);
        });
    },
};
exports.default = event;