// next-auth
import NextAuth from "next-auth";
// providers
import CredentialsProvider from "next-auth/providers/credentials";
// bcryptjs
import { compareSync } from "bcryptjs";
// mongodb
const { MongoClient } = require("mongodb");
// config
import CONFIG from "../lib/config";

async function connectMongoDb() {
  const uri = "mongodb+srv://netzeronow:netzeronow@upes-project.z5coumb.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  const db = client.db("netZeroNow");
  const collection = db.collection("users");

  return collection;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        idNumber: { type: "text" },
        uniqueId: { type: "text" },
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials, req) {
        const collection = await connectMongoDb();

        const { idNumber, uniqueId, email, password } = credentials;

        const user = await collection.findOne({ idNumber });
        if (user) {
          const checkUniqueId = uniqueId.toString() == user.uniqueId.toString();
          const checkEmail = email == user.email;
          const checkPassword = compareSync(password, user.password);

          if (checkUniqueId && checkEmail && checkPassword) {
            return user;
          } else {
            throw new Error("Wrong Email/Password combination");
          }
        } else {
          throw new Error("User not found, try Signup");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.provider = token.provider;
      }

      return session;
    },
  },
  secret: CONFIG.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
