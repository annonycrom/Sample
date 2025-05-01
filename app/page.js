"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const defaultAccounts = {
  faculty: { email: "faculty@example.com", password: "faculty123" },
  admin: { email: "admin@example.com", password: "admin123" },
  student: { email: "student@example.com", password: "student123" },
};

const roleRedirects = {
  faculty: "/faculty/dashboard",
  admin: "/admin/dashboard",
  student: "/students/dashboard",
};

export default function Home() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const selectRole = (role) => {
    setSelectedRole(role);
    setEmail(defaultAccounts[role].email);
    setPassword(defaultAccounts[role].password);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Please select a role first.");
      return;
    }
    if (isSignUp) {
      alert(`Signing up as ${selectedRole} with Email: ${email} and Password: ${password}`);
    } else {
      // Simulate sign in verification by checking against default accounts
      const account = defaultAccounts[selectedRole];
      if (email === account.email && password === account.password) {
        router.push(roleRedirects[selectedRole]);
      } else {
        alert("Invalid credentials for the selected role.");
      }
    }
  };

  return (
<div
  className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
  style={{
    background: "linear-gradient(135deg,rgb(248, 223, 0), #27548A,rgb(23, 51, 145),rgba(139, 125, 102, 0.81))",
  }}
>
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-center w-full max-w-[1200px] min-h-[80vh]">
        {!selectedRole ? (
          <section className="w-full max-w-md bg-white p-10 rounded-lg shadow-md flex flex-col gap-6 items-center">
            <Image
              src="/neustlogo.png" 
              alt="Logo" 
              width={100} 
              height={200}
              className="rounded-full w-50 h-50 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-4 text-[#183B4E]">Select your destination</h2>
            <div className="flex gap-4">
              <button
                onClick={() => selectRole("faculty")}
                className="px-6 py-3 bg-[#27548A] text-white rounded-md hover:bg-[#183B4E] transition"
              >
                Faculty
              </button>
              <button
                onClick={() => selectRole("admin")}
                className="px-6 py-3 bg-[#DDA853] text-white rounded-md hover:bg-[#B8862E] transition"
              >
                Admin
              </button>
              <button
                onClick={() => selectRole("student")}
                className="px-6 py-3 bg-[#183B4E] text-white rounded-md hover:bg-[#122933] transition"
              >
                Student
              </button>
            </div>
          </section>
        ) : (
          <section className="w-full max-w-md bg-white p-10 rounded-lg shadow-md flex flex-col items-center">
            <Image
              src="/neustlogo.png" 
              alt="Logo" 
              width={100} 
              height={200}
              className="rounded-full w-50 h-50 object-cover mb-4"
            />
            <div className="flex justify-center mb-6 w-full">
            <button
              onClick={toggleForm}
              className="px-4 py-2 font-semibold rounded-l-md border border-[#DDA853] bg-[#F5EEDC] text-[#183B4E] hover:bg-[#DDA853] hover:text-white focus:outline-none transition"
            >
              Sign In
            </button>
            <button
              onClick={toggleForm}
              className="px-4 py-2 font-semibold rounded-r-md border border-[#DDA853] bg-[#F5EEDC] text-[#183B4E] hover:bg-[#DDA853] hover:text-white focus:outline-none transition"
            >
              Sign Up
            </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              <label className="flex flex-col text-lg text-black font-medium">
                Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 p-3 border border-[#DDA853] rounded-md focus:outline-none focus:ring-2 focus:ring-[#27548A]"
                placeholder="you@example.com"
              />
              </label>
              <label className="flex flex-col text-black text-lg font-medium relative">
                Password
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-2 p-3 w-full border border-[#DDA853] rounded-md focus:outline-none focus:ring-2 focus:ring-[#27548A]"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#27548A] hover:text-[#DDA853] focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7c1.042 0 2.042.2 2.958.575M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 2l20 20" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </label>
              <button
                type="submit"
                className="bg-[#27548A] text-[#F5EEDC] py-3 rounded-md font-semibold hover:bg-[#DDA853] transition"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="font-bold mt-4 mx-auto w-12 h-12 flex items-center justify-center rounded-full border border-[#DDA853] bg-[#F5EEDC] text-[#183B4E] hover:bg-[#DDA853] hover:text-white focus:outline-none transition"
                aria-label="Return"
              >
                ←
              </button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}
