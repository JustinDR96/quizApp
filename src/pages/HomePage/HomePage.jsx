import styles from './HomePage.module.scss';
import { MagnifyingGlass } from '@phosphor-icons/react';
import categoriesIcons from '../../assets/categories/categoriesIcons';
import { useNavigate } from 'react-router-dom';

const CategoriesQuiz = [
  {
    name: 'Video games by pictures',
    image: categoriesIcons.illustrationPictures,
    path: '/quiz/pictures',
  },
  {
    name: 'Video games Characters',
    image: categoriesIcons.CharacterPictures,
    path: '/quiz/characters',
  },
  {
    name: 'Video games soundtrack',
    image: categoriesIcons.SoundtrackPictures,
    path: '/quiz/soundtrack',
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.searchBar}>
          <div className={styles.icon}>
            <MagnifyingGlass size={25} />
          </div>
          <input type="text" placeholder="Search for a quiz..." />
        </div>
      </div>

      <div className={styles.container}>
        <h2>Categories</h2>
        <div className={styles.quiz}>
          {CategoriesQuiz.map((item) => (
            <div
              key={item.name}
              className={styles.quizItem}
              onClick={() => navigate(item.path)}
            >
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
