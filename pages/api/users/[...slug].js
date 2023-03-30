// mongodb
const { MongoClient } = require("mongodb");

async function connectMongoDb() {
  const uri = "mongodb+srv://netzeronow:netzeronow@upes-project.z5coumb.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  const db = client.db("netZeroNow");
  const collection = db.collection("users");

  return collection;
}

export default async function userhandler(req, res) {
  try {
    const { slug, user_with_toys } = req.query;
    await connectMongoDB();

    if (slug.length == 1) {
      const email = slug[0];

      if (req.method == "GET") {
        let user;

        /**
         * Trying to combine the user and toys collection so that with shortlisted_gifts property in users collection we can fetch the ...
         * ... toys from the toys collection
         * shortlisted_gifts contains the id of the toy in toys collection.
         */
        if (user_with_toys) {
          user = await User.aggregate([
            {
              $match: {
                email: email,
              },
            },
            {
              $lookup: {
                from: CONFIG.toysCollection,
                localField: "shortlisted_gifts",
                foreignField: "_id",
                as: "shortlisted_gifts_info",
              },
            },
          ]);
        } else {
          user = await User.findOne({ email }, { password: 0 });
        }
        res.status(200).json(user);
      } else if (req.method == "PUT") {
        const { profiles, email, ...body } = req.body;
        let data = {};
        Object.entries(body)
          .filter(([key, value]) => value.toString().trim())
          .forEach(([key, value]) => (data[key] = value.toString().trim()));

        const user = await User.findOneAndUpdate({ email }, data, {
          fields: { password: 0 },
          new: true,
          upsert: true,
        });
        res.status(200).json(user);
      } else {
        res.status(400).json("Bad Request");
      }
    } else if (slug.length == 2 && slug[1] == "profiles") {
      const email = slug[0];

      if (req.method == "GET") {
        const user = await User.findOne({ email }, { profiles: 1 });
        res.status(200).json(user.profiles);
      } else if (req.method == "POST") {
        const user = await User.findOne({ email });

        if (user) {
          const data = req.body;

          const checkExisting = await User.findOne({
            email,
            "profiles.name": data.name,
            "profiles.dob": data.dob,
            "profiles.gender": data.gender,
          });

          if (checkExisting) {
            res.status(409).json({ message: "Gifting profile already exists" });
          } else {
            const rsp = await User.findOneAndUpdate(
              { email },
              { $addToSet: { profiles: data } },
              {
                fields: { profiles: 1 },
                new: true,
                upsert: true,
              }
            );

            res.status(201).json(rsp.profiles);
          }
        } else {
          res.status(400).json("Bad Request");
        }
      } else {
        res.status(400).json("Bad Request");
      }
    } else if (slug.length == 3 && slug[1] == "profiles") {
      const email = slug[0];
      const profile = slug[2];

      if (req.method == "PUT") {
        const { name, dob, gender } = req.body;

        const user = await User.findOneAndUpdate(
          { email, "profiles._id": profile },
          {
            $set: {
              "profiles.$.name": name,
              "profiles.$.dob": dob,
              "profiles.$.gender": gender,
            },
          },
          {
            fields: { profiles: 1 },
            new: true,
            upsert: true,
          }
        );
        res.status(200).json(user.profiles);
      } else if (req.method == "DELETE") {
        const user = await User.findOneAndUpdate(
          { email },
          { $pull: { profiles: { _id: profile } } },
          {
            fields: { profiles: 1 },
            new: true,
            upsert: true,
          }
        );
        res.status(200).json(user.profiles);
      } else {
        res.status(400).json("Bad Request");
      }
    } else if (slug[1] === "your-likes") {
      const email = slug[0];
      let response;
      if (req.method == "PUT") {
        const likedToys = req.body;
        response = await User.findOneAndUpdate({ email }, { $set: { shortlisted_gifts: [...likedToys] } }, { new: true });
      }
      res.status(200).json(response);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
}
