"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Section() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    console.log("Signing out...");
    setShowMenu(false);
    router.push("/");
  };

  const handleSubmit = (subject, task) => {
    console.log(`Submitting ${task} for ${subject}`);
    // Add your submission logic here
  };

  return (
    <div className="bg-white m-0 min-h-screen">
      <div className="flex flex-row items-start">
        <div className="flex flex-col items-center bg-blue-600 p-5 shadow-md w-80 h-70">
          <Image
            src="/sample.jpg"
            alt="Logo"
            width={100}
            height={200}
            className="rounded-full w-50 h-50 object-cover mb-4"
          />
          <h5 className="text-xl font-bold text-black mt-2 m-0">Jhon Doe</h5>
        </div>
        <header className="flex-1 flex items-center justify-center relative">
          <h1 className="bg-yellow-500 w-5/5 text-center text-4xl font-bold text-black p-10.5 py-20">
            TASKS
          </h1>
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-black focus:outline-none cursor-pointer"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  <li>
                    <a
                      href="/faculty/profile"
                      className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faculty/settings"
                      className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
      </div>
      <main className="content flex flex-row">
        <nav className="flex flex-col gap-11 bg-yellow-600 shadow-md max-w-max text-center">
          <a
            href="/faculty/dashboard"
            className="text-lg px-29 py-10 hover:bg-yellow-500 hover:text-white"
            target="_self"
          >
            Dashboard
          </a>
          <a
            href="/faculty/section"
            className="text-lg px-29 py-10 hover:bg-yellow-500 hover:text-white"
            target="_self"
          >
            Section
          </a>
          <a
            href="/faculty/task"
            className="text-lg px-29 py-10 hover:bg-yellow-500 hover:text-white bg-yellow-400"
            target="_self"
          >
            Task
          </a>
          <a
            href="/faculty/schedule"
            className="text-lg px-29 py-10 hover:bg-yellow-500 hover:text-white"
            target="_self"
          >
            Schedule
          </a>
          <a
            href="/faculty/grades"
            className="text-lg px-29 py-10 hover:bg-yellow-500 hover:text-white"
            target="_self"
          >
            Grades
          </a>
        </nav>
        <div className="flex flex-col flex-1 gap-6 p-2">
          <section className="p-1 max-w-screen bg-grey shadow border-dotted border-2 border-yellow-400 rounded-lg overflow-scroll overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-black">Status</th>
                  <th className="border border-gray-300 px-4 py-2 text-black">Subject</th>
                  <th className="border border-gray-300 px-4 py-2 text-black">Task</th>
                  <th className="border border-gray-300 px-4 py-2 text-black">Due Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-black">Submit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-black">Pending</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">CC-102</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">Essay</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">2025-01-01</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input type="file" className="mb-2 text-black" />
                    <button
                      onClick={() => handleSubmit("CC-102", "Essay")}
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-black">Completed</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">CC-103</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">Quiz</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">2025-01-05</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input type="file" className="mb-2 text-black" />
                    <button
                      onClick={() => handleSubmit("CC-103", "Quiz")}
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-black">Pending</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">CC-104</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">Project</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">2025-01-10</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input type="file" className="mb-2 text-black" />
                    <button
                      onClick={() => handleSubmit("CC-104", "Project")}
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-black">Pending</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">CC-105</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">Assignment</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">2025-01-15</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input type="file" className="mb-2 text-black" />
                    <button
                      onClick={() => handleSubmit("CC-105", "Assignment")}
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-black">Completed</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">CC-106</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">Presentation</td>
                  <td className="border border-gray-300 px-4 py-2 text-black">2025-01-20</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input type="file" className="mb-2 text-black" />
                    <button
                      onClick={() => handleSubmit("CC-106", "Presentation")}
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
}