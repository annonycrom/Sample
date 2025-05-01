"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      text: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
    },
    { id: "2", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "3", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: "4", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { id: "5", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: "6", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: "7", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "8", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: "9", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { id: "10", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  ]);
  const [schedules, setSchedules] = useState([
    { id: "1", text: "Here you can manage your sections, tasks, and schedules." },
    { id: "2", text: "Here you can manage your sections, tasks, and schedules." },
  ]);
  const [tasks, setTasks] = useState([
    { id: "1", text: "Here you can manage your sections, tasks, and schedules." },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalText, setModalText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const openModal = (type, text = "", id = null) => {
    setModalType(type);
    setModalText(text);
    setEditingId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalText("");
    setEditingId(null);
  };

  const handleSubmit = () => {
    if (modalType === "notification") {
      if (editingId) {
        setNotifications(
          notifications.map((n) =>
            n.id === editingId ? { ...n, text: modalText } : n
          )
        );
      } else {
        setNotifications([{ id: generateId(), text: modalText }, ...notifications]);
      }
    } else if (modalType === "schedule") {
      if (editingId) {
        setSchedules(
          schedules.map((s) =>
            s.id === editingId ? { ...s, text: modalText } : s
          )
        );
      } else {
        setSchedules([{ id: generateId(), text: modalText }, ...schedules]);
      }
    } else if (modalType === "task") {
      if (editingId) {
        setTasks(tasks.map((t) => (t.id === editingId ? { ...t, text: modalText } : t)));
      } else {
        setTasks([{ id: generateId(), text: modalText }, ...tasks]);
      }
    }
    closeModal();
  };

  const deleteItem = (type, id) => {
    if (type === "notification") {
      setNotifications(notifications.filter((n) => n.id !== id));
    } else if (type === "schedule") {
      setSchedules(schedules.filter((s) => s.id !== id));
    } else if (type === "task") {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  const handleSignOut = () => {
    // Implement sign out logic here (e.g., clear auth tokens, redirect to login)
    console.log("Signing out...");
    setShowMenu(false);
    router.push("/");
  };

  return (
    <div className="bg-white m-0 min-h-screen">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingId ? `Edit ${modalType}` : `Add ${modalType}`}
            </h2>
            <textarea
              className="w-full p-2 border rounded mb-4"
              value={modalText}
              onChange={(e) => setModalText(e.target.value)}
              placeholder={`Enter ${modalType} text`}
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
      <div className="flex flex-row items-start relative">
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
            Faculty Dashboard
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
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                      onClick={() => setShowMenu(false)}
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faculty/settings"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                      onClick={() => setShowMenu(false)}
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
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
            className="text-lg font-medium bg-yellow-400 px-29 py-10"
            target="_self"
          >
            Dashboard
          </a>
          <a
            href="/faculty/section"
            className="text-lg px-29 py-10"
            target="_self"
          >
            Section
          </a>
          <a href="/faculty/task" className="text-lg px-29 py-10" target="_self">
            Task
          </a>
          <a
            href="/faculty/schedule"
            className="text-lg px-29 py-10"
            target="_self"
          >
            Schedule
          </a>
          <a
            href="/faculty/grades"
            className="text-lg px-29 py-10"
            target="_self"
          >
            Grades
          </a>
        </nav>
        <div className="flex flex-col flex-1 gap-6 p-2">
          <section className="p-1 max-w-screen bg-grey shadow border-dotted border-2 border-yellow-400 rounded-lg overflow-scroll overflow-x-auto">
            <div className="h-80 relative">
              <div className="flex justify-between items-center bg-gray-500 rounded-t-sm p-1 sticky top-0 z-10">
                <h1 className="text-black text-2xl font-bold">Notification</h1>
                <button
                  onClick={() => openModal("notification")}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                >
                  +
                </button>
              </div>
              <ul className="text-black bg-grey p-1 list-disc list-inside">
                {notifications.map((notification) => (
                  <li key={notification.id} className="bg-grey p-1 flex justify-between items-center">
                    <span>{notification.text}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal("notification", notification.text, notification.id)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded-full hover:bg-yellow-600 flex items-center justify-center"
                        aria-label="Edit notification"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-10-4l9-9 4 4-9 9H7v-4z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteItem("notification", notification.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 flex items-center justify-center"
                        aria-label="Delete notification"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4" />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="content flex flex-row h-80 gap-1">
            <div className="flex flex-col flex-1 gap-6 bg-grey shadow border-dotted border-2 border-yellow-400 rounded-lg h-auto p-1 relative">
              <div className="flex justify-between items-center bg-gray-500 rounded-t-sm p-1 sticky top-0 z-10">
                <h1 className="text-black text-2xl font-bold">Upcoming Schedules</h1>
                <button
                  onClick={() => openModal("schedule")}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                >
                  +
                </button>
              </div>
              {schedules.map((schedule) => (
                <div key={schedule.id} className="flex justify-between items-center">
                  <p className="text-black">{schedule.text}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal("schedule", schedule.text, schedule.id)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded-full hover:bg-yellow-600 flex items-center justify-center"
                      aria-label="Edit schedule"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-10-4l9-9 4 4-9 9H7v-4z" />
                      </svg>
                    </button>
                      <button
                        onClick={() => deleteItem("schedule", schedule.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 flex items-center justify-center"
                        aria-label="Delete schedule"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4" />
                        </svg>
                      </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col flex-1 gap-6 bg-grey shadow border-dotted border-2 border-yellow-400 rounded-lg p-1 relative">
              <div className="flex justify-between items-center bg-gray-500 rounded-t-sm p-1 sticky top-0 z-10">
                <h1 className="text-black text-2xl font-bold">Upcoming Tasks</h1>
                <button
                  onClick={() => openModal("task")}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  +
                </button>
              </div>
              {tasks.map((task) => (
                <div key={task.id} className="flex justify-between items-center">
                  <p className="text-black">{task.text}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal("task", task.text, task.id)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded-full hover:bg-yellow-600 flex items-center justify-center"
                      aria-label="Edit task"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-10-4l9-9 4 4-9 9H7v-4z" />
                      </svg>
                    </button>
                      <button
                        onClick={() => deleteItem("task", task.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 flex items-center justify-center"
                        aria-label="Delete task"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4" />
                        </svg>
                      </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}