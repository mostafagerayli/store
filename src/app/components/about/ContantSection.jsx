import React from "react";

export default function ContantSection() {
  return (
    <section className="bg-green-50 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Have More Questions?</h2>
        <p className="text-gray-700 mb-6">
          We are happy to answer any of your questions. Get in touch with us.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-400 transition">
            Contact Us
          </button>
          <button className="bg-white text-green-500 border border-green-500 px-6 py-3 rounded-lg hover:bg-green-100 transition">
            Online Support
          </button>
        </div>
      </div>
    </section>
  );
}
