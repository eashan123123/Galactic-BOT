require("dotenv").config();

const axios = require("axios");
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/galactic-bot-hello", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Hi! I am your Galactic Bot, ready for anything! 
   If you need help with finding any commands, you can use the command /galactic-bot-help.
   \nLatency: ${latency}ms` 
  });
});

app.command("/galactic-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/galactic-bot-help", async ({ ack, respond }) => {
    await ack();
    await respond({
      text:
  `Available Commands:
  /galactic-bot-hello - Say hello to Galactic Bot
  /galactic-bot-ping - Check bot latency
  /galactic-bot-catfact - Get a cat fact
  /galactic-bot-joke - Responds with a joke`
    });
  })

app.command("/galactic-bot-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/galactic-bot-joke", async ({ ack, respond }) => {
    await ack();
  
    try {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      await respond({
        text:
  `${response.data.setup}
  
  ${response.data.punchline}`
      });
    } catch (err) {
      await respond({ text: "Failed to fetch a joke." });
    }
  });

app.command("/galactic-bot-spacefact", async ({ ack, respond }) => {
    await ack();
  
    try {
      const response = await axios.get("http://localhost:3000/space_facts");
      await respond({
        text:
  `${response.data.fact}
  
  ${response.data.source}`
      });
    } catch (err) {
      await respond({ text: "Failed to fetch a fact." });
    }
  });
  

(async () => {
  await app.start();
  console.log("bot is running!");
})();