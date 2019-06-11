import config from "../config";

export default it => {
  it.addDocument(config.lang, "пака ! . )", "greetings.bye");
  it.addDocument(config.lang, "всьо давай ! . )", "greetings.bye");
  it.addDocument(config.lang, "уйобуй ! . )", "greetings.bye");
  it.addDocument(config.lang, "до завтра ? ! . ) ", "greetings.bye");
  it.addDocument(config.lang, "здороу ! . )", "greetings.hello");
  it.addDocument(config.lang, "прівєт ! . )", "greetings.hello");
  it.addDocument(config.lang, "привіт ! . )", "greetings.hello");
  it.addDocument(config.lang, "здоров . ! )", "greetings.hello");
  it.addDocument(config.lang, "ку ! ) ", "greetings.hello");

  it.addAnswer(config.lang, "greetings.bye", "давай колєга");
  it.addAnswer(config.lang, "greetings.bye", "цілую в щічку 😘");
  it.addAnswer(config.lang, "greetings.hello", "опа здорова");
  it.addAnswer(config.lang, "greetings.hello", "здороу");
};
