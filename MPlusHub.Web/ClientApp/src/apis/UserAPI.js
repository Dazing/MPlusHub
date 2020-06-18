import httpRequest from "../services/HttpService"

export default {
  GetMe: () => httpRequest('GET', '/api/me'),
};
