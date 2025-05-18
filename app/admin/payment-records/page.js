"use client";
import { useState } from "react";

export default function PaymentRecords() {
  const [showMenu, setShowMenu] = useState(false);

  const payments = [
    { id: 'PAY102', student: 'John Doe', section: 'BSIT-1A', amount: '₱2,500', date: '2024-01-01', status: 'Paid' },
    { id: 'PAY103', student: 'Jane Doe', section: 'BSIT-1B', amount: '₱2,500', date: '2024-01-01', status: 'Pending' },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="bg-yellow-500 text-center text-4xl font-bold text-black py-6 relative">
        PAYMENT RECORDS
        <div className="absolute top-4 right-6">
          <button onClick={() => setShowMenu(!showMenu)} className="text-black">
            ☰
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow z-10">
              <ul>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Home</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a></li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-row">
        <aside className="bg-blue-600 w-64 p-5 text-white">
          <h3 className="font-bold mb-4">Welcome, ADMIN</h3>
          <nav className="flex flex-col gap-3">
            <a href="/admin/dashboard" className="hover:underline">Dashboard</a>
            <a href="/admin/courses" className="hover:underline">Courses</a>
            <a href="/admin/instructors" className="hover:underline">Instructors</a>
            <a href="/admin/student-records" className="hover:underline">Student Records</a>
            <a href="/admin/fees" className="hover:underline font-bold underline">Fees</a>
            <a href="/admin/announcements" className="hover:underline">Announcements</a>
          </nav>
        </aside>

        <main className="flex-1 p-6 space-y-8">
          <div className="grid grid-cols-3 gap-4 text-white">
            <div className="bg-gray-800 p-4 rounded text-center">
              <h2>Payment Received</h2>
              <p className="text-2xl font-bold">₱50,000</p>
            </div>
            <div className="bg-yellow-500 p-4 rounded text-center">
              <h2>Pending Payment</h2>
              <p className="text-2xl font-bold">₱50,000</p>
            </div>
            <div className="bg-red-500 p-4 rounded text-center">
              <h2>Overdue Payment</h2>
              <p className="text-2xl font-bold">₱50,000</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Add New Payment Record</h3>
            <form className="grid grid-cols-4 gap-4">
              <input type="text" placeholder="Student name" className="p-2 border border-gray-300 rounded" />
              <input type="date" className="p-2 border border-gray-300 rounded" />
              <input type="number" placeholder="Amount" className="p-2 border border-gray-300 rounded" />
              <select className="p-2 border border-gray-300 rounded">
                <option>Status</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Overdue</option>
              </select>
              <button type="submit" className="col-span-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Add Record
              </button>
            </form>
          </div>

          <div className="bg-white border border-gray-300 rounded shadow overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-yellow-400">
                <tr>
                  <th className="p-3">Payment ID</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Section</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3">{p.id}</td>
                    <td className="p-3">{p.student}</td>
                    <td className="p-3">{p.section}</td>
                    <td className="p-3">{p.amount}</td>
                    <td className="p-3">{p.date}</td>
                    <td className="p-3">{p.status}</td>
                    <td className="p-3 space-x-2">
                      <button className="text-blue-600 hover:underline">Edit</button>
                      <button className="text-red-600 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
