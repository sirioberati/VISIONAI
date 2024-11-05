import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';
import { BusinessForm } from './pages/BusinessForm';
import { Dashboard } from './pages/Dashboard';
import { Coaching } from './pages/Coaching';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/collect" element={<BusinessForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coaching" element={<Coaching />} />
      </Route>
    </Routes>
  );
}

export default App;