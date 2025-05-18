"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  const [enableNotifications, setEnableNotifications] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    // Add save logic here
    alert("Settings saved!");
  };

  const handleCancel = () => {
    setEnableNotifications(true);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  const handleSignOut = () => {
    // Implement sign out logic here (e.g., clear auth tokens, redirect to login)
    console.log("Signing out...");
    setShowMenu(false);
    router.push("/");
  };

  return (
    <div className="bg-white m-0 min-h-screen">
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
            Faculty Settings
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
            className="text-lg font-medium bg-yellow-400 px-29 py-10 hover:bg-yellow-500"
            target="_self"
          >
            Dashboard
          </a>
          <a
            href="/faculty/section"
            className="text-lg px-29 py-10 hover:bg-yellow-500"
            target="_self"
          >
            Section
          </a>
          <a
            href="/faculty/task"
            className="text-lg px-29 py-10 hover:bg-yellow-500"
            target="_self"
          >
            Task
          </a>
          <a
            href="/faculty/schedule"
            className="text-lg px-29 py-10 hover:bg-yellow-500"
            target="_self"
          >
            Schedule
          </a>
          <a
            href="/faculty/grades"
            className="text-lg px-29 py-10 hover:bg-yellow-500"
            target="_self"
          >
            Grades
          </a>
        </nav>
        <div className="flex flex-col flex-1 gap-6 p-6">
          <form
            onSubmit={handleSave}
            className="border-2 border-dotted border-yellow-400 rounded-lg p-6 max-w-4xl bg-white"
          >
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3 text-black">Notification Preferences</h2>
              <label className="inline-flex items-center space-x-2 text-black">
                <input
                  type="checkbox"
                  checked={enableNotifications}
                  onChange={(e) => setEnableNotifications(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="font-bold">Enable Notifications</span>
              </label>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-bold mb-4 text-black">Account Settings</h2>
              <div className="mb-4">
                <label
                  htmlFor="currentPassword"
                  className="block font-semibold mb-1 text-black"
                >
                  Current Password
                </label>
                <input
                  id="currentPassword"
                  type={showPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full border border-gray-400 rounded px-3 py-2 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="newPassword" className="block font-semibold mb-1 text-black">
                  New Password
                </label>
                <input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full border border-gray-400 rounded px-3 py-2 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmNewPassword"
                  className="block font-semibold mb-1 text-black"
                >
                  Confirm New Password
                </label>
                <input
                  id="confirmNewPassword"
                  type={showPassword ? "text" : "password"}
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="w-full border border-gray-400 rounded px-3 py-2 text-black"
                  required
                />
              </div>
            </section>

            <div className="mb-4 flex items-center space-x-2">
              <input
                id="showPassword"
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <label htmlFor="showPassword" className="text-black font-semibold">
                Show Password
              </label>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-600 text-white font-semibold px-5 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
