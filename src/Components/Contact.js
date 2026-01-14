import React from 'react';

const Contact = () => {
  return (
    <div>
      <form action="https://api.web3forms.com/submit" method="POST" className="max-w-lg mx-auto p-4 bg-black shadow-md rounded-lg">
        <input type="hidden" name="access_key" value="dd54d320-fc98-49ef-b5fc-44ad54aa2bc4" />

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-400 text-sm font-bold mb-2">Message</label>
          <textarea
            name="message"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        <input type="hidden" name="redirect"  />

        <div className="text-start">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
