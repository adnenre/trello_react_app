import React from "react";
import EditableField from "../EditableField";
//import DraggableItems from "../DraggableItems";
const TaskLists = ({ tasks, onDragStart }) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} onDragStart={onDragStart(task)} draggable>
          <EditableField key={task.id} content={task.desc} type="list" />
        </div>
      ))}
    </>
  );
};

export default TaskLists;
