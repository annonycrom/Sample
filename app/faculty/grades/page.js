"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Grades() {
  const router = useRouter();

  const [grades, setGrades] = useState([
    { id: "1", student: "Alice Johnson", subject: "Math", grade: "A" },
    { id: "2", student: "Bob Smith", subject: "Science", grade: "B+" },
    { id: "3", student: "Charlie Brown", subject: "English", grade: "A-" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ student: "", subject: "", grade: "" });
  const [editingId, setEditingId] = useState(null);

  const [showMenu, setShowMenu] = useState(false);


  const [confirmation, setConfirmation] = useState({
    show: false,
    message: "",
    onConfirm: null,
  });

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const openModal = (grade = null) => {
    if (grade) {
      setConfirmation({
        show: true,
        message: `Do you want to edit the grade for ${grade.student}?`,
        onConfirm: () => {
          setModalData(grade);
          setEditingId(grade.id);
          setShowModal(true);
        },
      });
    } else {
      setModalData({ student: "", subject: "", grade: "" });
      setEditingId(null);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData({ student: "", subject: "", grade: "" });
    setEditingId(null);
  };

  const handleSubmit = () => {
    if (editingId) {
      setGrades(grades.map((g) => (g.id === editingId ? { ...g, ...modalData } : g)));
    } else {
      setGrades([{ id: generateId(), ...modalData }, ...grades]);
    }
    closeModal();
  };

  const deleteGrade = (id, studentName) => {
    setConfirmation({
      show: true,
      message: `Are you sure you want to delete the grade for ${studentName}?`,
      onConfirm: () => {
        setGrades(grades.filter((g) => g.id !== id));
      },
    });
  };

  const handleSignOut = () => {
    console.log("Signing out...");
    setShowMenu(false);
    router.push("/");
  };

  const ConfirmationModal = () =>
    confirmation.show ? (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <p className="mb-6 text-lg font-medium text-gray-800">{confirmation.message}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setConfirmation({ show: false, message: "", onConfirm: null })}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                confirmation.onConfirm();
                setConfirmation({ show: false, message: "", onConfirm: null });
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800">{editingId ? "Edit Grade" : "Add Grade"}</h2>
            <input
              type="text"
              placeholder="Student Name"
              className="w-full mb-2 p-2 border rounded text-gray-800"
              value={modalData.student}
              onChange={(e) => setModalData({ ...modalData, student: e.target.value })}
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full mb-2 p-2 border rounded text-gray-800"
              value={modalData.subject}
              onChange={(e) => setModalData({ ...modalData, subject: e.target.value })}
            />
            <input
              type="text"
              placeholder="Grade"
              className="w-full mb-4 p-2 border rounded text-gray-800"
              value={modalData.grade}
              onChange={(e) => setModalData({ ...modalData, grade: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {editingId ? "Save" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmationModal />

      <div className="flex flex-row items-start relative">
        <div className="flex flex-col items-center bg-blue-600 p-5 shadow-md w-80 h-70">
          <Image
            src="/sample.jpg"
            alt="Logo"
            width={100}
            height={200}
            className="rounded-full w-50 h-50 object-cover mb-4"
          />
          <h5 className="text-xl font-bold text-white mt-2 m-0">Jhon Doe</h5>
        </div>

        <header className="flex-1 flex items-center justify-center relative">
          <h1 className="bg-yellow-500 w-full text-center text-4xl font-bold text-black p-10.5 py-20">
            Faculty Grades
          </h1>
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  <li>
                    <a href="/faculty/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
                  </li>
                  <li>
                    <a href="/faculty/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Out</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
      </div>

      <main className="content flex flex-row">
        <nav className="flex flex-col gap-11 bg-yellow-600 shadow-md max-w-max text-center">
          <a href="/faculty/dashboard" className="text-lg font-medium text-white px-29 py-10 hover:bg-yellow-500">Dashboard</a>
          <a href="/faculty/section" className="text-lg text-white px-29 py-10 hover:bg-yellow-500">Section</a>
          <a href="/faculty/task" className="text-lg text-white px-29 py-10 hover:bg-yellow-500">Task</a>
          <a href="/faculty/schedule" className="text-lg text-white px-29 py-10 hover:bg-yellow-500">Schedule</a>
          <a href="/faculty/grades" className="text-lg text-white px-29 py-10 bg-yellow-300">Grades</a>
        </nav>

        <div className="flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-black-600">Student Grades</h2>
            <button
              onClick={() => openModal()}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add Grade
            </button>
          </div>

          <div className="overflow-auto border-2 border-yellow-400 rounded-lg shadow">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left py-2 px-4 border-b text-black-700">Student</th>
                  <th className="text-left py-2 px-4 border-b text-black-700">Subject</th>
                  <th className="text-left py-2 px-4 border-b text-black-700">Grade</th>
                  <th className="text-left py-2 px-4 border-b text-black-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((g) => (
                  <tr key={g.id}>
                    <td className="py-2 px-4 border-b text-black font-semibold bg-yellow-100">{g.student}</td>
                    <td className="py-2 px-4 border-b text-green-700">{g.subject}</td>
                    <td className="py-2 px-4 border-b text-red-600">{g.grade}</td>
                    <td className="py-2 px-4 border-b">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openModal(g)}
                          className="bg-yellow-400 text-gray-800 px-3 py-1 rounded hover:bg-yellow-500"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteGrade(g.id, g.student)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {grades.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      No grades available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}