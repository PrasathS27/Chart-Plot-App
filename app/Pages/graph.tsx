import { useEffect, useState } from "react";
import Link from 'next/link';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

export default function GraphPage() {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chartData") || "[]");
    const labels = data.map((point: any) => point.x);
    const values = data.map((point: any) => point.y);

    setChartData({
      labels,
      datasets: [
        {
          label: "X vs Y",
          data: values,
          fill: false,
          borderColor: "blue",
          backgroundColor: "lightblue",
        },
      ],
    });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      {/* <Link href="/graph">
        <h1>Graph View</h1>
      </Link> */}
      <Line data={chartData} />
    </div>
  );
}
