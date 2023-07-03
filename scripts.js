const collectiveWisdom = {
  signInfo: ["star", "moon", "sun", "comet"],
  fortuneOutput: [
    "terrible luck",
    "bad luck",
    "ok luck",
    "good luck",
    "great luck",
  ],
  advice: ["go out and eat", "not read this", "play more", "trust no one"],
};

let generateRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

let personalWisdom = [];

for (let key in collectiveWisdom) {
  let optionIndex = generateRandomNumber(collectiveWisdom[key].length);
  switch (key) {
    case "signInfo":
      personalWisdom.push(
        `Your sign right now is a "${collectiveWisdom[key][optionIndex]}".`
      );
      break;

    case "fortuneOutput":
      personalWisdom.push(
        `you are having: ${collectiveWisdom[key][optionIndex]}`
      );
      break;

    case "advice":
      personalWisdom.push(`you should: ${collectiveWisdom[key][optionIndex]}`);
      break;

    default:
      personalWisdom.push("There is not enough info.");
  }
}

function formatWisdom(wisdom) {
  const formatted = personalWisdom.join("\n");
  console.log(formatted);
}

formatWisdom(personalWisdom);
