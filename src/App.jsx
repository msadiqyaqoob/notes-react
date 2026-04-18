import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !details) return;

    settask([...task, { title, details }]);

    settitle("");
    setdetails("");
  };

  // ✅ DELETE FUNCTION
  const handleDelete = (index) => {
    const copytask = [...task]
    copytask.splice(index,1)
    settask(copytask)
  };

  return (
    <div className="min-h-screen lg:flex bg-black text-white">
      {/* FORM */}
      <form onSubmit={handleSubmit} className="lg:w-1/2 p-10">
        <div className="flex w-full flex-col gap-4">
          <input
            type="text"
            placeholder="Enter task heading"
            className="border-2 rounded px-5 py-2 text-white"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />

          <textarea
            placeholder="Enter Details"
            className="border-2 h-20 rounded px-5 py-2 text-white"
            value={details}
            onChange={(e) => setdetails(e.target.value)}
          />

          <button className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600">
            Add Notes
          </button>
        </div>
      </form>

      {/* NOTES */}
      <div className="lg:w-1/2 flex flex-col h-screen p-5">
        <h1 className="text-2xl font-bold mb-4">Notes</h1>

        <div className="flex-1 flex flex-wrap gap-5 overflow-auto">
          {task.map((elem, idx) => (
            <div key={idx} className="relative w-24 h-52">
              <img
                className="w-full h-full object-cover"
                src="https://png.pngtree.com/png-vector/20250416/ourmid/pngtree-a-bright-yellow-notepad-standing-upright-symbolizing-ideas-and-note-taking-png-image_16010247.png"
                alt=""
              />

              {/* ❌ DELETE BUTTON (TOP RIGHT) */}
              <button
                onClick={() => handleDelete(idx)}
                className="absolute top-9 right-1 z-10 bg-black/50 text-white w-5 h-5 flex items-center justify-center rounded-full hover:bg-red-500"
              >
                <X size={12} />
              </button>

              {/* TEXT */}
              <div className="absolute inset-0 top-8 p-2 flex flex-col gap-1 overflow-hidden">
                <h3 className="font-bold text-black text-sm wrap-break-word">
                  {elem.title}
                </h3>

                <p className="text-xs text-black wrap-break-word">{elem.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
