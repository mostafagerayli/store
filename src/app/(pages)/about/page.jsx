import ClientLayout from "@/app/layout/ClientLayout";

function About() {
  return (
    <ClientLayout>
 <div className="min-h-screen text-white px-4 py-12">
      <div className="w-full bg-[#0b1d07] rounded-xl shadow-lg p-6 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          About Us
        </h1>

        <p className="text-sm sm:text-base mb-4 leading-relaxed text-gray-200">
          Welcome to our platform! We are dedicated to providing the best
          services and experiences to our users. Our team works tirelessly
          to ensure quality, reliability, and innovation in everything we do.
        </p>

        <p className="text-sm sm:text-base mb-4 leading-relaxed text-gray-200">
          Our mission is to empower our users with tools and information that
          help them achieve their goals efficiently. We value transparency,
          collaboration, and continuous improvement in all aspects of our work.
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-gray-200">
          Thank you for being part of our journey. We look forward to growing
          together and delivering exceptional experiences.
        </p>
      </div>
    </div>
    </ClientLayout>
  );
}

export default About;
