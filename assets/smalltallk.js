import config from "../config";

export default it => {
  it.addDocument(config.lang, "як ти ? )", "smalltalk.init");
  it.addDocument(
    config.lang,
    "пишеш їбашиш ботів робота ? )",
    "smalltalk.bots"
  );
  it.addDocument(config.lang, "як робота кантора ? )", "smalltalk.work");

  it.addAnswer(config.lang, "smalltalk.init", "та помаленьку");
  it.addAnswer(
    config.lang,
    "smalltalk.bots",
    "та піздєс хуярю їх одним за одним"
  );
  it.addAnswer(
    config.lang,
    "smalltalk.work",
    "та інтегрую казахський страйп. пздс."
  );
};
