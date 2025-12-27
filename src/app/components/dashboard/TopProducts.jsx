// components/TopProducts.jsx
export default function TopProducts({ products }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 mt-10 mb-10">
      <h3 className="text-lg font-bold mb-4">Top Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id} className="flex justify-between py-2 border-b last:border-b-0">
            <span>{product.title}</span>
            <span className="font-semibold">{product.sales} sold</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
