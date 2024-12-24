import React, { useState } from "react";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, TouchSensor, TraversalOrder, useSensor } from "@dnd-kit/core";
import Column from "../components/Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useSensors } from "@dnd-kit/core";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const addTask = (title) => {
    setTasks((tasks) => [...tasks, {id: tasks.length + 1, title}])
  }
  const navigate = useNavigate()
  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id)

  const handleDragEnd = (event) => {
    const {active, over} = event;
    if(active.id === over.id) return;
    setTasks(tasks => {
      const originalPos = getTaskPos(active.id)
      const newPos = getTaskPos(over.id)
      return arrayMove(tasks, originalPos, newPos)
    }) 
  };
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  function handleClick(){
    navigate('/shoplist')
  }

  return (
    <div className="flex flex-col">
      <div className="border mx-auto p-[20px] w-[450px] rounded-md mt-5">
        <div>
          <h1 className="text-2xl text-center text-white">Todo List </h1>
         <Input onSubmit={addTask}></Input>
        </div>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <Column tasks={tasks} />
        </DndContext>
      </div>
      <button className="mt-[50px] w-[350px] mx-auto p-[15px] rounded-md text-white bg-blue-500" onClick={handleClick}>Shoping List</button>
    </div>
  );
}

export default TodoList;
