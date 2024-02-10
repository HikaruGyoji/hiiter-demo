import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Progress.module.scss';
import BasicDateCalendar from './BasicDateCalendar';
import WeightChart from './Graph';
import { useState, ChangeEvent } from 'react';

// 1月分の体重推移データを生成する関数
const generateWeightDataForJanuary = () => {
  const startDate = new Date('2024-01-01');
  const endDate = new Date('2024-01-31');
  const weightData = [];

  // 1月の各日付に対してランダムな体重を生成
  for (
    let currentDate = startDate;
    currentDate <= endDate;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    const randomWeight = Math.random() * (80 - 60) + 60; // 60kgから80kgの間でランダムな体重を生成
    weightData.push({
      date: currentDate.toISOString().slice(0, 10),
      weight: randomWeight,
    });
  }

  return weightData;
};

// 親コンポーネントで1月分の体重推移データを生成
const weightDataForJanuary = generateWeightDataForJanuary();

interface CalorieEntry {
  date: string;
  calories: number;
}

// 1月分のカロリー計算データを生成する関数
const generateCalorieDataForJanuary = () => {
  const startDate = new Date('2024-01-01');
  const endDate = new Date('2024-01-31');
  const calorieData: CalorieEntry[] = [];

  // 1月の各日付に対してランダムなカロリーを生成
  for (
    let currentDate = startDate;
    currentDate <= endDate;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    const randomCalories = Math.random() * (3000 - 1500) + 1500; // 1500kcalから3000kcalの間でランダムなカロリーを生成
    calorieData.push({
      date: currentDate.toISOString().slice(0, 10),
      calories: randomCalories,
    });
  }

  return calorieData;
};

// 親コンポーネントで1月分のカロリー計算データを生成
const calorieDataForJanuary = generateCalorieDataForJanuary();

function Progress() {
  const [weight, setWeight] = useState('');

  // 体重の選択肢を生成
  const weightOptions = [];
  for (let i = 30; i <= 150; i++) {
    weightOptions.push(
      <option key={i} value={i}>
        {i}kg
      </option>
    );
  }

  const handleWeightChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setWeight(e.target.value);
    changeColor(e.target);
  };

  const changeColor = (element: HTMLInputElement | HTMLSelectElement) => {
    if (element !== null) {
      if (element.value === '') {
        element.style.color = '#8e8e8e';
      } else {
        element.style.color = 'black';
      }
    } else {
      return;
    }
  };

  return (
    <div className={styles['userinfo1']}>
      <Header name='進捗状況' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <div className={styles['userinfo-header']}>
          <div className={styles['active-info']}>
            <div>
              <p>連続回数</p>
              <span>{190}</span>
            </div>
            <div>
              <p>回数/月</p>
              <span>{10}</span>
            </div>
          </div>
          <div className={styles['calender']}>
            <BasicDateCalendar />
          </div>
          <p>カロリー換算</p>
          <div className={styles['graph']}>
            <WeightChart data={calorieDataForJanuary} />
          </div>
          <p>今日の体重</p>
          <div>
            <div className={styles['userinfo-group']}>
              <select
                className={styles['input-box']}
                id='weight'
                value={weight}
                onChange={(e) => handleWeightChange(e)}
              >
                <option value='' disabled>
                  選択してください
                </option>
                {weightOptions}
              </select>
            </div>
          </div>
          <p>体重推移</p>

          <div className={styles['graph']}>
            <WeightChart data={weightDataForJanuary} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Progress;
