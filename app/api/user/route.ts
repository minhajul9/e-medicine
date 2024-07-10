import { db } from "@/lib/db";
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');


export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log('form post')
        const {email, password, gender, name, address, phone, cart} = body;

        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        })

        if(existingUserByEmail){
            return NextResponse.json({user: null, message: "User with this email is already exist."}, { status: 409})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await db.user.create({
            data: {
                email,
                password: hashedPassword,
                gender,
                name,
                address,
                phone,
                cart,
            }
        })
        return NextResponse.json({user : newUser, message: "User created successfully."}, {status: 201});
    } catch (error) {
        console.log(error)
    }
}