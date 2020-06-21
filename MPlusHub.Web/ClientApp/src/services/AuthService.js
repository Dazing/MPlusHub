export default {
  getAccessToken: async () => {
    const token = '';
    return token.accessToken;
  },

  getAuthHeaders: async () => {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${await this.getAccessToken()}`
    };
  }

};
