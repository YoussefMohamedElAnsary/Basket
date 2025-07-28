import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-5 py-10 text-[#222]">
      <h2 className="text-3xl font-bold text-center mb-2">Get In Touch</h2>
      <p className="max-w-xl mx-auto text-center text-gray-600 mb-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
      quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
      veniam vel.
      </p>

      <div className="flex flex-wrap justify-between gap-5 mb-16">
        {[
          {
            icon: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
            title: "102 Street 2714 Donovan",
          },
          {
            icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
            title: "+02 1234 567 88",
          },
          {
            icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
            title: "info@example.com",
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#EDEEF5] flex-1 min-w-[250px] p-6 text-center rounded-xl">
            <div className="bg-[#e9f8f6] w-[60px] h-[60px] flex items-center justify-center mx-auto rounded-full mb-4">
              <img src={item.icon} alt="icon" className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="text-gray-600">Lorem ipsum dolor sit amet discont</p>
          </div>
        ))}
      </div>

      <form className="bg-[#EDEEF5] p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2">Send Us</h2>
        <p className="text-center text-gray-600 mb-6">
          Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.
        </p>

        <div className="flex flex-col md:flex-row gap-5 mb-4">
          <input type="text" placeholder="Name" required className="flex-1 p-3 bg-gray-100 border border-gray-300 rounded" />
          <input type="email" placeholder="Email *" required className="flex-1 p-3 bg-gray-100 border border-gray-300 rounded" />
        </div>

        <input type="text" placeholder="Phone number" className="w-full p-3 bg-gray-100 border border-gray-300 rounded mb-4" />
        <textarea rows="5" placeholder="Your message" className="w-full p-3 bg-gray-100 border border-gray-300 rounded mb-4" />
        <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
