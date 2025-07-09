"use client";
import React from 'react';
import Index from './Pages/index';
import Graph from './Pages/graph';
import DisplayChart from './components/ChartDispLay'; 
import InputForm from './components/InputForm';

export default function Page() {
  return (
    <div>
      <Index />
      <Graph />
      <DisplayChart /> 
      <InputForm />
    </div>
  );
}
