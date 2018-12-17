import http from './http-service';

class AuthService {

  login(email, password) {
    return http.post('/auth/login', {
      email,
      password
    }).then(({ data }) => data);
  }

  setAuthHeaders(token) {
    if (!token) {
      delete http.defaults.headers.common['Authorization'];
      return;
    }
    http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

const checkForInitialToken = (authService) => {
  const token = localStorage.getItem('token');
  if (token) {
    authService.setAuthHeaders(token);
  }
}

const authService = new AuthService();
checkForInitialToken(authService);
export default authService;