import Telegraf from "telegraf";
import config from "./config";
import assets from "./assets";
import it from "./it";
import unknown from "./unknown";

const bot = new Telegraf(config.telegram.token);
const ai = assets(it);

bot.on("text", async ctx => {
  const reply = await ai.process(config.lang, ctx.message.text);
  console.info(reply);
  const text = reply.answer || unknown();
  ctx.reply(text);
});

bot.launch();
