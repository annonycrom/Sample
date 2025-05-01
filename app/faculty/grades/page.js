import Image from "next/image";

export default function Section () {
  return (
    <div className="bg-white m-0 min-h-screen">
           <div className="flex flex-row items-start">
                <div className="flex flex-col items-center bg-blue-600 p-5 shadow-md w-80 h-70 ">
                    <Image 
                        src="/sample.jpg" 
                        alt="Logo" 
                        width={100} 
                        height={200}
                        className="rounded-full w-50 h-50 object-cover mb-4"
                    />
                    <h5 className="text-xl font-bold text-black mt-2 m-0">Jhon Doe</h5>
                </div>
                <header className="flex-1 flex items-center justify-center">
                    <h1 className="bg-yellow-500 w-5/5 text-center text-4xl font-bold text-black p-10.5 py-20">Faculty Grades</h1>
                </header>
            </div>
    <main className="content flex flex-row">
    <nav className="flex flex-col gap-11 bg-yellow-600  shadow-md max-w-max text-center">
                <a href="/faculty/dashboard" className="text-lg px-29 py-10" target="_self">Dashboard</a>
                <a href="/faculty/section" className="text-lg  px-29 py-10" target="_self">Section</a>
                <a href="/faculty/task" className="text-lg px-29 py-10" target="_self">Task</a>
                <a href="/faculty/schedule" className="text-lg px-29 py-10" target="_self">Schedule</a>
                <a href="/faculty/grades" className="text-lg font-bold bg-yellow-400 px-29 py-10" target="_self">Grades</a>
            </nav>
            <div className="flex flex-col flex-1 gap-6 p-2">
                <section className="p-1 max-w-screen bg-grey shadow border-dotted border-2 border-yellow-400 rounded-lg overflow-scroll overflow-x-auto">
                    <div className="h-80">
                        <h1 className="text-black bg-grey text-2xl font-bold bg-gray-500 rounded-t-sm p-1 static">Notification</h1>
                    </div>
                </section>
                <section className="content flex flex-row h-80 gap-1">
                    <div className="flex flex-col flex-1 gap-6 bg-grey shadow border-dotted border-2 border-yellow-400 rounded-lg h-auto p-1">
                        <h1 className="text-black bg-grey text-2xl font-bold bg-gray-500 rounded-t-sm p-1">
                            Upcoming Schedules
                        </h1>
                    </div>
                    <div className="flex flex-col flex-1 gap-6 bg-grey  shadow border-dotted border-2 border-yellow-400 rounded-lg p-1">
                        <h1 className="text-black bg-grey text-2xl font-bold bg-gray-500 rounded-t-sm p-1">
                            Upcoming Tasks
                        </h1>
                    </div>
                </section>
            </div>
      </main>
      
    </div>
  );
}
