import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import CardItem from "../CardItem/CardItem";

import "./Column.css";

const Column = (props) => {
  const [state, setState] = useState({
    tasks: {
      "task-1": { id: "task-1", content: props.data[0][0] },
      "task-2": { id: "task-2", content: props.data[0][1] },
      "task-3": { id: "task-3", content: props.data[0][2] },
      "task-4": { id: "task-4", content: props.data[0][3] },
      "task-5": { id: "task-5", content: props.data[0][4] },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "To do",
        tasksids: ["task-1", "task-2", "task-3", "task-4", "task-5"],
      },
    },
    columnOrder: ["column-1"],
  });

  useEffect(() => {
    setState({
      tasks: {
        "task-1": { id: "task-1", content: props.data[0][0] },
        "task-2": { id: "task-2", content: props.data[0][1] },
        "task-3": { id: "task-3", content: props.data[0][2] },
        "task-4": { id: "task-4", content: props.data[0][3] },
        "task-5": { id: "task-5", content: props.data[0][4] },
      },
      columns: {
        "column-1": {
          id: "column-1",
          title: "To do",
          tasksids: ["task-1", "task-2", "task-3", "task-4", "task-5"],
        },
      },
      columnOrder: ["column-1"],
    });
  }, [props.data]);

  // console.log(state);

  state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const tasks = column.tasksids.map((tasksid) => state.tasks[tasksid]);
    console.log(tasks[0].content)
    return tasks[0].content;
  });
  return 'hello'
};

export default Column;
