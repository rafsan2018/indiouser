 
 import axios from 'axios'
//const ROOT_URL = 'https://secret-hamlet-03431.herokuapp.com';
 
export async function loginUser(dispatch, loginPayload) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
      }

      const requestOptions = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'auth-token'},
        body: JSON.stringify(loginPayload),
      };
 
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await axios.post('api/user/login',requestOptions);
    let data = await response.json();
 
    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('user', data);
      return data
    }
 
    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}
 
export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}
