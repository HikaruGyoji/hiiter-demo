import React, { useState, useEffect, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import styles from './styles/DragDrop.module.scss';

const DragDrop = () => {
  const initialTasks = [
    { id: 'todo0', text: 'スクワット＆ジャンプ' },
    { id: 'todo1', text: 'ジャンピングジャック＆シザーズ' },
    { id: 'todo2', text: 'その場かけ足' },
    { id: 'todo3', text: 'サイドステップ＆もも上げその場かけ足' },
    { id: 'todo4', text: 'スケーターズランジ' },
    { id: 'todo5', text: 'ギャロップ＆フロアタッチ' },
    { id: 'todo6', text: 'バーピージャンプ' },
    { id: 'todo7', text: 'スクワット＆フロントキック' },
    { id: 'todo8', text: 'マウンテンクライマー' },
  ];

  const fixedItems = [
    { id: 'item0', text: 'スクワット＆ジャンプ' },
    { id: 'item1', text: 'ジャンピングジャック＆シザーズ' },
    { id: 'item2', text: 'その場かけ足' },
    { id: 'item3', text: 'サイドステップ＆もも上げその場かけ足' },
    { id: 'item4', text: 'スケーターズランジ' },
    { id: 'item5', text: 'ギャロップ＆フロアタッチ' },
    { id: 'item6', text: 'バーピージャンプ' },
    { id: 'item7', text: 'スクワット＆フロントキック' },
    { id: 'item8', text: 'マウンテンクライマー' },
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

  useEffect(() => {
    // コンポーネントがマウントされたときにlocalStorageから値を取得してコンソールログに反映
    const selectedLevel = localStorage.getItem('selectedLevel');
    const selectedCourse = localStorage.getItem('selectedCourse');
    console.log('selectedLevel:', selectedLevel);
    console.log('selectedCourse:', selectedCourse);
  }, []); // 空の配列を渡すことでマウント時のみ実行されるようにする

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === 'items' && destination.droppableId === 'tasks') {
      const item = fixedItems[source.index];
      const newTask = {
        id: `task${tasks.length}`, // 新しいタスクに一意の id を付与する
        text: item.text,
      };
      setTasks((prevTasks) => {
        const newTasks = [...prevTasks];
        newTasks.splice(destination.index, 0, newTask);
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
        <div>
          <p>現在のメニュー：9/9</p>
          <Droppable droppableId='tasks'>
            {(provided) => (
              <div
                className={styles['todoList']}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks.map((task, index) => (
                  <div key={task.id} className={styles['todoListNum']}>
                    <span>{index + 1}</span>
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className={styles['todo']}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {task.text}
                          <button
                            onClick={() => {
                              const newTasks = [...tasks];
                              newTasks.splice(index, 1);
                              setTasks(newTasks);
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faTimes}
                              className={styles['deleteButton']}
                            />
                          </button>
                        </div>
                      )}
                    </Draggable>
                  </div>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div>
          <p>運動種目数：9</p>
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
          <p>メニュー確定</p>
          <p>運動開始</p>
        </div>
      </div>
    </DragDropContext>
  );
};

export default DragDrop;
