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

export default async function usersHandler(req, res) {
  try {
    if (req.method == "GET") {
      res.json("Live");
    } else if (req.method == "POST") {
      const collection = await connectMongoDb();

      const { idNumber, email, password } = req.body;

      if (idNumber && email && password) {
        const checkExisting = await collection.findOne({ idNumber });

        if (checkExisting) {
          res.json({ message: "User already exist, try Login" });
        } else {
          const salt = genSaltSync();
          const hashedPass = hashSync(password, salt);

          const uniqueId = crypto.randomBytes(8).toString("hex");

          const user = await collection.insertOne({ idNumber, uniqueId, email, password: hashedPass });

          res.json({ message: "Signup successful, try Login", user });
        }
      }
    } else {
      res.json("Bad Request");
    }
  } catch (error) {
    console.log(error);
    res.send("Internal server error");
  }
}
