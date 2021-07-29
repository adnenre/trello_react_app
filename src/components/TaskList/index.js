import React from "react";
import PropTypes from "prop-types";
import EditableField from "../EditableField";
//import DraggableItems from "../DraggableItems";
const TaskList = ({ tasks, onDragStart }) => {
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

// PROPTYPES
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

// DEFAULT PROPTYPES
TaskList.defaultProps = {
  tasks: [],
  onDragStart: () => {},
};

export default TaskList;
