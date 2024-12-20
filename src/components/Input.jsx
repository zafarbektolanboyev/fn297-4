import React, { useState } from "react";

function Input({ onSubmit }) {
  const [taskInput, setTaskInput] = useState("");

  function handleSubmite() {
    if (!taskInput.trim()) return;
    onSubmit(taskInput);
    setTaskInput("");
  }

  return (
    <div>
      <div className="flex">
        <input
          type="text"
          className="w-full p-[15px] rounded-md"
          placeholder="Enter todo"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button
          className="p-[15px] bg-blue-500 rounded-md text-white btn"
          onClick={handleSubmite}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;
