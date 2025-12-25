import React from 'react'

function ValuesSection() {
  return (
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
  )
}

export default ValuesSection