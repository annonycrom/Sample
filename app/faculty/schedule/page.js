"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Schedule() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState("");
  const [showEventModal, setShowEventModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get days in month and starting day
  const getCalendarData = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startingDay = new Date(currentYear, currentMonth, 1).getDay();
    return { daysInMonth, startingDay };
  };

  const { daysInMonth, startingDay } = getCalendarData();

  const [events, setEvents] = useState({
    "4-0-2025": "Faculty Meeting",
    "19-0-2025": "Student Presentations"
  });

  const handleDateClick = (day) => {
    setSelectedDate(day);
    const eventKey = `${day}-${currentMonth}-${currentYear}`;
    setNewEvent(events[eventKey] || "");
    setShowEventModal(true);
  };

  const handleAddEvent = () => {
    if (selectedDate && newEvent.trim()) {
      const eventKey = `${selectedDate}-${currentMonth}-${currentYear}`;
      setEvents(prev => ({
        ...prev,
        [eventKey]: newEvent.trim()
      }));
    }
    setShowEventModal(false);
  };

  const handleRemoveEvent = () => {
    if (selectedDate) {
      const eventKey = `${selectedDate}-${currentMonth}-${currentYear}`;
      const newEvents = {...events};
      delete newEvents[eventKey];
      setEvents(newEvents);
    }
    setShowEventModal(false);
  };

  const changeMonth = (increment) => {
    let newMonth = currentMonth + increment;
    let newYear = currentYear;
    
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  // Generate calendar cells
  const calendarDays = [];
  
  // Add empty cells for days before the 1st of the month
  for (let i = 0; i < startingDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>);
  }

  // Add actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const eventKey = `${day}-${currentMonth}-${currentYear}`;
    const hasEvent = events[eventKey];
    calendarDays.push(
      <div
        key={day}
        className={`h-24 border border-gray-300 p-2 relative cursor-pointer hover:bg-gray-50 ${
          hasEvent ? "bg-yellow-50" : ""
        }`}
        onClick={() => handleDateClick(day)}
      >
        <div className="font-semibold text-lg text-gray-800">{day}</div>
        {hasEvent && (
          <div className="text-xs mt-1 p-1 bg-yellow-100 rounded text-gray-700">
            {events[eventKey]}
          </div>
        )}
      </div>
    );
  }

  const handleSignOut = () => {
    console.log("Signing out...");
    setShowMenu(false);
    router.push("/");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-[90vw]">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
              {selectedDate} {months[currentMonth]} {currentYear}
            </h2>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-3 uppercase tracking-wider">
                Event Details
              </label>
              <textarea
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                placeholder="Enter event description (e.g. Faculty meeting at 2PM in Room 205)"
                className="w-full p-4 border-2 border-gray-200 rounded-lg 
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                          min-h-[100px] text-gray-800 text-base"
                rows={3}
              />
            </div>
            
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowEventModal(false)}
                className="px-5 py-2.5 text-gray-700 bg-gray-100 rounded-lg 
                         hover:bg-gray-200 transition font-medium"
              >
                Cancel
              </button>
              
              {events[`${selectedDate}-${currentMonth}-${currentYear}`] && (
                <button
                  onClick={handleRemoveEvent}
                  className="px-5 py-2.5 text-white bg-red-500 rounded-lg 
                           hover:bg-red-600 transition font-medium"
                >
                  Remove
                </button>
              )}
              
              <button
                onClick={handleAddEvent}
                className="px-5 py-2.5 text-white bg-blue-600 rounded-lg 
                         hover:bg-blue-700 transition font-medium shadow-md"
              >
                {events[`${selectedDate}-${currentMonth}-${currentYear}`] ? "Update Event" : "Add Event"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-row items-start relative">
        {/* Profile Sidebar */}
        <div className="flex flex-col items-center bg-blue-600 p-5 shadow-md w-80 h-70">
          <Image
            src="/sample.jpg"
            alt="Profile"
            width={100}
            height={200}
            className="rounded-full w-50 h-50 object-cover mb-4"
          />
          <h5 className="text-xl font-bold text-white mt-2 m-0">John Doe</h5>
        </div>

        {/* Main Header */}
        <header className="flex-1 flex items-center justify-center relative">
          <h1 className="bg-yellow-500 w-5/5 text-center text-4xl font-bold text-black p-10.5 py-20">
            Schedule
          </h1>
          
          {/* Profile Dropdown */}
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
        {/* Navigation Sidebar */}
        <nav className="flex flex-col gap-11 bg-yellow-600 shadow-md max-w-max text-center">
          <a
            href="/faculty/dashboard"
            className="text-lg px-29 py-10" 
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
            className="text-lg font-medium bg-yellow-400 px-29 py-10"
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

        {/* Calendar Content */}
        <div className="flex-1 p-8">
          {/* Calendar Header */}
          <div className="flex justify-between items-center bg-blue-500 text-white px-6 py-3 font-bold text-lg rounded-t">
            <button 
              onClick={() => changeMonth(-1)}
              className="p-1 hover:bg-blue-400 rounded"
            >
              &lt; Prev
            </button>
            <span>{months[currentMonth]} {currentYear}</span>
            <button 
              onClick={() => changeMonth(1)}
              className="p-1 hover:bg-blue-400 rounded"
            >
              Next &gt;
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 bg-white border border-yellow-400 p-4 shadow rounded-b">
            {/* Day names */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-bold py-2 text-gray-700">
                {day}
              </div>
            ))}
            
            {/* Calendar days */}
            {calendarDays}
          </div>
        </div>
      </main>
    </div>
  );
    }
