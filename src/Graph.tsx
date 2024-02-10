import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

// 体重データのインターフェース
interface WeightEntry {
  date: string;
  weight: number;
}

// カロリーデータのインターフェース
interface CalorieEntry {
  date: string;
  calories: number;
}

// グラフコンポーネントのプロップスの型定義
interface GraphProps {
  data: (WeightEntry | CalorieEntry)[]; // 体重データまたはカロリーデータの配列
}

// グラフコンポーネント
const Graph: React.FC<GraphProps> = ({ data }) => {
  // 日付とデータを分離
  const dates = data.map((entry) => entry.date);

  // 体重データの場合、体重を抽出
  const weights = data
    .filter((entry) => 'weight' in entry)
    .map((entry) => (entry as WeightEntry).weight);

  // カロリーデータの場合、カロリーを抽出
  const calories = data
    .filter((entry) => 'calories' in entry)
    .map((entry) => (entry as CalorieEntry).calories);

  // Chart.jsのデータセットを設定
  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Weight', // 凡例のラベル
        data: weights,
        borderColor: '#ee817b',
        backgroundColor: 'rgba(255, 255, 255, 1)',
      },
      {
        label: 'Calories', // 凡例のラベル
        data: calories,
        borderColor: '#3e95cd',
        backgroundColor: 'rgba(255, 255, 255, 1)',
      },
    ],
  };

  // Chart.jsのオプション設定
  const options = {
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line height={230} width={280} data={chartData} options={options} />;
};

export default Graph;
