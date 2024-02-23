import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import styles from './styles/DragDrop.module.scss';

const DragDrop = () => {
  const initialTasks = [
    { id: 'todo0', text: 'スクワット' },
    { id: 'todo1', text: 'プッシュアップ' },
    { id: 'todo2', text: 'シットアップ' },
    { id: 'todo3', text: 'バックエクステンション' },
  ];

  const fixedItems = [
    { id: 'item0', text: 'スクワット' },
    { id: 'item1', text: 'プッシュアップ' },
    { id: 'item2', text: 'シットアップ' },
    { id: 'item3', text: 'バックエクステンション' },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  useLayoutEffect(() => {
    const setDraggableHeight = () => {
      const draggables = document.querySelectorAll('.todo');
      draggables.forEach((draggable) => {
        if (draggable instanceof HTMLElement) {
          draggable.style.height = `${draggable.offsetHeight}px`;
        }
      });
    };
    setDraggableHeight();
  }, [tasks]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === 'items' && destination.droppableId === 'tasks') {
      const task = initialTasks[source.index];
      setTasks((prevTasks) => {
        const newTasks = [...prevTasks];
        newTasks.splice(destination.index, 0, task);
        return newTasks;
      });
    }

    if (source.droppableId === 'tasks' && destination.droppableId === 'tasks') {
      const draggedTask = tasks[source.index];
      const newTasks = [...tasks];
      newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, draggedTask);
      setTasks(newTasks);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles['dragdrop-wrapper']}>
        <Droppable droppableId='tasks'>
          {(provided) => (
            <div
              className={styles['todoList']}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      className={styles['todo']}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {task.text}
                      <button
                        className={styles['deleteButton']}
                        onClick={() => {
                          const newTasks = [...tasks];
                          newTasks.splice(index, 1);
                          setTasks(newTasks);
                        }}
                      >
                        X
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId='items'>
          {(provided) => (
            <div
              className={styles['itemList']}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {fixedItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      className={styles['item']}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default DragDrop;
