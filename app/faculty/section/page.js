"use client";
import Image from "next/image";
import {useState} from "react";
import { useRouter } from "next/navigation";

export default function SectionPage() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const handleSignOut = () => {
    
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
              <h5 className="text-xl mt-2 m-0 font-bold ">Jhon Doe </h5>
          </div>
          <header className="flex-1 flex items-center justify-center relative">
          <h1 className="bg-yellow-500 w-5/5 text-center text-4xl font-bold text-black p-10.5 py-20 space-y-4">
            Faculty Section
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
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 ">
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
            className="text-lg px-29 py-10 hover:bg-yellow-500"
            target="_self"
          >
            Dashboard
          </a>
          <a
            href="/faculty/section"
            className="text-lg px-29 py-10 font-bold bg-yellow-400 hover:bg-yellow-500"
            target="_self"
          >
            Section
          </a>
          <a href="/faculty/task" 
          className="text-lg px-29 py-10 hover:bg-yellow-500" 
          target="_self">
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
        <section className="content flex flex-row h-80 gap-1 w-full h-full ">
        <div className="flex flex-col flex-1 gap-6 p-2 items-center">
          <div className="flex flex-row gap-6 justify-center">
            <div className="p-1 max-w-screen bg-grey">
              <label className="block font-medium mb-1">Class Section</label>
              <select className="border border-gray-300 rounded px-4 py-2 w-48" >
                <option>BSIT - 1A</option>
                <option>BSIT - 1B</option>
                <option>BSIT - 2A</option>
                <option>BSIT - 2B</option>
                <option>BSIT - 3A</option>
                <option>BSIT - 4A</option>

                {}
              </select>   
            </div>
            <div>
              <label className="block font-medium mb-1 m-1">Subject</label>
              <select className="border border-gray-300 rounded px-4 py-2 w-48">
                <option>CC 105</option>
                {}
              </select>
            </div>
          </div>

          {}
          <div className="bg-grey p-1 relative flex flex-row gap-4 mt-4 w-full">
            <div className="flex flex-col flex-1 gap-6 bg-grey pl-5">
              <h2 className="bg-gray-500 text-black text-lg font-semibold p-2 m-2  rounded">TASKS</h2>
              <ul className="space-y-2 mt-2">
                {[...Array(5)].map((_, idx) => (
                  <li key={idx} className="bg-gray-100 p-3 m-5 rounded shadow-sm flex justify-between">Task {idx + 1}
                         <span className="flex gap-2">
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
</span>
                  </li>

                ))}
              </ul>
            </div>
            <div className="flex flex-col flex-1 gap-6 bg-grey">
              <h2 className="flex bg-gray-500 text-black text-lg font-semibold p-2 m-2 rounded">ACADEMIC EVENTS</h2>
              <ul className="space-y-2 mt-2">
                {[...Array(5)].map((_, idx) => (
                  <li key={idx} className="bg-gray-100 p-3 m-5 rounded shadow-sm flex justify-between">Event {idx + 1}
                        <span className="flex gap-2">
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
</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </section>
       

      </main>
    </div>
    
  );
}
