/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const name = e.record.get("name");
  const email = e.record.get("email");
  const phone = e.record.get("phone");
  const company = e.record.get("company");
  const serviceInterest = e.record.get("service_interest");
  const message = e.record.get("message");
  
  const htmlBody = `
    <h2>New Contact Form Submission from ${name}</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    <p><strong>Company:</strong> ${company || "Not provided"}</p>
    <p><strong>Service Interest:</strong> ${serviceInterest || "Not provided"}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;
  
  const mailMessage = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "admin@dimesolutions.com" }],
    subject: "New Contact Form Submission from " + name,
    html: htmlBody
  });
  
  $app.newMailClient().send(mailMessage);
  e.next();
}, "contacts");