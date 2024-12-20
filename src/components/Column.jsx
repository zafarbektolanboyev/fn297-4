import React from "react";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Task from "./Task";

function Column({ tasks }) {
  return (
    <div className="mt-5">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id}>
            {task.title}
          </Task>
        ))}
      </SortableContext>
    </div>
  );
}

export default Column;
