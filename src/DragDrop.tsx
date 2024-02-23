import React, { useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import styles from './styles/DragDrop.module.scss';

const DragDrop = () => {
  // ドラッグ＆ドロップするアイテムのリスト
  const initialTasks = [
    {
      id: 'todo0',
      text: 'スクワット',
    },
    {
      id: 'todo1',
      text: 'プッシュアップ',
    },
    {
      id: 'todo2',
      text: 'シットアップ',
    },
    {
      id: 'todo3',
      text: 'バックエクステンション',
    },
  ];

  // 右側のアイテムリスト
  const fixedItems = [
    {
      id: 'item0',
      text: 'スクワット',
    },
    {
      id: 'item1',
      text: 'プッシュアップ',
    },
    {
      id: 'item2',
      text: 'シットアップ',
    },
    {
      id: 'item3',
      text: 'バックエクステンション',
    },
  ];

  // tasks ステートとその更新関数 setTasks を定義する
  const [tasks, setTasks] = useState(initialTasks);

  // ドラッグ＆ドロップ操作終了時のハンドラー
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // ドロップ先が存在しない場合は何もしない
    if (!destination) {
      return;
    }

    // 左から右へのドラッグ＆ドロップ
    if (source.droppableId === 'items' && destination.droppableId === 'tasks') {
      const task = initialTasks[source.index];
      setTasks((prevTasks) => {
        const newTasks = [...prevTasks];
        newTasks.splice(destination.index, 0, task);
        return newTasks;
      });
    }

    // 右から左へのドラッグ＆ドロップ（無効にする）
    if (source.droppableId === 'tasks' && destination.droppableId === 'items') {
      return;
    }

    // 左から左へのドラッグ＆ドロップ（アイテムの入れ替え）
    if (source.droppableId === 'tasks' && destination.droppableId === 'tasks') {
      const draggedTask = tasks[source.index];
      const newTasks = [...tasks];
      newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, draggedTask);
      setTasks(newTasks);
    }
  };

  return (
    <>
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
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
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
    </>
  );
};

export default DragDrop;
