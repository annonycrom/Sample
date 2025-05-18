"use client";

import React, { useState } from "react";

const Dashboard = () => {
  const [active, setActive] = useState("DASHBOARD");

  const navItems = [
    "DASHBOARD",
    "COURSES",
    "INSTRUCTORS",
    "STUDENT RECORDS",
    "FEES",
    "ANNOUNCEMENTS",
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 flex flex-col">
        <div className="flex flex-col items-center py-8 bg-blue-800 text-white">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="/logo.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="font-bold text-lg">Welcome,</h2>
          <p className="font-semibold">ADMIN</p>
        </div>

        <div className="flex-1 bg-yellow-300 text-black p-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full text-left px-4 py-2 rounded ${
                active === item
                  ? "bg-yellow-500 font-bold"
                  : "hover:bg-yellow-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-yellow-300 p-6 text-center text-2xl font-bold text-black">
          {active}
        </header>

        <main className="flex-1 p-6 overflow-auto">
          {active === "DASHBOARD" ? (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-4 mb-8 text-center">
                {[
                  { title: "Courses", value: 5 },
                  { title: "Instructors", value: 25 },
                  { title: "Students", value: 1250 },
                  { title: "Payment Received", value: 500 },
                ].map(({ title, value }) => (
                  <div
                    key={title}
                    className="bg-gray-400 shadow p-4 rounded-2xl"
                  >
                    <h2 className="font-bold text-black">{title}</h2>
                    <p className="text-xl mt-2 text-black">{value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white shadow rounded max-h-80 flex flex-col min-w-[600px]">
                  <div className="bg-yellow-300 p-3 font-bold text-black rounded-t-lg">
                    <span className="ml-4">PAYMENT RECORDS</span>
                  </div>
                  <div className="overflow-y-auto">
                    <table className="w-full text-left text-sm text-black">
                      <thead>
                        <tr className="bg-gray-400">
                          <th className="p-2">ID</th>
                          <th>Student name</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          "P001",
                          "P002",
                          "P003",
                          "P004",
                          "P005",
                          "P006",
                          "P007",
                        ].map((id) => (
                          <tr key={id}>
                            <td className="p-2 text-black">{id}</td>
                            <td>John Doe</td>
                            <td>₱1,200</td>
                            <td>Paid</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white shadow rounded max-h-80 flex flex-col min-w-[600px]">
                  <div className="bg-yellow-300 p-3 font-bold text-black rounded-t-lg">
                    <span className="ml-4">INSTRUCTORS</span>
                  </div>
                  <div className="overflow-y-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b bg-gray-400">
                          <th className="p-2">ID</th>
                          <th>Instructor name</th>
                          <th>Course</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["INT01", "Jane Doe", "BSIT", "On-duty"],
                          ["INT02", "Jane Doe", "BSIT", "On-duty"],
                          ["INT03", "Jane Doe", "BSIT", "On-duty"],
                          ["INT04", "Jane Doe", "BSIT", "On-duty"],
                          ["INT05", "Jane Doe", "BSIT", "On-duty"],
                          ["INT06", "Jane Doe", "BSIT", "On-duty"],
                          ["INT07", "Jane Doe", "BSIT", "On-duty"],
                          ["INT08", "Jane Doe", "BSIT", "On-duty"],
                        ].map(([id, name, course, status]) => (
                          <tr key={id} className="text-black">
                            <td className="p-2">{id}</td>
                            <td>{name}</td>
                            <td>{course}</td>
                            <td>{status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-black">This is the {active} page content.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
