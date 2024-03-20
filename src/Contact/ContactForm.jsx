import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = async (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      );
      setStateMessage('Message sent!');
    } catch (error) {
      setStateMessage('Something went wrong, please try again later');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={sendEmail} className="form-container">
      <div className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="user_name">Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="user_name" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="user_email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="user_email" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" rows="4"></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {stateMessage && <p className="text-sm mt-4 text-center text-gray-700">{stateMessage}</p>}
      </div>
    </form>
  );
}