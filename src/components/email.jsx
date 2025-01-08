import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_7ryflws',      // Replace with your Service ID
      'template_podvm13',     // Replace with your Template ID
      formData,
      'J4MAifF3MwhlOXYgV'     // Replace with your User ID (Public Key)
    )
    .then(() => {
      setSuccess(true);
      setError(false); // Reset error state
      setFormData({ name: '', email: '', message: '' }); // Clear form
    })
    .catch(() => {
      setError(true);
      setSuccess(false); // Reset success state
    });
  };

  return (
    <div className="p-10 bg-sky-800 m-5 text-white max-w-lg mx-auto rounded-md">
      <h1 className="text-3xl mb-6 text-center">Contact Me</h1>
      {success && <p className="text-green-500">Message sent successfully!</p>}
      {error && <p className="text-red-500">Error sending message. Please try again.</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input 
            id="name"
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            autoComplete="name"
            className="w-full p-2 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input 
            id="email"
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            autoComplete="email"
            className="w-full p-2 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea 
            id="message"
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            autoComplete="off"
            className="w-full h-32 p-2 rounded-md text-black"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-gray-950 w-full py-2 rounded-md hover:bg-indigo-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
