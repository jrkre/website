import React from 'react';


function Contact() {

  function sendEmail(e) {

    e.preventDefault();
    // send an email using lk.shooba.info/api/email/send
    const formData = new FormData(e.target);
    fetch('https://lk.shooba.info/api/email/send', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert('Error sending email.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending email.');
      });
  }
  return (
    <div className="min-h-screen flex items-center site justify-center ">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg resume-header crt-text">
        <h1 className="text-2xl font-bold mb-2">Contact</h1>
        <p className="mb-4">Enter your name, email, and message below and I'll get back to you as soon as possible.</p>
        <form onSubmit={sendEmail} className="contact-form flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="block w-full mb-1">Name:</label>
            <input className="w-full" type="text" id="name" name="name" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="block w-full mb-1">Email:</label>
            <input className="w-full" type="email" id="email" name="email" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="subject" className="block w-full mb-1">Subject:</label>
            <input className="w-full" type="text" id="subject" name="subject" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="block w-full mb-1">Message:</label>
            <textarea className="w-full" id="message" name="message" required rows={5}></textarea>
          </div>
          <button type="submit" className="w-full">Send</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;