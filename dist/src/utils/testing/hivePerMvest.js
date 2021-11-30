"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dhive_1 = require("@hiveio/dhive");
const config_json_1 = require("../../../config.json");
const hivePerMvests_1 = require("../hivePerMvests");
const client = new dhive_1.Client(config_json_1.apiUrls);
hivePerMvests_1.hivePerMvest(client).then(console.log);
