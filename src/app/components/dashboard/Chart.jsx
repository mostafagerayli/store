"use client";

import { useState } from "react";
import data  from '../../data/db.json'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const customXTicks = ["10", "20", "30", "40", "50"];

function Chart() {
  const [mode, setMode] = useState("weekly");
  const d = mode === "weekly" ? data.weeklyData : data.monthlyData;
  return (
    <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl p-6 mb-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Sales Trend</h2>
          <p className="text-sm text-gray-500">
            {mode === "weekly" ? "Last 7 days" : "Last 4 months"}
          </p>
        </div>

        <div className="flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setMode("weekly")}
            className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
              mode === "weekly"
                ? "bg-white shadow font-medium"
                : "text-gray-500"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setMode("monthly")}
            className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
              mode === "monthly"
                ? "bg-white shadow font-medium"
                : "text-gray-500"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={d}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="4 4" vertical={false} />
            <XAxis dataKey="label" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                borderRadius: "14px",
                border: "none",
                boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 2, fill: "white" }}
              activeDot={{ r: 7 }}
              fill="url(#lineGradient)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
