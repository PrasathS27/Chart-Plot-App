
import React, { useState } from 'react';
import Link from 'next/link';

const InputForm = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [data, setData] = useState<{ x: number, y: number }[]>([]);

  const handleSubmit = () => {
    const newData = [...data, { x: Number(x), y: Number(y) }];
    setData(newData);
    localStorage.setItem('chartData', JSON.stringify(newData));
    setX('');
    setY('');
  };

  return (
    <>
      <input type="number" value={x} onChange={e => setX(e.target.value)} />
      <input type="number" value={y} onChange={e => setY(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      {/* <Link href="/graph"><button>Go to Graph</button></Link> */}
    </>
  );
};

export default InputForm;
  