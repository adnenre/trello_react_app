import React, { useState } from "react";
import PropTypes from "prop-types";
import SBoard from "./Board.styled";

import { uniqID, saveToStorage } from "../../utility";

import Card from "../Card";
import EditPopup from "../../components/EditPopUp";

const Board = ({ cols }) => {
  // COLUMN STATE
  const [columns, seColumns] = useState(cols);

  // DRAGGED TASK STATE
  const [draggedTask, setDraggedTask] = useState(null);

  /**
   * ADD COLUMN TITLE HANDLER
   * @param {string} title
   */
  const handleAddColumn = (title) => {
    let newCols = {
      ...columns,
      [title]: {
        id: uniqID(),

        title,
        tasks: [],
      },
    };
    seColumns(newCols);

    // SAVE ADD NEW COLUMNS TO LOCAL STORAGE
    saveToStorage(newCols);
  };

  // Add task to the specific column
  /**
   *
   * @param {string} title current column title
  
   * @param {sting} desc description
   * @returns
   */
  const handleAddTask = (title) => (desc) => {
    let newTask = {
      id: uniqID(),
      columnTitle: title,
      desc,
    };
    let newColumns = { ...columns };
    newColumns[title].tasks.push(newTask);
    seColumns(newColumns);
    saveToStorage(newColumns);
  };
  // onDragover
  const onDragOver = (e) => e.preventDefault();

  /**
   *
   * @param {string} title
   * @returns
   */
  const onDrop = (title) => (e) => {
    let newColumns = { ...columns };

    let sourceTitle = draggedTask.columnTitle;
    if (title === draggedTask.columnTitle) {
      return null;
    } else {
      newColumns[sourceTitle].tasks = newColumns[sourceTitle].tasks.filter(
        ({ id }) => id !== draggedTask.id
      );

      newColumns[title].tasks.push({
        ...draggedTask,
        columnTitle: title,
      });
    }

    // CLEAR ADD TASK
    setDraggedTask(null);

    // UPDATE COLUMN
    seColumns(newColumns);

    // SAVE TO LOCAL STORAGE AFTER DRAGGING
    saveToStorage(newColumns);
  };

  /**
   * DRAGSTART EVENT HANDLER
   * @param {object} task
   * @returns
   */
  const onDragStart = (task) => (e) => {
    //initialize dragged task
    setDraggedTask(task);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>navbar</div>
      <SBoard>
        {Object.entries(columns).map(([key, value]) => (
          <Card
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop(key)}
            key={key}
            columnId={value.id}
            title={key}
            tasks={value.tasks}
            handleAddTask={handleAddTask(key)}
          />
        ))}
        <EditPopup
          primaryPopup
          buttonTitle={"+ Add Column"}
          textareaPlaceHolder={"Add Column Title ..."}
          callback={handleAddColumn}
        />
      </SBoard>
    </div>
  );
};

Board.propTypes = {
  col: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          columnTitle: PropTypes.string.isRequired,
          desc: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};
Board.defaultProps = {
  cols: [],
};
export default Board;
