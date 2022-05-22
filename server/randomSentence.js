module.exports = () => {
  const sentences = [
    "Protonz is awsome. He does all sorts of cool things!",
    "Direct hit to left rocket! Repair STAT!",
    "Help the expert code all the scripts in JavaScript.",
    "Try not to die to all the monsters.",
    "Interesting facts help in making all games fun!",
    "Eat all your food in three meals a day.",
    "Watch out for the train!",
    "Early to bed, early to rise, makes a man, healthy, wealthy and wise!",
  ];
  return sentences[Math.floor(Math.random() * sentences.length)];
};
