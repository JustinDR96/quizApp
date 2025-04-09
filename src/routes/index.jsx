import { ROUTES } from '../constants/routes';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import QuizMain from '../pages/Quiz/QuizMain';

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.quiz} element={<QuizMain />} />
      </Routes>
    </MainLayout>
  );
}
