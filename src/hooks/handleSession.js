export function getItemWithExpiration(key) {
  const sessionID = JSON.parse(localStorage.getItem(key));

  if (!sessionID) return null;

  const now = new Date();

  if (now.getTime() > sessionID.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  
  return sessionID.token;
}

export function setItemWithExpiration(key, token) {
  const now = new Date()
  const sessionID = {
    token: token,
    expiry: now.getTime() + 24 * 60 * 60 * 1000  // adiciona 24 horas em milissegundos
  }
  localStorage.setItem(key, JSON.stringify(sessionID))
}