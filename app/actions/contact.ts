"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  try {
    // Create transporter for Yahoo Mail
    const transporter = nodemailer.createTransport({
      service: "yahoo",
      auth: {
        user: process.env.YAHOO_EMAIL, // uhsolutionsllc@yahoo.com
        pass: process.env.YAHOO_APP_PASSWORD, // Yahoo App Password
      },
    })

    // Email to business owner
    const mailOptions = {
      from: process.env.YAHOO_EMAIL,
      to: "uhsolutionsllc@yahoo.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone || "Not provided"}</a></p>
            <p><strong>Service Needed:</strong> ${service || "Not specified"}</p>
          </div>
          
          <div style="background-color: #fef3f2; padding: 20px; border-radius: 8px; border-left: 4px solid #ef4444;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours for the best customer experience.
            </p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Optional: Send confirmation email to customer
    const customerConfirmation = {
      from: process.env.YAHOO_EMAIL,
      to: email,
      subject: "Thank you for contacting Utmost Healthcare Solutions LLC",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Thank you for your inquiry!</h2>
          
          <p>Dear ${firstName},</p>
          
          <p>Thank you for contacting Utmost Healthcare Solutions LLC. We have received your message and will respond within 24 hours.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your Message Summary:</h3>
            <p><strong>Service Needed:</strong> ${service || "General Inquiry"}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>If you need immediate assistance, please call us at:</p>
          <ul>
            <li>Office: <a href="tel:404-449-6952">(404) 449-6952</a></li>
            <li>Mobile: <a href="tel:678-740-1973">(678) 740-1973</a></li>
          </ul>
          
          <p>Best regards,<br>
          <strong>Utmost Healthcare Solutions LLC</strong><br>
          Always Caring. Always Here.</p>
        </div>
      `,
    }

    await transporter.sendMail(customerConfirmation)

    return {
      success: true,
      message:
        "Thank you for your message! We will contact you within 24 hours. Please check your email for confirmation.",
    }
  } catch (error) {
    console.error("Email sending failed:", error)
    return {
      success: false,
      message: "Sorry, there was an issue sending your message. Please call us directly at (678) 740-1973.",
    }
  }
}
