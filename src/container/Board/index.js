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
    let newCols = [
      ...columns,
      {
        id: uniqID(),
        order: columns.length + 1,
        title,
        tasks: [],
      },
    ];
    seColumns(newCols);

    // SAVE ADD NEW COLUMNS TO LOCAL STORAGE
    saveToStorage(newCols);
  };

  // Add task to the specific column
  /**
   *
   * @param {string} desc  task description
   * @param {string} columnId columnId
   * @param {sting} columnTitle columnTitle
   * @returns
   */
  const handleAddTask = (desc, columnId, columnTitle) => {
    let newTask = {
      id: uniqID(),
      columnTitle,
      desc,
    };

    let newColumns = [...columns].map((col) => {
      if (col.id === columnId) {
        col.tasks.push(newTask);
      }
      return col;
    });
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
    let newColumns = [...columns].map((col) => {
      if (col.title === draggedTask.columnTitle) {
        col.tasks = col.tasks.filter((task) => task.id !== draggedTask.id);
      }

      if (col.title === title) {
        col.tasks.push({ ...draggedTask, columnTitle: title });
      }
      return col;
    });
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
        {columns.map(({ id, title, tasks }) => (
          <Card
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop(title)}
            key={id}
            columnId={id}
            title={title}
            tasks={tasks}
            handleAddTask={handleAddTask}
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
