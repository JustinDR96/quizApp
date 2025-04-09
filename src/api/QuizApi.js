import api from './apiConfig';

export const getRandomGames = async () => {
  try {
    const query =
      'fields name,cover.*, screenshots.*,alternative_names.*,slug; where rating > 70 & rating_count > 100; sort rating desc; limit 10;';

    const response = await api.post('/games', query);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des jeux:', error);
    throw error;
  }
};
