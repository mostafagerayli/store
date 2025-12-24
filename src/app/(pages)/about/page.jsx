"use client";

import Header from "@/app/layout/Header";
import Image from "next/image";


const teamMembers = [
  { id: 1, name: "Reza Ahmadi", role: "CEO", image: "/images/images1.jpg" },
  { id: 2, name: "Maryam Alami", role: "Lead Designer", image: "/images/images1.jpg" },
  { id: 3, name: "Ali Rezaei", role: "Plant Specialist", image: "/images/images1.jpg" },
  { id: 4, name: "Sara Ahmadi", role: "Sales Manager", image: "/images/images1.jpg" },
];

export default function AboutPage() {
  return (
    <>

<Header/>
    <div className=" text-gray-900">
      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16 grid gap-8 md:grid-cols-2 items-center">
        <div className="grid grid-cols-2 gap-4">
          <Image src="/images/images2.jpg" alt="Terrarium 1" width={300} height={300} className="rounded-xl object-cover" />
          <Image src="/images/images1.jpg" alt="Terrarium 2" width={300} height={300} className="rounded-xl object-cover" />
          <Image src="/images/images3.jpg" alt="Terrarium 3" width={300} height={300} className="rounded-xl object-cover col-span-2" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-green-600 font-bold text-sm uppercase">About Us</h2>
          <h1 className="text-2xl sm:text-3xl font-bold">The Story of Terrarium Shop</h1>
          <p className="text-gray-700 leading-relaxed">
            Since 2019, we started as a small home-based store and through persistent effort and love for nature, we created a unique experience in the world of plants...
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-2">Our Values</h2>
          <p className="text-gray-700 mb-8">What matters most in our choices?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-green-500 text-3xl mb-3">🌱</div>
              <h3 className="font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">
                Using recycled and sustainable materials in our packaging.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-green-500 text-3xl mb-3">🛠️</div>
              <h3 className="font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">
                Free care consultation and expert guidance for our customers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-green-500 text-3xl mb-3">✔️</div>
              <h3 className="font-bold mb-2">Plant Health Guarantee</h3>
              <p className="text-gray-600 text-sm">
                7-day money-back guarantee and high-quality products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-xl font-bold mb-8 text-center">Our Creative Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-xl object-cover mb-4"
              />
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / Contact Section */}
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
    </div>
    </>
  );
}
