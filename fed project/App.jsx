// App.jsx
import React, { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState({ name: "Rahim", role: "student" });
  const [stats, setStats] = useState({ attendance: 0, cgpa: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching analytics data
    setTimeout(() => {
      setStats({ attendance: 91, cgpa: 8.4 });
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-200 to-blue-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-96 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-3">
          Learnatics React Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome, <strong>{user.name}</strong> ({user.role})
        </p>

        {loading ? (
          <p className="text-gray-500">Loading performance data...</p>
        ) : (
          <div>
            <div className="mb-4">
              <p className="text-lg font-semibold text-blue-800">
                Attendance: {stats.attendance}%
              </p>
              <p className="text-lg font-semibold text-green-700">
                CGPA: {stats.cgpa}
              </p>
            </div>

            <button
              onClick={() => alert("Generating report (demo mode)...")}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              View Full Report
            </button>
          </div>
        )}
      </div>
      <footer className="mt-10 text-gray-500 text-sm">
        © 2025 Learnatics | React Dashboard Extension
      </footer>
    </div>
  );
}
