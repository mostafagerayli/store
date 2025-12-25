import Image from "next/image"
const teamMembers = [
  { id: 1, name: "Reza Ahmadi", role: "CEO", image: "/images/images1.jpg" },
  { id: 2, name: "Maryam Alami", role: "Lead Designer", image: "/images/images1.jpg" },
  { id: 3, name: "Ali Rezaei", role: "Plant Specialist", image: "/images/images1.jpg" },
  { id: 4, name: "Sara Ahmadi", role: "Sales Manager", image: "/images/images1.jpg" },
];
function TeamSection() {
  return (
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
  )
}

export default TeamSection