import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BASE_URL } from './constants/baseUrl.ts';
import AddCardCompletePage from './pages/AddCardCompletePage.tsx';
import AddCardPage from './pages/AddCardPage.tsx';

function App() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/card/add" replace />} />
        <Route path="/card/add" element={<AddCardPage />} />
        <Route path="/card/add/complete" element={<AddCardCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
