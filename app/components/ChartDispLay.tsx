"use client";

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const DisplayChart = () => {
  const [chartData, setChartData] = useState<{ x: number, y: number }[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('chartData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setChartData(parsedData);
      } catch (e) {
        console.error("Error parsing chart data", e);
        setChartData([]);
      }
    }
  }, []);

  const labels = chartData.map((point) => point.x);
  const data = chartData.map((point) => point.y);

  return (
    <Line
      data={{
        labels,
        datasets: [{
          label: 'X vs Y Plot',
          data,
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.4)'
        }]
      }}
    />
  );
};

export default DisplayChart;
