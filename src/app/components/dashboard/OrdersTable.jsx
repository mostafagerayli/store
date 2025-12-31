
export default function OrdersTable({ orders }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Order ID</th>
            <th className="px-4 py-2 border-b">Customer</th>
            <th className="px-4 py-2 border-b">Product</th>
            <th className="px-4 py-2 border-b">Amount</th>
            <th className="px-4 py-2 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{order.id}</td>
              <td className="px-4 py-2 border-b">{order.customer}</td>
              <td className="px-4 py-2 border-b">{order.product}</td>
              <td className="px-4 py-2 border-b">{order.amount}</td>
              <td className="px-4 py-2 border-b">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
