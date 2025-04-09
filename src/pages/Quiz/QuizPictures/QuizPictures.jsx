import React, { useEffect, useState } from 'react';
import styles from './QuizPictures.module.scss';
import { getRandomGames } from '../../../api/quizApi';

function QuizPictures() {
  const [games, setGames] = useState([]);
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getRandomGames();
        setGames(gamesData);
        console.log(gamesData);
      } catch (error) {
        console.error('Erreur lors de la récupération des jeux:', error);
      }
    };

    fetchGames();
  }, []);

  const isGuessCorrect = (guess, game) => {
    // Convertir en minuscules et enlever les caractères spéciaux
    const cleanGuess = guess.toLowerCase().replace(/[^a-z0-9\s]/g, '');
    const cleanSlug = game.slug.toLowerCase().replace(/[^a-z0-9\s]/g, '');

    // Séparer en mots
    const guessWords = cleanGuess
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const slugWords = cleanSlug.split(/\s+/).filter((word) => word.length > 0);

    // Compter les mots correspondants
    const matchingWords = guessWords.filter((word) =>
      slugWords.some(
        (slugWord) => slugWord.includes(word) || word.includes(slugWord)
      )
    );

    // Retourner true si au moins 2 mots correspondent
    return matchingWords.length >= 1;
  };

  const handleGuess = () => {
    if (!games.length) return;

    const currentGame = games[currentGameIndex];
    const isCorrect = isGuessCorrect(userGuess, currentGame);

    if (isCorrect) {
      setScore(score + 1);
      setMessage('Bravo ! Bonne réponse !');
    } else {
      setMessage(`Dommage ! La réponse était : ${currentGame.name}`);
    }

    // Passer au jeu suivant après 2 secondes
    setTimeout(() => {
      setCurrentGameIndex((prevIndex) => (prevIndex + 1) % games.length);
      setUserGuess('');
      setMessage('');
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGuess();
    }
  };

  if (!games.length) {
    return <div className={styles.loading}>Chargement...</div>;
  }

  const currentGame = games[currentGameIndex];
  const randomScreenshot =
    currentGame.screenshots[
      Math.floor(Math.random() * currentGame.screenshots.length)
    ];
  const imageUrl = `https://images.igdb.com/igdb/image/upload/t_1080p/${randomScreenshot.image_id}.jpg`;

  return (
    <div className={styles.quizPictures}>
      <div className={styles.gameContainer}>
        <div className={styles.score}>Score: {score}</div>
        <img
          src={imageUrl}
          alt="Screenshot du jeu"
          className={styles.gameImage}
        />
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Quel est le nom de ce jeu ?"
            className={styles.input}
          />
          <button onClick={handleGuess} className={styles.button}>
            Valider
          </button>
        </div>
        {message && <div className={styles.message}>{message}</div>}
      </div>
    </div>
  );
}

export default QuizPictures;
