const fetchApi = (url) => fetch(url, {
  method: 'get',
  mode: 'cors',
  headers: {
    Authorization: 'token 53d2436fb9b92aad41f61ca9800acbff2066a4ca',
  },
});

const baseUrl = 'https://api.github.com/users/luthfi11';

class GithubRepository {
  static getUser() {
    return fetchApi(baseUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        }
      });
  }

  static getAllRepository() {
    return fetchApi(`${baseUrl}/repos`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        }
      });
  }
}

export default GithubRepository;
