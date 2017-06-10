import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Service.extend({
  call(httpMethod, url, content_type, params, body) {
    const initPomise = {
      method: httpMethod,
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-type': content_type,
      }
    };
    if (httpMethod === 'POST') {
      if (body !== undefined) {
        initPomise.body = JSON.stringify(body);
      }
    }

    let __url = "//kursbd-backend.herokuapp.com/" + url;

    if (params !== null) {
      __url += '?';
      for (let key in params) {
        __url += `${key}=${params[key]}&`;
      }
      __url = __url.slice(0, -1);
    }

    return fetch(__url, initPomise)
      .then(response => {
        if (response.status / 100 !== 2) throw response;
        return response.json();
      });
  },
});