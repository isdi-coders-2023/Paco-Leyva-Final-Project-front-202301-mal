import { AuthUser } from './user-model';

export const getTokenByUser = async (user: AuthUser) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    //const response = await fetch(`http://localhost:4000/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response;
};
