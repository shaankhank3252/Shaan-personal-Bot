module.exports.config = {
  name: "autoreact",
  version: "1.1.1",
  hasPermission: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Bot React",
  commandCategory: "No Prefix",
  usages: '[]',
  cooldowns: 0,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  try {
    if (!event.body) return;
    
    const { threadID, messageID } = event;
    const react = event.body.toLowerCase();
    
    // Soul reaction
    if (react.includes("soul")) {
      api.setMessageReaction("🖤", messageID, (err) => {}, true);
    }
    // Love reactions
    else if (react.includes("mahal") || react.includes("krishna") || react.includes("ram") || react.includes("love") || react.includes("lab") || react.includes("kiss") || react.includes("priyansh") || react.includes("😊") || react.includes("😍")) {
      api.setMessageReaction("❤️", messageID, (err) => {}, true);
    }
    // Sad reactions
    else if (react.includes("sakit") || react.includes("saket") || react.includes("sad") || react.includes("pain") || react.includes("mamatay") || react.includes("malungkot") || react.includes("😢") || react.includes("😭") || react.includes("depress") || react.includes("stress")) {
      api.setMessageReaction("😢", messageID, (err) => {}, true);
    }
    // India reaction
    else if (react.includes("india") || react.includes("bharat")) {
      api.setMessageReaction("🇮🇳", messageID, (err) => {}, true);
    }
    // Morning/Evening reactions
    else if (react.includes("morning") || react.includes("night") || react.includes("evening") || react.includes("nyt") || react.includes("eat")) {
      api.setMessageReaction("❤", messageID, (err) => {}, true);
    }
    // Surprise reaction
    else if (react.includes("wow") || react.includes("robot")) {
      api.setMessageReaction("😮", messageID, (err) => {}, true);
    }
  } catch (err) {
    // Silently catch errors to prevent bot crash
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {
  // This is called when command is triggered
};
