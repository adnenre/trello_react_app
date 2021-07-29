import React from "react";
import PropTypes from "prop-types";
import { STaskDescription, STaskItem } from "./STaskItem.styled";

const TaskItem = ({ description, onClick, ...props }) => {
  return (
    <STaskItem>
      <STaskDescription onClick={onClick} {...props}>
        {description}
      </STaskDescription>
    </STaskItem>
  );
};

TaskItem.propTypes = {
  // task description
  description: PropTypes.string.isRequired,

  // onClick event Handler
  onClick: PropTypes.func,
};
TaskItem.defaultProps = {
  // TASK BREF DESCRIPTION
  description: "",

  // EVENT HANDLER ONCLICK ON THE TEXT
  onClick: () => {},
};
export default TaskItem;
