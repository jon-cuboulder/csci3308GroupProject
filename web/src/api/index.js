// TODO: remove hard coded host
const API_HOST = 'http://localhost';

// Build the full url for the api call.  If there is any data to include in the 
// query string, properly encode it.
const apiUrl = (uri, params) => {
  // strip leading and trailing slashes
  uri = uri.replace(/^\//, '').replace(/\/$/, '');
  uri = `${API_HOST}/api/${uri}`;
  if(typeof params === "object") {
    let qs = new URLSearchParams(params);
    uri = `${uri}?${qs.toString()}`;
  }

  return uri;
};


const get = (url, queryParams) => {
  url = apiUrl(url, queryParams);
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  const options = {
    mode: 'cors',
    headers
  };

  return fetch(url, options).then(resp => resp.json());
};

const post = (url, payload) => {
  url = apiUrl(url);
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  const options = {
    mode: 'cors',
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload)
  };
  return fetch(url, options).then(resp => resp.json());
};

export function resourceCreate(payload) {
  return post('/resources', payload);
}

export function topicGet(id) {
  return get(`/topics/${id}`);
}

export function topicCreate(payload) {
  return post('/topics', payload);
}

export function search(query) {
  const params = query? {q: query}: undefined;
  return get('topics', params);
}

export function register(name, email, password) {
  const payload = {
    name,
    email,
    password
  };

  return post('users', payload);
}

export function signin(email, password) {
  const payload = {
    email,
    password
  };

  return post('login', payload);
}
