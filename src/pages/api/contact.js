// /src/pages/api/contact.js or /src/pages/api/sendMail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email_id, message } = req.body;

  // Validate required fields
  if (!name || !email_id || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields',
      errors: [{ message: 'Name, email, and message are required' }]
    });
  }

  // Create transporter (configure with your email service)
  const transporter = nodemailer.createTransporter({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // where you want to receive emails
    subject: `Portfolio Contact: ${name}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email_id}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    // ✅ Properly handle the error variable
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      message: 'Failed to send email',
      errors: [{ message: error.message || 'Internal server error' }]
    });
  }
}