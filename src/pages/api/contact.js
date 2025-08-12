import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email_id, message } = req.body;

    if (!name || !email_id || !message) {
        return res.status(400).json({ 
            error: "All fields are required",
            errors: [{ message: "Name, email, and message are required" }]
        });
    }

    try {
        // Nodemailer transporter setup
        const transporter = nodemailer.createTransporter({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.RECEIVER_EMAIL || process.env.EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email_id}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending failed:", error);
        res.status(500).json({ 
            error: "Failed to send email",
            errors: [{ message: "Failed to send email. Please try again later." }]
        });
    }
}