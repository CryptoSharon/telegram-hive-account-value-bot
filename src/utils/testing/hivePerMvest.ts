import { Client } from "@hiveio/dhive";
import { apiUrls } from "../../config.json";
import { hivePerMvest } from "../hivePerMvests";
const client = new Client(apiUrls);
hivePerMvest(client).then(console.log);
