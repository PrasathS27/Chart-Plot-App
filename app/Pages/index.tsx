import { useState } from "react";
// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    const existingData = JSON.parse(localStorage.getItem("chartData") || "[]");
    const newData = [...existingData, { x: Number(x), y: Number(y) }];
    localStorage.setItem("chartData", JSON.stringify(newData));
    setX("");
    setY("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Plot Chart</h1>
      <input
        type="number"
        placeholder="X Value"
        value={x}
        onChange={(e) => setX(e.target.value)}
      />
      <input
        type="number"
        placeholder="Y Value"
        value={y}
        onChange={(e) => setY(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Data</button>
      <button onClick={() => router.push("/graph")}>View Graph</button>
    </div>
  );
}
