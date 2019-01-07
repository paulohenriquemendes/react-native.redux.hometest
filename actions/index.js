import axios from 'axios';

// Coloque os action creators aqui

const REQUEST_URL = 'https://app-nodejs-react-wr.herokuapp.com/api';

export const fetchPosts = () => {
  // fazer pedido HTTP para obter todos os posts
  const request = axios.get(`${REQUEST_URL}/questions`);

  return {
    type: 'FETCH_CATEGORIES',
    payload: request   // Promise
  };
};

export const fetchPost = (category) => {
  // faz pedido HTTP
  const request = axios.get(`${REQUEST_URL}/question/${category}`);

  // retorna action
  return {
    type: 'FETCH_POST',
    // vai virar response (resposta) por causa do redux promise
    payload: request
  };
}