import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AddCardPage from './pages/AddCardPage.tsx';
import AddCardCompletePage from './pages/AddCardCompletePage.tsx';

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="/" element={<Navigate to="/card/add" replace />} />
        <Route path="/card/add" element={<AddCardPage />} />
        <Route path="/card/add/complete" element={<AddCardCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
