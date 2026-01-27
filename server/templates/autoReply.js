module.exports = {
  text: ({ name }) => `
Hi ${name},

Thanks for reaching out! I've received your message and will get back to you as soon as possible.

Best regards,
Jay Knight

---
This is an automated message. Please do not reply to this email.
  `.trim(),

  html: ({ name }) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2563eb; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
    .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Thanks for reaching out!</h2>
    </div>
    <div class="content">
      <p>Hi ${name},</p>
      <p>I've received your message and will get back to you as soon as possible.</p>
      <p>Best regards,<br>Jay Knight</p>
    </div>
    <div class="footer">
      This is an automated message. Please do not reply to this email.
    </div>
  </div>
</body>
</html>
  `.trim()
};
