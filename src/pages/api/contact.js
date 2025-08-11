import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Nodemailer transporter setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, // Your Gmail
                pass: process.env.EMAIL_PASSWORD, // App Password
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.RECEIVER_EMAIL || process.env.EMAIL, // Your email
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error(error); // ✅ Now it's being used
        res.status(500).json({ error: "Failed to send email" });
    }
}
