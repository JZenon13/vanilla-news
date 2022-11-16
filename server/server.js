const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
var cors = require("cors");

///////////////////////////////////////////////////
const ATLAS_URI = process.env.ATLAS_URI;
const PROJECT_NAME = process.env.PROJECT_NAME;

MongoClient.connect(ATLAS_URI, {
  useUnifiedTopology: true,
}).then((client, result) => {
  const db = client.db(PROJECT_NAME);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use("/user", (req, res) => {
    res.send({
      token: req.body,
    });
  });
  app.listen(5000, function () {
    console.log("listening on 5000");
  });

  app.post("/user", async (req, res) => {
    try {
      const newUser = { id: uuidv4(), ...req.body };
      await db.collection("user").insertOne(newUser);
      return res.json({ success: true, data: newUser });
    } catch (error) {
      throw error;
    }
  });
});
