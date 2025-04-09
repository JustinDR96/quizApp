import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import QuizPictures from './QuizPictures/QuizPictures';
import { ROUTES_QUIZ } from '../../constants/routes';

function QuizMain() {
  return (
    <>
      <Routes>
        <Route path={ROUTES_QUIZ.pictures} element={<QuizPictures />} />
      </Routes>
    </>
  );
}

export default QuizMain;
