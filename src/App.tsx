import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AgenteSitefProvider } from './context/AgenteSitefContext';
import './style.css';
import AgenteCliSiTef from './pages/AgenteCliSitef';
import VendaComSessao from './pages/VendaComSessao';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AgenteSitefProvider>
        <Routes>
              <Route  path="/" element={<AgenteCliSiTef />} />
              <Route path="/venda-sessao" element={<VendaComSessao/>} />
        </Routes>
      </AgenteSitefProvider>
    </BrowserRouter>
  );
};

export default App;
