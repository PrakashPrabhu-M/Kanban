import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import CardItem from "../CardItem/CardItem";

import "./Column.css";

const Column = (props) => {
  const [characters, updateCharacters] = useState([]);
  useEffect(() => {
    // console.log(props.data);
    updateCharacters(props.data);
  }, [props.data]);
  // console.log(characters)
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    
      const items = Array.from(characters);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      updateCharacters(items);
    
  }
  return (
    <div className="column">
      <h3 className="column-heading">
        {props.title} - {props.qty}
      </h3>
      <div className="draggable-div">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="lists characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map((item, index) => {
                  return (
                    <Draggable
                      key={item.email}
                      draggableId={item.email}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CardItem
                            name={item.name.first + " " + item.name.last}
                            phone={item.phone}
                          />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Column;
