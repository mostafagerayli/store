

export default function OrdersDashboard() {
  const orders = [
    { label: "New Orders", value: 12, color: "bg-blue-100 text-blue-700" },
    { label: "In Production", value: 8, color: "bg-yellow-100 text-yellow-700" },
    { label: "Ready to Ship", value: 5, color: "bg-green-100 text-green-700" },
    { label: "Shipped", value: 20, color: "bg-emerald-100 text-emerald-700" },
    { label: "Cancelled / Returned", value: 2, color: "bg-red-100 text-red-700" },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl mb-8">
      <h2 className="text-xl font-semibold mb-6">📦 Orders Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {orders.map((item) => (
          <div
            key={item.label}
            className={`rounded-xl p-4 ${item.color} flex flex-col items-center justify-center`}
          >
            <span className="text-sm font-medium text-center">{item.label}</span>
            <span className="text-2xl font-bold mt-2">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between bg-gray-50 p-4 rounded-xl">
        <span className="text-sm text-gray-600">Average Preparation Time</span>
        <span className="text-lg font-semibold text-gray-900">2.4 days</span>
      </div>
    </div>
  );
}
