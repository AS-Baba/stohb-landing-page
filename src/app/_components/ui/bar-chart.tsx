"use client"; // Needed in app directory to ensure client-side rendering

import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  BarElement, 
  CategoryScale, 
  LinearScale, 
  Tooltip, 
  Legend 
} from 'chart.js';

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 20, 50, 60, 40],
        backgroundColor: '#00ca05ff',
        borderColor: '#00ca05ff',
        borderWidth: 1,
      },
    ],
  };

  // Correct options to match the expected types
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,  // Use 'as const' to ensure the type is correct
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
