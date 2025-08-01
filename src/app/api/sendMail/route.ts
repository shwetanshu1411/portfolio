// // import { NextResponse } from "next/server";
// // import nodemailer from "nodemailer";
// // import { setDefaultResultOrder } from "dns";
// // setDefaultResultOrder("ipv4first");

// // export async function POST(req: Request) {
// //   try {
// //     const { name, email_id, message, subject } = await req.json();

// //     const transporter = nodemailer.createTransport({
// //       host: "smtp.gmail.com",
// //       port: 587,
// //       secure: false,
// //       auth: {
// //         user: process.env.EMAIL_USER,
// //         pass: process.env.EMAIL_PASS,
// //       },
// //     });

// //     const mailOptions = {
// //       from: process.env.EMAIL_USER,
// //       to: process.env.EMAIL_RECEIVER,
// //       subject: subject || "Portfolio Contact",
// //       html: `
// //         <h2>Contact Request</h2>
// //         <p><b>Name:</b> ${name}</p>
// //         <p><b>Email:</b> ${email_id}</p>
// //         <p><b>Message:</b><br/>${message}</p>
// //       `,
// //     };

// //     await transporter.sendMail(mailOptions);
// //     return NextResponse.json({ message: "Email sent successfully", status: 200 });
// //   } catch (error: unknown) {
// //     console.error("Email error:", error);
// //     return NextResponse.json({ message: "Failed to send email", error: error instanceof Error ? error.message : String(error) }, { status: 500 });
// //   }
// // }


// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     // 1. Parse the incoming request body to get the form data
//     const { name, email_id, message } = await req.json();

//     // 2. Get your email credentials from environment variables
//     const user = process.env.EMAIL_USER;
//     const pass = process.env.EMAIL_PASS;
//     const receiver = process.env.EMAIL_RECEIVER;

//     // A simple check to make sure environment variables are loaded
//     if (!user || !pass || !receiver) {
//         console.error("Missing environment variables for email configuration.");
//         return NextResponse.json({ message: "Server configuration error." }, { status: 500 });
//     }

//     // 3. Create a transporter object using Gmail's SMTP server
//     //    This object is responsible for sending the email.
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false, // `false` for port 587, `true` for 465
//       auth: {
//         user: user,
//         pass: pass, // Use the 16-character App Password here
//       },
//     });

//     // 4. Define the email options
//     //    This is the content of the email you will receive.
//     const mailOptions = {
//       from: `"${name}" <${user}>`, // Sender's name and your authenticated email
//       to: receiver,                 // The email address that receives the form submission
//       replyTo: email_id,            // The visitor's email address for easy replies
//       subject: `New Portfolio Message from ${name}`,
//       html: `
//         <h2>New Contact Request</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> <a href="mailto:${email_id}">${email_id}</a></p>
//         <hr />
//         <h3>Message:</h3>
//         <p>${message}</p>
//       `,
//     };

//     // 5. Send the email
//     await transporter.sendMail(mailOptions);

//     // 6. Return a success response
//     return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

//   } catch (error) {
//     // If anything goes wrong, log the error and return a server error response
//     console.error("Failed to send email:", error);
//     return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z, ZodError } from "zod";

// Defines the validation rules for the form data
const emailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email_id: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate the incoming data against the schema
    const { name, email_id, message } = emailSchema.parse(body);

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const receiver = process.env.EMAIL_RECEIVER;
    
    if (!user || !pass || !receiver) {
        console.error("Missing environment variables for email configuration.");
        return NextResponse.json({ message: "Server configuration error." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: user,
        pass: pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      to: receiver,
      replyTo: email_id,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email_id}">${email_id}</a></p>
        <hr />
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

  } catch (error) {
    // If the error is from Zod, return a 400 Bad Request error
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Invalid form data.", errors: error.issues },
        { status: 400 }
      );
    }

    // Handle all other errors
    console.error("Failed to send email:", error);
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
  }
}