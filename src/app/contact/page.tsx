const Contact = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center flex-grow p-6 pt-24">
        <h1 className="text-5xl font-bold text-black my-4">Contact Us</h1> {/* Changed to black */}
        <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
          We would love to hear from you! Please reach out with any questions
          or inquiries. Your feedback is important to us.
        </p>
        <form className="flex flex-col space-y-6 w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white p-4 rounded-lg hover:bg-pink-700 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
