"use client";
import React from 'react';
import Index from './Pages/index';
import Graph from './Pages/graph';
import DisplayChart from './components/ChartDispLay'; 
import InputForm from './components/InputForm';

export default function Page() {
  return (
    <div className="container">
      <h1 className='text-center text-2xl font-bold'>Plot Chart</h1>
      <Index />
      <Graph />
      <DisplayChart />
      <InputForm />
    </div>
  );
}
