import { createGenerator } from "meta-ipsum";
import vocabulary from "./vocabulary.json";

const vocab = new Set(vocabulary);

export default createGenerator(vocab);
