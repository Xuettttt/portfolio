import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields",
      });
    }

    if (
      name.length > 40 || phone.length > 40 || email.length > 200 || message.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "Form content is too long",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ai.zxt19990330@gmail.com"],
      subject: `New portfolio contact from ${name}`,
      replyTo: email,

      html: `
        <h2>New Portfolio Enquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>

        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `
    });

    if (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      id: data.id,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}