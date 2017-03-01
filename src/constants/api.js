//import Envato from 'node-envato/index-es5';
import Envato from '../envato';

import { getTokens } from '../auth';

// Read from localStorage if created
const ls = getTokens();
const lsUsername = (ls) ? ls.username : '';
const lsAccessToken = (ls) ? ls.accessToken : '';
const lsRefreshToken = (ls) ? ls.refreshToken : '';
const lsExpireDate = (ls) ? new Date(ls.expireDate) : '';

export const config = {
  // username: 'teamfox',
  // token: '7S3QE0NGJUr9MwJaLLo0usgjSrS85yLm',

  clientId: 'envaton-yup4hshr',
  clientSecret: 'ELuMHNFC6xXnQbxDHJqsPfIdtnncFDdV',
  redirectUri: 'http://localhost:3000/login',
};

const envato = Envato({
  // username: config.username,
  // token: config.token,

  clientId: config.clientId,
  clientSecret: config.clientSecret,
  redirectUri: config.redirectUri,

  username: lsUsername,
  accessToken: lsAccessToken,
  refreshToken: lsRefreshToken,
  tokenExpireDate: lsExpireDate,
});

console.log(envato);

export default envato;
