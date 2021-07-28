import React from "react";
import { STaskDescription, STaskItem } from "./STaskItem.styled";

const TaskItem = ({ description, onClick }) => {
  return (
    <STaskItem>
      <STaskDescription onClick={onClick}>{description}</STaskDescription>
    </STaskItem>
  );
};
TaskItem.defaultProps = {
  // TASK BREF DESCRIPTION
  description: "",

  // EVENT HANDLER ONCLICK ON THE TEXT
  onClick: () => {},
};
export default TaskItem;
