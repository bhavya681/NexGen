import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4 text-white pt-5">
      <header className="bg-gray-600 text-white p-4 mb-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      </header>
      <div className="text-gray-700">
        <div className="flex flex-col items-center">
          <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium text-gray-700">Your Name</label>
                <input type="text" id="name" name="name" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-700">Your Email</label>
                <input type="email" id="email" name="email" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium text-gray-700">Your Message</label>
                <textarea id="message" name="message" rows="4" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center text-gray-300">For any inquiries or support, please email us at <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a> or call us at <span className="font-medium">+1234567890</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
