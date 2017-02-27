const axios = require('axios');
const httpAdapter = require('axios/lib/adapters/http');
const querystring = require('querystring');

// axios settings needed when testing actions
axios.defaults.host = 'https://api.envato.com';
axios.defaults.adapter = httpAdapter;

class EnvatoApi {
  constructor(options) {
    this.username = options.username;
    this.token = options.token;

    this.baseUrl = 'https://api.envato.com/';
    this.baseVersion = 'v1';

    this.market = options.market ? options.market : 'ThemeForest';

    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.redirectUri = options.redirectUri;

    this.accessToken = options.accessToken ? options.accessToken : '';
    this.refreshToken = options.refreshToken ? options.refreshToken : '';
    this.tokenExpireDate = options.expireDate ? options.expireDate : '';
    this.expiresIn = options.expiresIn ? options.expiresIn : 3000;
  }

  prepareUrl(version, url) {
    return this.baseUrl + (version ? version : this.baseVersion) + url;
  }

  get(options, callback) {

    if (!this.isTokenValid()) {
      this.askNewToken(options, callback);
    } else {
      let url = this.prepareUrl(options.version, options.url);

      if (options.params) {
        url += '?' + querystring.stringify(options.params);
      }

      return axios.get(url, {
        headers: { Authorization: 'Bearer ' + this.accessToken },
      })
      .then(result => {
        callback(null, result.data);
      })
      .catch(err => callback(err));
    }
  }

  totalItems(callback) {
    return this.get({
      url: '/market/total-items.json',
    }, callback);
  }

  totalUsers(callback) {
    return this.get({
      url: '/market/total-users.json',
    }, callback);
  }

  userUsername(callback) {
    return this.get({
      url: '/market/private/user/username.json',
    }, callback);
  }

  userEmail(callback) {
    return this.get({
      url: '/market/private/user/email.json',
    }, callback);
  }

  userDetails(params, callback) {
    const username = (params.username) ? params.username : this.username;
    return this.get({
      url: '/market/user:' + username + '.json',
    }, callback);
  }

  userAccount(callback) {
    return this.get({
      url: '/market/private/user/account.json',
    }, callback);
  }

  userBadges(params, callback) {
    const username = (params.username) ? params.username : this.username;
    return this.get({
      url: '/market/user-badges:' + username + '.json',
    }, callback);
  }

  authorItemsBySite(params, callback) {
    const username = (params.username) ? params.username : this.username;
    return this.get({
      url: '/market/user-items-by-site:' + username + '.json',
    }, callback);
  }

  authorFiles(params, callback) {
    const username = (params.username) ? params.username : this.username;
    const market = (params.market) ? params.market : this.market;

    return this.get({
      url: `/market/new-files-from-user:${username},${market}.json`,
    }, callback);
  }

  authorEarningsSales(callback) {
    return this.get({
      url: '/market/private/user/earnings-and-sales-by-month.json',
    }, callback);
  }

  authorStatement(params, callback) {
    return this.get({
      url: '/market/user/statement',
      version: 'v3',
      params,
    }, callback);
  }

  setUsername(username) {
    this.username = username;
  }

  isTokenValid() {
    const date = new Date();
    return date < this.tokenExpireDate;
  }

  askNewToken(options, callback) {
    const params = querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: this.refreshToken,
      client_id: this.clientId,
      client_secret: this.clientSecret,
    });

    return axios.post('https://api.envato.com/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => {

      const data = response.data;

      const expireDate = new Date();
      expireDate.setSeconds(expireDate.getSeconds() + this.expiresIn);

      this.tokenExpireDate = expireDate;
      this.accessToken = data.access_token;

      this.get(options, callback);
    })
    .catch(err => callback(err));
  }

  setToken(accessToken, refreshToken, expiresIn) {
    const threeshold = expiresIn - 600;
    const expireDate = new Date();
    expireDate.setSeconds(expireDate.getSeconds() + threeshold);

    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.tokenExpireDate = expireDate;
    this.expiresIn = threeshold;

    return expireDate;
  }

  authorize(code, callback) {
    const params = querystring.stringify({
      grant_type: 'authorization_code',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      code: code,
    });

    return axios.post('https://api.envato.com/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => {
      const data = response.data;
      const expireDate = this.setToken(data.access_token, data.refresh_token, data.expires_in);

      return this.userUsername((err, result) => {
        if (err) {
          callback(err);
        }

        this.setUsername(result.username);
        data.username = result.username;
        data.expireDate = expireDate;
        callback(null, data);
      });

    })
    .catch(err => callback(err));
  }
}

module.exports = function (options) {
  return new EnvatoApi(options);
};
