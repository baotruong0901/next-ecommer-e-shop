import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth";
import { JWT } from 'next-auth/jwt';

async function refreshToken(token: JWT): Promise<JWT> {

    const res = await fetch(`${process.env.URL_BE}/auth/refresh`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token?.tokens?.refreshToken}`,
        },
    });
    const response = await res.json();

    return {
        ...token,
        tokens: response.tokens,
    };
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                phone: { label: 'phone', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.phone || !credentials?.password) {
                    throw new Error('Invalid credentials');
                }

                const { phone, password } = credentials

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
                    method: "POST",
                    body: JSON.stringify({
                        phone,
                        password
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })

                if (res.status === 400) {
                    throw new Error('Invalid credentials');
                }

                return await res.json()
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {

            if (user) return { ...token, ...user }
            if (new Date().getTime() < token.tokens.expriesIn) return token

            return await refreshToken(token)

        },

        async session({ token, session }) {

            session.user = token.user
            session.tokens = token.tokens

            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}