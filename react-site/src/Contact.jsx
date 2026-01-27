import React, { useState, useRef } from 'react';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const formRef = useRef();

  async function sendEmail(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    const formData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value
    };

    try {
      const response = await fetch('/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage('Email sent successfully! I\'ll get back to you ASAP 🙂');
        setMessageType('success');
        e.target.reset();
        setTimeout(() => {
          setStatusMessage('');
        }, 5000);
      } else {
        // Handle validation errors or rate limiting
        if (data.errors) {
          setStatusMessage(data.errors.map(e => e.msg).join(', '));
        } else {
          setStatusMessage(data.message || 'Error sending email. Please try again.');
        }
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('Network error. Please check your connection and try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center site justify-center">
      <div className="max-w-md p-8 rounded-2xl shadow-lg resume-header crt-text" style={{width: '50%'}}>
        <h1 className="text-2xl font-bold mb-2">Contact</h1>
        <p className="mb-4">Enter your name, email, and message below and I'll get back to you as soon as possible. </p>
        <form ref={formRef} onSubmit={sendEmail} className="contact-form flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="block w-full mb-1">Name:</label>
            <input className="w-full" type="text" id="name" name="name" required disabled={isSubmitting} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="block w-full mb-1">Email:</label>
            <input className="w-full" type="email" id="email" name="email" required disabled={isSubmitting} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="subject" className="block w-full mb-1">Subject:</label>
            <input className="w-full" type="text" id="subject" name="subject" required disabled={isSubmitting} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="block w-full mb-1">Message:</label>
            <textarea className="w-full" id="message" name="message" required rows={5} disabled={isSubmitting}></textarea>
          </div>
          <button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
        {statusMessage && (
          <div className={`status-message status-message--${messageType} mt-4`}>
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
}
export default Contact;