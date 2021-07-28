import React, { useState, useRef } from "react";
import TaskItem from "../TaskItem";
import Label from "../Label";
import TextArea from "../TextArea";
// Hooks
import useOnClickOutside from "../../hooks/useClickOutside";

const EditableField = ({ content, type, ...props }) => {
  // ref
  const ref = useRef();

  // current value of the editable field (title of column / desc of task)
  const [value, setValue] = useState(content);

  // edite mode (enabled / disabled)
  const [editMode, setEditMode] = useState(false);

  // handle toggle edit mode
  const toggleEditeMode = () => {
    setEditMode(!editMode);
  };
  const handleChangeContent = (e) => setValue(e.target.value);

  useOnClickOutside(ref, () => setEditMode(false));
  return (
    <div ref={ref} {...props}>
      {editMode ? (
        <TextArea
          onChange={handleChangeContent}
          value={value}
          placeholder={"Add Column title ..."}
          title
        />
      ) : type === "list" ? (
        <TaskItem onClick={toggleEditeMode} description={value} />
      ) : (
        <Label onClick={toggleEditeMode} value={value} />
      )}
    </div>
  );
};

export default EditableField;
