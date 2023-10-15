const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg" data-aos="fade-down" data-aos-duration="1000">
          <h1 className="text-3xl font-semibold text-black mb-6 text-center">
            <span className="text-secondary">Contact</span>
          </h1>
          <form className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 text-black"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-primary text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
