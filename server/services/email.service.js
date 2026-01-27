const transporter = require('../config/email.config');
const contactEmailTemplate = require('../templates/contactEmail');
const autoReplyTemplate = require('../templates/autoReply');

class EmailService {
  async sendContactEmail({ name, email, subject, message }) {
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.SITE_OWNER_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: contactEmailTemplate.text({ name, email, subject, message }),
      html: contactEmailTemplate.html({ name, email, subject, message })
    };

    return await transporter.sendMail(mailOptions);
  }

  async sendAutoReply({ name, email }) {
    const mailOptions = {
      from: `"Jay Knight" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Thanks for reaching out!',
      text: autoReplyTemplate.text({ name }),
      html: autoReplyTemplate.html({ name })
    };

    return await transporter.sendMail(mailOptions);
  }
}

module.exports = new EmailService();
