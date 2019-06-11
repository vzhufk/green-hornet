import NLP from "node-nlp";
import config from "./config";

export default new NLP.NlpManager({ languages: [config.lang] });
