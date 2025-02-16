import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, subject, message } = await req.json();
        console.log(email)
        const info = await transporter.sendMail({
            to: process.env.EMAIL_USER,
            subject: subject,
            html: `<p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Email:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>`,
        });

        return NextResponse.json({ success: true, message: "Message successfully sent" });
    } catch (error: any) {
        console.error("Email error:", error);
        return NextResponse.json({ success: false, error: "Something went wrong" });
    }
}
