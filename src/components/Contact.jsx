import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // To track the sending state
  const [success, setSuccess] = useState(false); // To show success message

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);  // Show loading when sending the message

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_vmb7wuh', 'template_go7ppsy', templateParams, 'Y6vic-QnRFA1bfRiX')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Clear form fields and show success message
        setName('');
        setEmail('');
        setMessage('');
        setSuccess(true);
        setLoading(false);  // Stop loading once email is sent
      }, (error) => {
        console.error('Failed to send email. Error:', error);
        setLoading(false);  // Stop loading on error
      });
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-500 dark:text-purple-300">Contact</h2>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          
          {/* Name Input */}
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg" 
            required
          />
          
          {/* Email Input */}
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg" 
            required
          />

          {/* Message Input with * */}
          <div>
            <textarea 
              placeholder="Write Message Here..." 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg" 
              rows="5" 
              required
            />
            <span className="text-red-500">* Required</span> {/* Indicate required field */}
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full px-6 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded hover:bg-purple-700 dark:hover:bg-purple-600"
            disabled={loading}  // Disable button while sending
          >
            {loading ? 'Sending...' : 'Send'}  {/* Show "Sending..." while the form is submitting */}
          </button>

          {/* Success Message */}
          {success && (
            <p className="text-green-500 text-center mt-4">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
