import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from "./db";
import {compare} from 'bcrypt'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({

            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const existingUser = await db.user.findUnique({
                    where: { email: credentials?.email }
                })

                if (!existingUser) {
                    return null;
                }

                const matchPassword = await compare(credentials.password, existingUser.password);
                
                if (!matchPassword) {
                    return null;
                }

                return {
                    id: `${existingUser.id}`,
                    email: existingUser.email,
                    name: existingUser.name,
                    cart: existingUser.cart
                }
            }
        })
    ]
}