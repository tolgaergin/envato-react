export function getTokens() {
  return JSON.parse(localStorage.getItem('envado'));
};

export function setTokens(newTokens) {
  return localStorage.setItem('envado', JSON.stringify(newTokens));
};

export function logout() {
  localStorage.removeItem('envado');
  return true;
};

export function isLoggedIn() {
  return !!JSON.parse(localStorage.getItem('envado'));
}
