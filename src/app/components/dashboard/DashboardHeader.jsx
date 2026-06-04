function DashboardHeader() {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6">Terrarium Dashboard 🌿</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Kpi title="Total Sales" value="$12,500" />
        <Kpi title="Orders" value="86" />
        <Kpi title="Daily Average" value="$1,800" />
        <Kpi title="Growth" value="+18%" positive />
      </div>
    </div>
  );
}

function Kpi({ title, value, positive }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
      <p className="text-xs text-gray-500 mb-1">{title}</p>
      <p className={`text-lg font-bold ${positive ? "text-green-600" : ""}`}>
        {value}
      </p>
    </div>
  );
}
export default DashboardHeader;
