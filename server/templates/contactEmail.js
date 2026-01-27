module.exports = {
  text: ({ name, email, subject, message }) => `
    New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from your website contact form
  `.trim(),

  html: ({ name, email, subject, message }) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2563eb; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #4b5563; }
    .message { background: white; padding: 15px; border-left: 3px solid #2563eb; margin-top: 10px; }
    .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> ${name}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
      </div>
      <div class="field">
        <span class="label">Subject:</span> ${subject}
      </div>
      <div class="message">
        <strong>Message:</strong><br><br>
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
    <div class="footer">
      Sent from your website contact form
    </div>
  </div>
</body>
</html>
  `.trim()
};
