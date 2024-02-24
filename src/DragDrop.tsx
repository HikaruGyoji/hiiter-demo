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
import data from '../src/demoData/levelSetting.json';

const DragDrop = () => {
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
  const [maxSelected, setMaxSelected] = useState<number>(0);
  const [fixedItems, setFixedItems] = useState<{ id: string; text: string }[]>(
    []
  ); // fixedItemsのuseStateを追加

  useEffect(() => {
    // コンポーネントがマウントされたときにlocalStorageから値を取得してコンソールログに反映
    const selectedLevel: string | null = localStorage.getItem('selectedLevel');
    const selectedCourse: string | null =
      localStorage.getItem('selectedCourse');
    console.log('selectedLevel:', selectedLevel);
    console.log('selectedCourse:', selectedCourse);

    if (selectedCourse && selectedLevel) {
      // @ts-ignore
      const selectedCourseData = data['hiit'][selectedCourse];
      if (selectedCourseData) {
        const selectedItem = selectedCourseData.find(
          (item: { Lv: number }) => item.Lv === parseInt(selectedLevel)
        );
        if (selectedItem) {
          console.log(selectedItem.type);
          console.log(selectedItem.maxSelected);
          setMaxSelected(selectedItem.maxSelected); // maxSelectedの値を設定
          const initialTasks = [];
          for (
            let i = 0;
            i < selectedItem.type.length && i < selectedItem.maxSelected;
            i++
          ) {
            initialTasks.push({ id: `todo${i}`, text: selectedItem.type[i] });
          }
          setTasks(initialTasks);

          const newFixedItems = [];
          for (let i = 0; i < selectedItem.type.length; i++) {
            newFixedItems.push({ id: `item${i}`, text: selectedItem.type[i] });
          }
          setFixedItems(newFixedItems); // fixedItemsをセット
        }
      }
    }
  }, []);

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
          {tasks.length !== maxSelected ? (
            <p>
              現在のメニュー：
              <span className={styles['caution']}>{tasks.length}</span>/
              {maxSelected}
            </p>
          ) : (
            <p>
              現在のメニュー：{tasks.length}/{maxSelected}
            </p>
          )}
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
          <p>運動種目数：{fixedItems.length}</p>
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
