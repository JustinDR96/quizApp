import React, { useEffect } from 'react';
import styles from './QuizPictures.module.scss';
import { getRandomGames } from '../../../api/quizApi';

function QuizPictures() {
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const games = await getRandomGames();
        console.log('Jeux récupérés:', games);
      } catch (error) {
        console.error('Erreur lors de la récupération des jeux:', error);
      }
    };

    fetchGames();
  }, []);

  return <div className={styles.quizPictures}>quiz pictures</div>;
}

export default QuizPictures;
