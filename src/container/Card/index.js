import React from "react";
import {
  SCardWrapper,
  SCard,
  SCardHeader,
  SCardBody,
  SCardFooter,
} from "./SCard.styled";
import EditableField from "../../components/EditableField";
import TaskList from "../../components/TaskList";
import EditPopup from "../../components/EditPopUp";

const Card = ({
  columnId,
  title,
  tasks,
  handleAddTask,
  onDragStart,
  ...props
}) => {
  /**
   * HANDLE ADD NEW TASK DESCRIPTION
   * @param {string} description
   * @returns
   */
  const handleTaskDesc = (desc) => handleAddTask(desc);

  return (
    <SCardWrapper {...props}>
      <SCard>
        <SCardHeader>
          <EditableField content={title} />
        </SCardHeader>
        <SCardBody>
          <TaskList tasks={tasks} onDragStart={onDragStart} />
        </SCardBody>
        <SCardFooter>
          <EditPopup callback={handleTaskDesc} />
        </SCardFooter>
      </SCard>
    </SCardWrapper>
  );
};

export default Card;
