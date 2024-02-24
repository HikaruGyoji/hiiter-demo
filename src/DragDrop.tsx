import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faInfo } from '@fortawesome/free-solid-svg-icons';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import styles from './styles/DragDrop.module.scss';
import data from '../src/demoData/levelSetting.json';
import { Link } from 'react-router-dom';
import Popup from './Popup'; // Popupコンポーネントのインポート

const DragDrop = () => {
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
  const [maxSelected, setMaxSelected] = useState<number>(4);
  const [fixedItems, setFixedItems] = useState<{ id: string; text: string }[]>([
    { id: 'd1', text: 'スクワット' },
    { id: 'd2', text: 'プッシュアップ' },
    { id: 'd3', text: 'シットアップ' },
    { id: 'd4', text: 'バックエクステンション' },
  ]);
  const [menuConfirmed, setMenuConfirmed] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false); // ポップアップの表示状態を管理
  const [exerciseName, setExerciseName] = useState<string>(''); // エクササイズ名の状態を管理

  useEffect(() => {
    const selectedLevel: string | null = localStorage.getItem('selectedLevel');
    const selectedCourse: string | null =
      localStorage.getItem('selectedCourse');

    if (selectedCourse && selectedLevel) {
      // @ts-ignore
      const selectedCourseData = data['hiit'][selectedCourse];
      if (selectedCourseData) {
        const selectedItem = selectedCourseData.find(
          (item: { Lv: number }) => item.Lv === parseInt(selectedLevel)
        );
        if (selectedItem) {
          setMaxSelected(selectedItem.maxSelected);
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
          setFixedItems(newFixedItems);
        }
      }
    }

    // Check if hiitTasks exists in localStorage and set it to tasks state if it does
    const hiitTasks: string | null = localStorage.getItem('hiitTasks');
    if (hiitTasks) {
      setTasks(JSON.parse(hiitTasks));
    } else {
      setTasks([
        { id: 't1', text: 'スクワット' },
        { id: 't2', text: 'プッシュアップ' },
        { id: 't3', text: 'シットアップ' },
        { id: 't4', text: 'バックエクステンション' },
      ]);
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
        id: `task${Date.now()}`, // タイムスタンプを使ってユニークなIDを生成
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

  const handleInfoButtonClick = (exerciseName: string) => {
    setExerciseName(exerciseName); // クリックされた要素のエクササイズ名を設定
    setIsPopupOpen(true); // infoボタンがクリックされた時にポップアップを表示
  };

  const closePopup = () => {
    setIsPopupOpen(false); // ポップアップを閉じる関数
  };

  const handleMenuConfirm = () => {
    setMenuConfirmed(true);
    localStorage.setItem('hiitTasks', JSON.stringify(tasks));
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
          <p>全運動種目：{fixedItems.length}種</p>
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
                        <button
                          onClick={() => handleInfoButtonClick(item.text)} // クリックされた要素のエクササイズ名を渡す
                        >
                          <FontAwesomeIcon
                            icon={faInfo}
                            className={styles['infoButton']}
                          />
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div className={styles['button-wrapper']}>
            {tasks.length === maxSelected ? (
              <Link
                to='/home'
                onClick={handleMenuConfirm}
                className={`${styles.button} ${styles['-primary']}`}
              >
                メニュー確定
              </Link>
            ) : (
              <button
                className={`${styles.button} ${styles['-primary']} ${styles['-disabled']}`}
                disabled
              >
                メニュー確定
              </button>
            )}
            {tasks.length === maxSelected ? (
              <Link
                to='/exercise'
                className={`${styles.button} ${styles['-primary']}`}
                onClick={handleMenuConfirm}
              >
                運動開始
              </Link>
            ) : (
              <button
                className={`${styles.button} ${styles['-primary']} ${styles['-disabled']}`}
                disabled
              >
                運動開始
              </button>
            )}
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <Popup type='info' onClose={closePopup} exerciseName={exerciseName} />
      )}
    </DragDropContext>
  );
};

export default DragDrop;
