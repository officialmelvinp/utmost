"use server"

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // Log the data (remove this in production)
  console.log("Form submission:", { firstName, lastName, email, phone, service, message })

  // Simulate processing
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real implementation, you'd send an email like this:
  // await sendEmail({
  //   to: 'uhsolutionsllc@yahoo.com',
  //   subject: `New Contact Form Submission from ${firstName} ${lastName}`,
  //   html: `
  //     <h2>New Contact Form Submission</h2>
  //     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Phone:</strong> ${phone}</p>
  //     <p><strong>Service:</strong> ${service}</p>
  //     <p><strong>Message:</strong> ${message}</p>
  //   `
  // })

  return {
    success: true,
    message: "Thank you for your message! We will contact you within 24 hours.",
  }
}
