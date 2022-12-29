import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import useSWR, { mutate } from "swr";
import initialStore from "../../../lib/store";
import axios from "axios";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_ID,
      clientSecret: process.env.KAKAO_SECRET,
    }),

    // ...add more providers here
  ],
  pages: {
    signIn: "/",
    signOut: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
    async session({ session, token, user }) {
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const response = await axios({
          method: "post",
          url: "/check-email",
          baseURL: "http://localhost:8080",
          timeout: 10000,
          headers: {
            "Content-type": "application/json",
          },
          data: JSON.stringify({
            EMAIL: user.email,
          }),
        });
        if (response.data.EMAIL) {
          return true;
        } else {
          return `/auth/new-user?email=${user.email}`;
        }
      } catch (error) {
        console.error(error);
        return "/";
      }
    },
  },
};

export default NextAuth(authOptions);
