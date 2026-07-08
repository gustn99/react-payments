import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BASE_URL } from './constants/baseUrl.ts';
import AddCardCompletePage from './pages/AddCardCompletePage.tsx';
import AddCardPage from './pages/AddCardPage.tsx';

export const ROUTES = {
  root: '/',
  addCard: '/card/add',
  addCardComplete: '/card/add/complete',
};

function App() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route path={ROUTES.root} element={<Navigate to={ROUTES.addCard} replace />} />
        <Route path={ROUTES.addCard} element={<AddCardPage />} />
        <Route path={ROUTES.addCardComplete} element={<AddCardCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
