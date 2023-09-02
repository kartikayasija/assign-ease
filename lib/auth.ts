import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "./db";
import { UserSchema } from "./models/userSchema";

export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID! ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await connectDB();

        const foundUser = await UserSchema.find({email: user.email});

        if(foundUser.length>0){
          return true;
        }

        const newUser = await UserSchema.create({
          name: user.name,
          email: user.email,
          img : user.image
        })

        if(!newUser){
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    },
  },
};
