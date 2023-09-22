const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Send mail
router.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    // Create a transporter with async/await
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Sending Email With React And Nodejs",
      html: '<h1>Congratulations</h1> <h2>You successfully sent Email</h2>',
    };

    // Use await to send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(201).json({ status: 201, message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, error: "Email sending failed", details: error.message });
  }
});

module.exports = router;
