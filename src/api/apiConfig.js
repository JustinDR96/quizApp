import axios from 'axios';

const IGDB_CLIENT_ID = import.meta.env.VITE_IGDB_CLIENT_ID;
const IGDB_CLIENT_SECRET = import.meta.env.VITE_IGDB_CLIENT_SECRET;

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      'https://id.twitch.tv/oauth2/token',
      null,
      {
        params: {
          client_id: IGDB_CLIENT_ID,
          client_secret: IGDB_CLIENT_SECRET,
          grant_type: 'client_credentials',
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Erreur lors de la récupération du token IGDB:', error);
    throw error;
  }
};

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Client-ID': IGDB_CLIENT_ID,
    Accept: 'application/json',
  },
});

// Intercepteur pour ajouter le token d'accès à chaque requête
api.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Intercepteur pour gérer les erreurs globalement
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erreur API:', error);
    return Promise.reject(error);
  }
);

export default api;
