// bcrypt
import { hashSync, genSaltSync } from "bcryptjs";
// mongodb
const { MongoClient } = require("mongodb");
// crypto
const crypto = require("crypto");

async function connectMongoDb() {
  const uri = "mongodb+srv://netzeronow:netzeronow@upes-project.z5coumb.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  const db = client.db("netZeroNow");
  const collection = db.collection("users");

  return collection;
}

export default async function usershandler(req, res) {
  try {
    if (req.method == "POST") {
      const collection = await connectMongoDb();

      const { idNumber, email, password } = req.body;

      if (idNumber && email && password) {
        const checkExisting = await collection.findOne({ idNumber });

        if (checkExisting) {
          res.json({ message: "User already exist, try Login" });
        } else {
          const salt = genSaltSync();
          const hashedPass = hashSync(password, salt);

          const uniqueId = crypto.randomBytes(16).toString("hex");

          const user = await collection.insertOne({ idNumber, uniqueId, email, password: hashedPass });

          res.status(201).json({ message: "Signup successful, try Login", user });
        }
      }
    } else if (req.method == "GET") {
      res.status(200).json("Live");
    } else {
      res.status(400).json("Bad Request");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
}
